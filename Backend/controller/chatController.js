import { Server } from 'socket.io';

let waitingUsers = []; // List of waiting users
let onlineUsers = 0;

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: true,
      methods: ["GET", "PUT"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    onlineUsers++; // Increment the online user count
    io.emit("online_users", onlineUsers); // Emit the online user count to all clients

    // Emit the number of waiting users excluding the current user
    const updateWaitingUsers = () => {
      io.emit("waiting_users", waitingUsers.length); // Emit waiting users count to all clients
    };

    socket.on("find_partner", (username) => {
      console.log(`User ${username} ${socket.id} is looking for a partner`);

      // Check if there is a waiting user
      if (waitingUsers.length > 0) {
        const { partnerSocketId, partnerUsername } = waitingUsers.pop();

        // Ensure the user is not matched with themselves
        if (partnerSocketId !== socket.id) {
          const roomID = `${socket.id}-${partnerSocketId}`;
          socket.join(roomID);

          // Retrieve the partner socket instance and make them join the room
          const partnerSocket = io.sockets.sockets.get(partnerSocketId);
          partnerSocket?.join(roomID);

          // Notify both users of the match with the roomID
          io.to(socket.id).emit("matched", { roomID, partnerUsername });
          io.to(partnerSocketId).emit("matched", { roomID, partnerUsername: username });

          console.log(`Users ${socket.id} and ${partnerUsername} ${partnerSocketId} matched in room ${roomID}`);

          updateWaitingUsers();

          // Handle message exchange in the room
          socket.on("send_message", (data) => {
            io.to(roomID).emit("receive_message", data);
          });

          partnerSocket.on("send_message", (data) => {
            io.to(roomID).emit("receive_message", data);
          });

          // Handle image exchange in the room
          socket.on("send_image", (data) => {
            io.to(roomID).emit("receive_image", data);
          });

          partnerSocket.on("send_image", (data) => {
            io.to(roomID).emit("receive_image", data);
          });

        } else {
          // If a user is matched with themselves, re-add them to the queue
          waitingUsers.push({ partnerSocketId: socket.id, partnerUsername: username });
          updateWaitingUsers();
        }
      } else {
        // No partner available, add to waiting list
        waitingUsers.push({ partnerSocketId: socket.id, partnerUsername: username });
        console.log(`User ${username} ${socket.id} added to waiting list`);
        updateWaitingUsers();
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      onlineUsers--; // Decrement the count when a user disconnects
      io.emit("online_users", onlineUsers); // Update the count for all clients

      // Remove user from waiting list if they disconnect
      waitingUsers = waitingUsers.filter(user => user.partnerSocketId !== socket.id);
      updateWaitingUsers();
    });

    // Separate handler for chat room disconnection
    socket.on("disconnect_chat", ({ room, username }) => {
      socket.leave(room);
      socket.to(room).emit("partner_disconnected"); // Notify the partner
      console.log(`User ${username} has disconnected from room ${room}`);
    });
  });
};

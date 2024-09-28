import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI=process.env.MONGO_URI;

export const dbConnect = () => {
	// Connecting to the database using the provided URL from the environment variables
	mongoose.connect(MONGO_URI,{
       dbname:"omegle"
        },{
			family: 4,
		})
		// If the connection is successful, log a success message
		.then(() => console.log("DB CONNECTION SUCCESS"))
		// If there are issues connecting to the database, log an error message and exit the process
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};
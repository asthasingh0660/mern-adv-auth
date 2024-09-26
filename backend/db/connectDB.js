import mongoose from "mongoose";

/*export const connectDB = async () => {
	try {
		console.log("MONGO_URI: ", process.env.MONGO_URI);
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};*/

export const connectDB = async () => {
	try {
	  // Hardcoded MongoDB URI for testing purposes
	  const conn = await mongoose.connect('mongodb+srv://asthasingh0660:VObDFnodfEvfPtyo@cluster0.vj423.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
	  
	  // Log successful connection
	  console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
	  // Log error if connection fails
	  console.log("Error connecting to MongoDB: ", error.message);
	  process.exit(1); // Exit process with failure code
	}
  };
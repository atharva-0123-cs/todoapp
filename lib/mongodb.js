import mongoose from "mongoose";

const connectMongoDB = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        // console.log("Connected with", connection.host);

    }catch(err){
        console.log(err);
    }
};

export default connectMongoDB;
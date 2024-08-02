import mongoose from "mongoose";

export const connection = async(url: string) => {
   try {
    await mongoose.connect(url);
    console.log("MongoDb Connected");
   } catch(error) {
    console.log("error occured while connectiong mongodb");
   }
}
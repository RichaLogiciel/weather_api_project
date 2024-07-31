import mongoose,{Schema, Model,Document } from "mongoose";

interface Weather {
    city: string,
    temperature: number,
    description: string,
    date: Date
}

const weatherSchema = new mongoose.Schema({
    city: { type: String, required: true},
    temperature: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true}
});

const weatherModel: Model<Weather> = mongoose.model<Weather>('Weather',weatherSchema);
export default  weatherModel;
import  express  from "express";
import dotenv from 'dotenv';
import router from "./routes/weatherApiRoutes";
import {connection} from "./db";
const PORT = 8000;
dotenv.config();
const app = express();
connection("mongodb://127.0.0.1:27017/weather_api_project");
app.use(express.json())
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server Started running o ${PORT}`)
})

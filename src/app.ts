import  express  from "express";
import {connection} from "./db";
const PORT = 8000;

const app = express();
connection("mongodb://127.0.0.1:27017/weather_api_project");
app.use()

app.listen(PORT, () => {
    console.log(`Server Started running o ${PORT}`)
})

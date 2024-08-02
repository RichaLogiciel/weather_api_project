import { Router } from 'express';
import { getWeather,getWeatherHistory } from '../controllers/weatherController';
const router = Router();

router.get('/getWeather/:city', getWeather );
router.get('/history', getWeatherHistory);

export default router;



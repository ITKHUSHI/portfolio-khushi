import express from "express"
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
console.log(app)
app.use(cors({
	origin: 'http://localhost:5173/portfolio-khushi/' ,   //process.env.CORS_ORIGIN ,
	credentials: true
}))



app.listen(3000, () => {
	console.log('server listening on port 3000');
});
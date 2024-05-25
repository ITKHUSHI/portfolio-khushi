import nodemailer from "nodemailer"

const email= "khushirathore252002@gmail.com";
const pass="ttel tcyo nppe yhli"

export const  transporter = nodemailer.createTransport({
	service:'gmail',
	// host: "sandbox.smtp.mailtrap.io",
	// port: 2525,
	auth: {
	  user: email,//process.env.EMAIL,
	  pass:  pass, //process.env.EMAIL_PASS,
	}
  });
  export const mailOptions={
	from:email ,//process.env.EMAIL,
	to:pass, //process.env.EMAIL,
  }
import { transporter, mailOptions } from "../../src/config/nodemailer";
const handler=async  function(req, res){
	const transporter = nodemailer.createTransport({
		service: "gmail", 
		auth: {
		  user: process.env.EMAIL,
		  pass:  process.env.EMAIL_PASS
		}
	  });
	  const { name, email,contact, message } = req.body;
	
	  if ( !name || !email || !contact || !message) {
		return res
		  .status(400)
		  .json({ message: 'Please fill out the necessary fields' });
	  }
	
	
		const mailData = {
		from: email,
		to: process.env.EMAIL,
		subject: `Message from ${name}`,
		text: ` Message : ${message} | Sent from: ${email}`,
		html: `<div>${message}</div><p>Sent from: ${email}</p>
		<p> Contact: ${contact}</p>`,
	
		  };
		   await new Promise((resolve, reject) => {
			 transporter.sendMail(mailData, () => {
			  if (err) {
				reject(err);
				return res
				  .status(500)
				  .json({ error: err.message || 'Something went wrong' });
			  } else {
				resolve(info);
				res.status(200).json({ message: 'Message sent!' });
			  }
			});
		  });
	

	// if(req.method === "POST"){
	// 	const data=req.body;
	// 	if(!data.name || !data.email || !data.contact || !data.message){
	// 	    return res.status(400).json({message:"bad request"})

	// 	}
	// 	try {
	// 		await transporter.sendMail({
    //           ...mailOptions,
	// 		  subject:data.subject,
	// 		  text:"This is a test String",
	// 		  html:"<h1> Test Titele</h1><p> some body text</p>"
	// 		})
	// 		return res.status(200).json({success:true})
	// 	} catch (error) {
	// 		console.log(error);
	// 		res.status(400).json({message:error.message})

			
	// 	}
	// }
	// console.log(res.body);
	// res.status(400).json({message:"bad request"})
}
export default handler
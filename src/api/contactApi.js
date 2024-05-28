

 const sendContactForm = async(data)=> {
	try {
		const res = await fetch('https://formspree.io/f/mqkrondo', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
  
		});
	
		const body = await res.json();
		console.log(body,"contact Api")
	
		if (res.ok) {
		  alert(`Mail send Sussesfully 🚀`);
		}
	
		if (res.status === 400) {
		  alert(`${body.message} 😢`);
		}
	  } catch (err) {
		console.log('Something went wrong: ', err);
	  }
	
};
export default sendContactForm
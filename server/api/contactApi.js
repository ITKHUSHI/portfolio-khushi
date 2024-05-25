

export const sendContactForm = async(data)=> {
	try {
		const res = await fetch('/api/contactHandler', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
  
		});
	
		const body = await res.json();
	
		if (res.ok) {
		  alert(`${body.message} 🚀`);
		}
	
		if (res.status === 400) {
		  alert(`${body.message} 😢`);
		}
	  } catch (err) {
		console.log('Something went wrong: ', err);
	  }
	
};
export default sendContactForm
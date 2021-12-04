import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './ContactMe.css';
import { init } from 'emailjs-com';
//service ID= service_cwmvv8o
// templete ID= template_qqr1yue
const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
   
    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
           
           const serviceId = 'service_cwmvv8o';
           const templateId = 'template_qqr1yue';
           const userId = 'user_Fdb6kjUa7c9xmahWzexQE';
           const templateParams = {
               name,
               email,
               message
           };
           
           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    init("user_Fdb6kjUa7c9xmahWzexQE");
    return (
        <div className="container border bg-dark" style={{marginTop:"50px",
        width:'100%',
      
       backgroundPosition:'center',
       backgroundSize: 'cover',
        }}>
            <h1 style={{marginTop:'25px'}} className="text-center text-white">Contact From</h1>
      <form className="row" style={{ margin : "25px 85px 75px 100px"}}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
          
          <label>E-Mail</label>
          <input type="email" placeholder="Your email address" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          
          <label>Messege</label>
          <textarea placeholder="Your message" className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        
        <button onClick={submit} className="mt-2 mb-2 form-control bg-primary text-white" >Send Message</button>
        <span className={emailSent ? 'visible' : null} >Thank you for your message, we will be in touch in no time!</span>
      </form>
        </div>
    );
};

export default ContactMe;
import React from 'react';
import './contact.css'; 

const ContactForm = () => {
  return (
    <div className="contact-form-section">
      <div className="contact-info">
        <h1 className='contact-h1'>Get in touch</h1>
        <div className="main-div">
          <div className='contact-select'>
            <h2>Let's talk</h2>
            <p>As a passionate and dedicated fresher, I am eager to take on new challenges and contribute my skills to exciting projects. I am always open to learning and collaborating, so feel free to reach out with any opportunities. I am available and ready to work—let’s build something great together!</p>
            <div className="contact-details">
            <p><img src="https://t3.ftcdn.net/jpg/02/38/96/64/360_F_238966486_A5wEWiRNtuUm85Qxj5BM12hCDNrSS7yS.jpg" alt="Email" />mukheshsompalli02@gmail.com</p>
              <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIIAZhSeG5dj-8TgXmNn0HNUwq-I9hCzKXk1qUte_BVUSvYJNnn0T9tw&s" alt="Phone" /> +91 7093858979</p>
              <p><img src="data:image/png;base64,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" alt="Location" /> Hyderabad</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="Password" id="Password" name="Password" placeholder="Enter your Password" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Write your message here</label>
                <textarea id="message" name="message" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

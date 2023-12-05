import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-item">
          <AiOutlineMail className="contact-icon" />
          <a href="mailto:example@example.com">rafaelj492@gmail.com</a>
        </div>
        <div className="contact-item">
          <AiOutlinePhone className="contact-icon" />
          <a href="tel:+12345678901">+55 35 99123 9449</a>
        </div>
      </div>
    );
  }
}

export default Contact;
import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_mtmhYXUMMe1Kp6F9oNgjI')

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("default_service","template_icyxcnm", {
      to_email: 'ericfitzsimons451@gmail.com',
      from_email: this.state.email,
      from_name: this.state.name,
      to_name: "Kate Connors",
      message: this.state.message
      }).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  render () {
    return (
      <div>
        <form className="contact-form" onSubmit={this.sendEmail}>
          <h2>Inquiries About Us</h2>
          
          <label for={this.name}>Name</label>
          <input type="text" onChange={this.handleChange}/>
          
          <label for={this.email}>Email</label>
          <input type="email" onChange={this.handleChange}/>
          
          <label for={this.message}>Inquiry</label>
          <input type="text" onChange={this.handleChange}/>
          
          <input type="submit"/>
        </form>
      </div>
    );
  }
 
}

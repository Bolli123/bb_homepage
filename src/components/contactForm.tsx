import React from "react"

const ContactForm = () => {
    function handleSubmit(e : Event) {
      e.preventDefault();
      console.log()
    }
    return (
      <div className="contactFormContainer">
        <h1 className="header">CONTACT</h1>
        <form className="contactForm" action="https://public.herotofu.com/v1/7d248730-c426-11ec-a557-034a17e2da28" method="POST">
            <p>Name</p>
            <input type="text" id="inpName" name="inpName" className="textInput"/>
            <p>Email</p>
            <input type="text" id="inpEmail" name="inpEmail" className="textInput"/>
            <p>Message</p>
            <input type="text" id="inpMsg" name="inpMsg" className="textInput"/>
            <button type="submit" value="Submit" className="contactSubmit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm
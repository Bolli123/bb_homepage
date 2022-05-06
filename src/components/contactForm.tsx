import React from "react"

const ContactForm = () => {
    return (
      <div className="contactFormContainer">
        <h1 className="header">Contact</h1>
        <form className="contactForm" action="https://public.herotofu.com/v1/7d248730-c426-11ec-a557-034a17e2da28" method="POST">
          <div className="inputContainer">
            <input id="inpName" name="inpName" className="textInput" placeholder=" "/>
            <label className="inputLabel">Name</label>
          </div>
          <div className="inputContainer">
            <input  placeholder=" " id="inpEmail" name="inpEmail" className="textInput"/>
            <label className="inputLabel">Email</label>
          </div>
          <div className="inputContainer">
            <textarea  placeholder=" " id="inpMsg" name="inpMsg" className="textInput resizable"/>
            <label className="inputLabel txtAreaLbl">Message</label>
          </div>
            <button type="submit" value="Submit" className="contactSubmit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm
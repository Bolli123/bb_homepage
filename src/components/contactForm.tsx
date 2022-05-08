import React, { SyntheticEvent, useState } from "react"

type EmailContent = {
  Name?: string,
  Email: string,
  Message: string
}

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validMsg, setValidMsg] = useState(true)

  function validateForm(data : EmailContent) {
    if (data.Email !== '') {
      setValidEmail(true)
    }
    else {
      setValidEmail(false)
    }
    if (data.Message !== '') {
      setValidMsg(true)
    }
    else {
      setValidMsg(false)
    }
    return (validEmail && validMsg)
  }

  function sendEmail(data : EmailContent) {
    const requestOptions = {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body: JSON.stringify({
        Name: data.Name,
        Email: data.Email,
        Message: data.Message
      }
        )
    };
    fetch('https://public.herotofu.com/v1/7d248730-c426-11ec-a557-034a17e2da28', requestOptions)
        .then(response => response.json())
  }

  function handleSubmit(e : SyntheticEvent) {
    e.preventDefault()
    const mailData = {
      Name: name,
      Email: email,
      Message: message
    }
    if (validateForm(mailData)) {
      sendEmail(mailData)
    }

  }
  return (
    <div className="contactFormContainer">
      <h1 className="header">Contact</h1>
      <form className="contactForm" /*action="https://public.herotofu.com/v1/7d248730-c426-11ec-a557-034a17e2da28"*/ method="POST" onSubmit={(e) => handleSubmit(e)}>
        <div className="inputContainer">
          <input value={name} id="inpName" name="inpName" className="textInput" placeholder=" " onChange={(e) => setName(e.target.value)}/>
          <label className="inputLabel">Name</label>
        </div>
        <div className="inputContainer">
          <input value={email} placeholder=" " id="inpEmail" name="inpEmail" className={"textInput " + (validEmail ? "" : "invalidInput")} onChange={(e) => setEmail(e.target.value)}/>
          <label className="inputLabel requiredInput">Email</label>
        </div>
        <div className="inputContainerBottom">
          <textarea value={message} placeholder=" " id="inpMsg" name="inpMsg" className={"textInput resizable " + (validMsg ? "" : "invalidInput")} onChange={(e) => setMessage(e.target.value)}/>
          <label className="inputLabel txtAreaLbl requiredInput">Message</label>
        </div>
        <div className="validationLabel" style={{display: (validEmail || validMsg) ? "none" : "block"}}>
          Inputs are required
        </div>
          <button type="submit" value="Submit" className="contactSubmit">Submit</button>
      </form>
    </div>
    )
  }
  
  export default ContactForm
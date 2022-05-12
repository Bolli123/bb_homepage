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
  const [successModal, setSuccessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [timer, setTimer] = useState(setTimeout(() => {}))

  function validateForm(data : EmailContent) {
    let emailValid = true
    let msgValid = true
    if (data.Email === '') {
      emailValid = false
    }
    if (data.Message === '') {
      msgValid = false
    }
    setValidEmail(emailValid)
    setValidMsg(msgValid)
    return (emailValid && msgValid)
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
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(`${response.statusText} (${response.status})`)
          }
          return response.json()
        }).then(() => {
          setSuccessModal(true)
          clearTimeout(timer)
          const t = setTimeout(() => {
            setSuccessModal(false)
          }, 10000)
          setTimer(t)
        }).catch((err) => {
          setErrorModal(true)
          setSubmitError(err.toString())
          clearTimeout(timer)
          const t = setTimeout(() => {
            setErrorModal(false)
          }, 10000)
          setTimer(t)
        })

  }

  function handleSubmit(e : SyntheticEvent) {
    e.preventDefault()
    setSuccessModal(false)
    setErrorModal(false)
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
      <form className="contactForm" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <div className="inputContainer">
          <input value={name} id="inpName" name="inpName" className="textInput" placeholder=" " onChange={(e) => setName(e.target.value)}/>
          <label className="inputLabel">Name</label>
        </div>
        <div className="inputContainer">
          <input value={email} placeholder=" " id="inpEmail" name="inpEmail" className={"textInput " + (validEmail ? "" : "invalidInput")} onChange={(e) => {
            setEmail(e.target.value)
            setValidEmail(true)
            }}/>
          <label className="inputLabel requiredInput">Email</label>
        </div>
        <div className="inputContainerBottom">
          <textarea value={message} placeholder=" " id="inpMsg" name="inpMsg" className={"textInput resizable " + (validMsg ? "" : "invalidInput")} onChange={(e) => {
            setMessage(e.target.value)
            setValidMsg(true)
          }}/>
          <label className="inputLabel txtAreaLbl requiredInput">Message</label>
        </div>
        <div className="validationLabel" style={{visibility: (validEmail || validMsg) ? "hidden" : "visible"}}>
          Fields are required
        </div>
          <button type="submit" value="Submit" disabled={successModal || errorModal} className="contactSubmit">Submit</button>
      </form>
      <div style={{color: "red"}} className={"formSuccessContainer " + ((successModal || errorModal) ? "successSubmit" : "") + (errorModal ? " errorSubmit" : "")}>
          <div className="successHeader">
            {successModal && "Message Sent!"}
            {errorModal ? 'Oops, Error' : ''}
          </div>
          <div className="successBody">
            {successModal && "Thank you for the message, I will be in touch!"}
            {errorModal ? submitError : ''}
          </div>
      </div>
    </div>
    )
  }
  
  export default ContactForm
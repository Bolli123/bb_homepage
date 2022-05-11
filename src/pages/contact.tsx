import React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import "../styles/contactForm.sass"

const Contact = () => {
    return (
      <Layout titleHeader="Contact" route="contact">
        <div>
          <div className="backgroundText contactBackgroundText">Contact</div>
            <ContactForm/>
        </div>
      </Layout>
    )
  }
  
  export default Contact
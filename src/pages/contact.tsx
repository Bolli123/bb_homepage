import React from "react"
import ContactForm from "../components/contactForm.tsx"
import Layout from "../components/layout"
import "../styles/contactForm.sass"

const Contact = () => {
    return (
      <Layout>
        <div>
            <ContactForm> </ContactForm>
        </div>
      </Layout>
    )
  }
  
  export default Contact
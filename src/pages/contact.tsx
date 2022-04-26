import React from "react"
import ContactForm from "../components/contactForm.tsx"
import Layout from "../components/layout"
import "../styles/contactForm.sass"

const Contact = () => {
    return (
      <Layout>
        <div>
            <div className="backgroundText"> 	&#123;&nbsp;&#125; </div>
            <ContactForm> </ContactForm>
        </div>
      </Layout>
    )
  }
  
  export default Contact
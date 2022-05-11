import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout titleHeader="Not Found">
      <div className="backgroundText">=(</div>
      <main style={{textAlign: "center"}}>
        <h1>404 - Page not found</h1>
        <p>
          This is not the page you were looking for, sorry
        </p>
        <a style={{textDecoration: "none", color: "white"}} className="link" href="/">
          Back to safety
        </a>
      </main>
    </Layout>
  )
}

export default NotFoundPage

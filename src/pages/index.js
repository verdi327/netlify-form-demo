import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We want to know what you think!</h1>
    <form name="contact" data-netlify="true">
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>What topics are most important to you</label>
        <br />
        <select>
          <option value="economy">Economy</option>
          <option value="health care">Health Care</option>
          <option value="education">Education</option>
          <option value="crime">Crime</option>
        </select>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

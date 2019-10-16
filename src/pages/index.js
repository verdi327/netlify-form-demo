import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import axios from "axios"
import * as qs from "query-string"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = {
      message: null,
      selectValue: "",
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    console.log(formData)

    axios(axiosOptions)
      .then(res => {
        this.setState({ message: "Form successfully submitted!" })
        this.domRef.current.reset()
      })
      .catch(error => {
        this.setState({ message: "Form unable to be submitted" })
      })
  }

  handleChange = event => {
    this.setState({ selectValue: event.target.value })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>We want to know what you think!</h1>
        {this.state.message && <p>{this.state.message}</p>}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={event => this.handleSubmit(event)}
          ref={this.domRef}
        >
          <input ref="bot-field" type="hidden" name="bot-field" />
          <input
            ref="form-name"
            type="hidden"
            name="form-name"
            value="contact"
          />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input ref="name" type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="important-topic">What's Important to You?</label>
            <select
              id="important-topic"
              value={this.state.selectValue}
              onChange={this.handleChange}
              ref="important-topic"
              name="important-topic"
            >
              <option value="crime">Crime</option>
              <option value="education">Education</option>
              <option value="health care">Health Care</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea ref="message" name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage

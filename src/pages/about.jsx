import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <h3>I currently work as a full-stack web developer.</h3>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
      <p>
        <a href="http://selenasiri.com" target="_blank">
          Selena
        </a>
      </p>
    </Layout>
  )
}

export default AboutPage

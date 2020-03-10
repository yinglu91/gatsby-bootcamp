import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const AboutPage = () => {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  )
}

export default AboutPage

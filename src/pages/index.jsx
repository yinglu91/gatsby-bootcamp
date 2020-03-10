import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Ying, a full-stack developer living in NJ</h2>

      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>

      <Footer />
    </div>
  )
}

export default IndexPage

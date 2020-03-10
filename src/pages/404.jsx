import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const NotFound = () => {
  return (
    <div>
      <Header />
      <h1>Oop dead end</h1>
      <Link to="/">Go Home</Link>

      <Footer />
    </div>
  )
}

export default NotFound

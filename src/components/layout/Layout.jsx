import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout

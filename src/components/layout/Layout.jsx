import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../styles/index.scss'
import layoutStyles from './Layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout

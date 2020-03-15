import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../styles/index.scss'
import layoutStyles from './Layout.module.scss'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

import { createGlobalStyle } from 'styled-components'

//https://www.youtube.com/watch?v=0cE1q_SVAjM
// This unusual backtick syntax is a new JavaScript feature called a
// tagged template literal.
//You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!
const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${props => (props.theme === 'purple' ? 'purple' : 'red')}; */
    color: ${props => props.theme};
  }
`
// https://www.gatsbyjs.org/docs/styled-components/

const Layout = props => {
  const state = useContext(GlobalStateContext)
  console.log(state)
  return (
    <>
      <GlobalStyle theme={state.theme} />

      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Layout

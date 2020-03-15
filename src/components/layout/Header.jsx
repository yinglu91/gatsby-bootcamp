import React, { useContext } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './Header.module.scss'

import { GlobalStateContext } from '../../context/GlobalContextProvider'

const Header = () => {
  const { setTheme, toggleTheme } = useContext(GlobalStateContext)
  console.log(setTheme)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <button
          type="button"
          onClick={() => {
            toggleTheme()
          }}
        >
          Toggle Theme
        </button> */}

        {/* <button type="button">Change Theme</button>
        <select
          id="themeSelection"
          onChange={e => {
            console.log(e.target.value)
            setTheme(e.target.value)
          }}
        >
          <option value=""></option>
          <option value="tan">Tan</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
        </select> */}
      </nav>
    </header>
  )
}

export default Header

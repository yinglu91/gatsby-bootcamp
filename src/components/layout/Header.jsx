import React, { useContext } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './Header.module.scss'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../../context/GlobalContextProvider'

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
  console.log(dispatch)

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

        {state.theme}
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'TOGGLE_THEME' })
          }}
        >
          Toggle Theme
        </button>
      </nav>
    </header>
  )
}

export default Header

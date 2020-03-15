import React from 'react'

export const GlobalStateContext = React.createContext()

const defaultTheme = 'black'
const initialState = {
  theme: defaultTheme,
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'red' ? 'purple' : 'red',
      }
    }
    case 'SET_THEME': {
      console.log(action.payload)
      return {
        ...state,
        theme: action.payload == '' ? defaultTheme : action.payload,
      }
    }
    default:
      throw new Error('Bad Action Type')
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setTheme = color => {
    console.log(color)
    dispatch({ type: 'SET_THEME', payload: color })
  }

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <GlobalStateContext.Provider
      value={{
        theme: state.theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

// https://github.com/codebushi/gatsby-global-state
// https://www.youtube.com/watch?v=ThCfN5WJ0cU

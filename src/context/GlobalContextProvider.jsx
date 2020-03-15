import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: 'tan',
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'red' ? 'purple' : 'red',
      }
    }
    default:
      throw new Error('Bad Action Type')
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // const setTheme = (color)=> {
  //   dispatch({ type: 'SET_THEME', payload: color })

  // }

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

// https://github.com/codebushi/gatsby-global-state
// https://www.youtube.com/watch?v=ThCfN5WJ0cU

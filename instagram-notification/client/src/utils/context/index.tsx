import { createContext, useReducer, type ReactNode } from 'react'

import { AUTH_INFO } from './action'

interface Action {
  type: 'AUTH_INFO'
  payload: string
}

interface Children {
  children: ReactNode
}

const initialState = {
  userName: '',
}

const Context = createContext({})

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AUTH_INFO:
      return {
        ...state,
        userName: action.payload,
      }
    default:
      return state
  }
}

function StoreProvider({ children }: Children) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { Context, StoreProvider }

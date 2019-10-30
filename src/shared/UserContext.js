// import React from 'react'
import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  )
}

export default {
  Provider,
  Consumer: UserContext.Consumer
}

// export const UserContext = React.createContext({
//     userName: '',
//     loggedIn: '',
//     setLoggedIn: (userName, loggedIn) => {},
//   });
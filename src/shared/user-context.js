import React from 'react'
export const UserContext = React.createContext({
    userName: '',
    loggedIn: '',
    setLoggedIn: (userName, loggedIn) => {},
  });
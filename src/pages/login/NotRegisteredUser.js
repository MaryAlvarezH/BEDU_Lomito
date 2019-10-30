import React, { Fragment, useContext } from 'react'
import UserContext from '../../shared/UserContext'
import { login } from '../../pages/login/login'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = UserContext(UserContext)

  return <Fragment>
    <LoginMutation>
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ userNAme, password }) => {
            const input = { userNAme, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

          return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
        }
      }
    </LoginMutation>
  </Fragment>
}

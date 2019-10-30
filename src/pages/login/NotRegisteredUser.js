import React, { Fragment, useContext } from 'react'
import UserContext from '../../shared/UserContext'
import { login } from '../../pages/login/login'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = UserContext(UserContext)

  return (
    <Fragment>
      <LoginMutation>
        {
          (loginUser, { data, loading, error }) => {
            const onSubmit = ({ userNAme, password }) => {
              const input = { userNAme, password }
              const variables = { input }
              loginUser({ variables }).then(({ data }) => {
                const { loginUser } = data
                activateAuth(loginUser)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

            return <Login disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </Fragment>
  );
}

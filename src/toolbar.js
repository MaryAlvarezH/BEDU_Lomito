import React, { createContext } from 'react';

const {Consumer} = createContext;

export default () => (
    <div>
        <Consumer>
        {
          value => (
            <div>
              <h1>Bienvenido {value.user.name}</h1>
            </div>
          )
        }
      </Consumer>
    </div>
)
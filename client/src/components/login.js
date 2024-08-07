<<<<<<< HEAD
import React from 'react'
import {Input} from './inputs'
import Form from './form'

function Login({onSubmit}) {
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          const {username, password} = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <label style={{justifySelf: 'right'}} htmlFor="username-input">
          Username
        </label>
        <Input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{flex: 1}}
        />
        <label style={{justifySelf: 'right'}} id="password-input">
          Password
        </label>
        <Input
          placeholder="Password..."
          type="password"
          name="password"
          aria-labelledby="password-input"
        />
      </Form>
    </div>
  )
}

=======
import React from 'react'
import {Input} from './inputs'
import Form from './form'

function Login({onSubmit}) {
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          const {username, password} = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <label style={{justifySelf: 'right'}} htmlFor="username-input">
          Username
        </label>
        <Input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{flex: 1}}
        />
        <label style={{justifySelf: 'right'}} id="password-input">
          Password
        </label>
        <Input
          placeholder="Password..."
          type="password"
          name="password"
          aria-labelledby="password-input"
        />
      </Form>
    </div>
  )
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default Login
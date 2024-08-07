<<<<<<< HEAD
import {generate} from '../utils'

Cypress.Commands.add('logout', () => {
  return cy
    .window()
    .its('localStorage')
    .invoke('removeItem', 'token')
})

Cypress.Commands.add('createNewUser', () => {
  const user = generate.loginForm()

  return cy
    .log('create a test new user', user)
    .request('POST', `${Cypress.env('API_URL').trim()}/auth/register`, user)
    .then(({body}) => {
      return Object.assign({}, body.user, user)
    })
})

Cypress.Commands.add('loginAsNewUser', () => {
  return cy.createNewUser().then(user => {
    window.localStorage.setItem('token', user.token)
    return user
  })
})

Cypress.Commands.add('assertRoute', route => {
  cy.url().should('equal', `${window.location.origin}${route}`)
=======
import {generate} from '../utils'

Cypress.Commands.add('logout', () => {
  return cy
    .window()
    .its('localStorage')
    .invoke('removeItem', 'token')
})

Cypress.Commands.add('createNewUser', () => {
  const user = generate.loginForm()

  return cy
    .log('create a test new user', user)
    .request('POST', `${Cypress.env('API_URL').trim()}/auth/register`, user)
    .then(({body}) => {
      return Object.assign({}, body.user, user)
    })
})

Cypress.Commands.add('loginAsNewUser', () => {
  return cy.createNewUser().then(user => {
    window.localStorage.setItem('token', user.token)
    return user
  })
})

Cypress.Commands.add('assertRoute', route => {
  cy.url().should('equal', `${window.location.origin}${route}`)
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
})
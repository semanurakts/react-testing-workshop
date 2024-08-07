<<<<<<< HEAD
/* globals cy */
describe('calculator', () => {
    it('can visit the app', () => {
      cy
        .visit('/')
        .getByText(/^1$/)
        .click()
        .getByText(/^\+$/)
        .click()
        .getByText(/^2$/)
        .click()
        .getByText(/^=$/)
        .click()
    })
=======
/* globals cy */
describe('calculator', () => {
    it('can visit the app', () => {
      cy
        .visit('/')
        .getByText(/^1$/)
        .click()
        .getByText(/^\+$/)
        .click()
        .getByText(/^2$/)
        .click()
        .getByText(/^=$/)
        .click()
    })
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
  })
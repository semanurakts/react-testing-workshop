<<<<<<< HEAD
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args)
    return args[1]
  }
  utils.getWinner.mock = {calls: []}

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toHaveLength(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  utils.getWinner = originalGetWinner
=======
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args)
    return args[1]
  }
  utils.getWinner.mock = {calls: []}

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toHaveLength(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  utils.getWinner = originalGetWinner
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
})
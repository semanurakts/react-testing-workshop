<<<<<<< HEAD
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (p1, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')

  utils.getWinner = originalGetWinner
=======
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (p1, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')

  utils.getWinner = originalGetWinner
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
})
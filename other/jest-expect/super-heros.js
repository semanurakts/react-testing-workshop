<<<<<<< HEAD
const superHeros = [
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Apogee', powers: ['gravity control', 'fly']},
    {name: 'Blazestone', powers: ['control of fire', 'pyrotechnic discharges']},
    {name: 'Frozone', powers: ['freeze water']},
    {name: 'Mr. Incredible', powers: ['physical strength']},
    {name: 'Elastigirl', powers: ['physical stretch']},
    {name: 'Violet', powers: ['invisibility', 'force fields']},
    {name: 'Dash', powers: ['speed']},
    // {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
  ]
  
  function getFlyingSuperHeros() {
    return superHeros.filter(hero => {
      return hero.powers.includes('fly')
    })
  }
  
=======
const superHeros = [
    {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
    {name: 'Apogee', powers: ['gravity control', 'fly']},
    {name: 'Blazestone', powers: ['control of fire', 'pyrotechnic discharges']},
    {name: 'Frozone', powers: ['freeze water']},
    {name: 'Mr. Incredible', powers: ['physical strength']},
    {name: 'Elastigirl', powers: ['physical stretch']},
    {name: 'Violet', powers: ['invisibility', 'force fields']},
    {name: 'Dash', powers: ['speed']},
    // {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
  ]
  
  function getFlyingSuperHeros() {
    return superHeros.filter(hero => {
      return hero.powers.includes('fly')
    })
  }
  
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
  module.exports = {getFlyingSuperHeros}
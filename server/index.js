<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
    require('./dist')
  } else {
    require('nodemon')({script: 'dev.js'})
=======
if (process.env.NODE_ENV === 'production') {
    require('./dist')
  } else {
    require('nodemon')({script: 'dev.js'})
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
  }
<<<<<<< HEAD
;(async () => {
    require('babel-register')
    const serverTestUtils = require('./test/til-server-test-utils')
    await serverTestUtils.initDb()
    await serverTestUtils.insertTestUser()
    require('./src')
=======
;(async () => {
    require('babel-register')
    const serverTestUtils = require('./test/til-server-test-utils')
    await serverTestUtils.initDb()
    await serverTestUtils.insertTestUser()
    require('./src')
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
  })()
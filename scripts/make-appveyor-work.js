<<<<<<< HEAD
const fs = require('fs')
const pkg = require('../package.json')

// See this for details: https://github.com/aredridel/node-bin-gen/issues/45
delete pkg.devDependencies.node

// no idea what's going on here...
pkg.scripts.lint = 'echo "disabled for appveyor"'

fs.writeFileSync(
  require.resolve('../package.json'),
  JSON.stringify(pkg, null, 2),
=======
const fs = require('fs')
const pkg = require('../package.json')

// See this for details: https://github.com/aredridel/node-bin-gen/issues/45
delete pkg.devDependencies.node

// no idea what's going on here...
pkg.scripts.lint = 'echo "disabled for appveyor"'

fs.writeFileSync(
  require.resolve('../package.json'),
  JSON.stringify(pkg, null, 2),
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
)
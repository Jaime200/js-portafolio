const fs = require('fs')

fs.writeFileSync(`./.env2`, `API=${process.env.API}`)
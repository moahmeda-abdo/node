const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first','utf-8')

console.log(first)

writeFileSync("./content/reault-write.txt", `call me writeFileSync ${first}`);
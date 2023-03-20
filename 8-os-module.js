const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


//method returns the sysytem uptime in seconds
console.log(`the sysytem uptime is ${os.uptime()/60}seconds`);

console.log(os.hostname())

const currentOS = {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freemem:os.freemem()

}
console.log(currentOS)
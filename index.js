const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('Timeout') // fourth
    })
    console.log('log') // first
    setImmediate(() => {
        console.log('immediate') // third
    })
    process.nextTick(() => {
        console.log('Tick') // second
    })
})

// it is second branch (branch-2)
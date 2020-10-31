const fs = require('fs')
const process = require('process')

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.error(`Error Reading ${path}: ${err}`)
            process.exit(1)
        } else {
            console.log(data)
        }
    })
}

// Why the number 2?
cat(process.argv[2])
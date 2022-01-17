//npm --version

//local dependency
// npm i <packageName>
//global dependency
// npm i -g <packageName>

// package.json - manifest file (stores important about project/package>
// manual approach (create package.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('hello people')


const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                console.log(data);
            }
        })
    })
}


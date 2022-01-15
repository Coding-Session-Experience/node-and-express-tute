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
//
// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('hello people')



// started operating system process
// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 0)
// console.log('third');
//completed and exited operating system process

setInterval(() => {
    console.log('hello world');
}, 2000)
console.log('i will run first');
// process stays alive unless
// Kill Process CTRL + C
// unexpected error
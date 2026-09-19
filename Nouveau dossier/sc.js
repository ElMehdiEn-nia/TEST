const prompt = require('prompt-sync')()

let x1 = Number(prompt('donner x1 :'))
let x2 = Number(prompt('donner x2 :'))
let y1 = Number(prompt('donner y1'))
let y2 = Number(prompt('donner y2'))
let z1 = Number(prompt('donner z1'))
let z2 = Number(prompt('donner z2'))
console.log((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2)
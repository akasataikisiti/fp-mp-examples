// let adder = new Function('a', 'b', 'return a + b')
// console.log(adder(2, 6)) // 8
let adder = new Function(..."abc", 'return a + b + c')
console.log(adder(2, 6, 25))
let code = adder.toString()
console.log(code)

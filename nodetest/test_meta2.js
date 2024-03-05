//The code defines a function `adder` using the `Function` constructor, which takes three arguments `a`, `b`, and `c` and returns their sum. It then converts the function `adder` to a string and extracts the function arguments `args` (['a', 'b', 'c']) and the function body `body` (replacing addition with multiplication). 
//Next, a new function `multiplier` is created using the extracted arguments and modified body. Finally, the `multiplier` function is called with arguments (2, 6, 25) and the result (300) is logged to the console.

let adder = new Function(..."abc", 'return a + b + c')
let code = adder.toString()
args = code.match(/\(([\s\S]+)\)/m)[1].trim().split(",")
console.log(args) // [ 'a', 'b', 'c' ]
body = code.match(/\{([\s\S]+)\}/m)[1].trim().replace(/[+]/g, "*")
console.log(body)
multiplier = new Function(args, body)
console.log(multiplier(2, 6, 25)) // 300

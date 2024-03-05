let array = [3, 4, 5]
let arrayProx = new Proxy(array, {})
console.log(arrayProx[0]) // 3
arrayProx[0] = 7
console.log(arrayProx)
console.log(arrayProx.map(n => n * n).reduce((a, b) => a + b, 0))


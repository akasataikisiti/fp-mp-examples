import { Option, some, none, map } from 'fp-ts/Option';

// 数値が正であればその平方根を計算し、そうでなければNoneを返す関数
function safeSqrt(n: number): Option<number> {
  return n > 0 ? some(Math.sqrt(n)) : none;
}

// Option<number>を受け取り、その値があれば2倍にして返す関数
const double = (n: Option<number>): Option<number> => map((n: number) => n * 2)(n);

// 使用例
const result1 = safeSqrt(4); // Some(2)
const result2 = safeSqrt(-1); // None
const doubledResult1 = double(result1); // Some(4)
const doubledResult2 = double(result2);

console.log("Result1:", result1);
console.log("Result2:", result2);
console.log("Doubled Result:", doubledResult1);
console.log("Doubled Result:", doubledResult2);



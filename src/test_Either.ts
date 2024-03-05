import { Either, left, right, isLeft } from 'fp-ts/lib/Either';

// 文字列が数値に変換可能かどうかをチェックし、
// 変換可能ならRightに変換した数値を、不可能ならLeftにエラーメッセージを返す関数
function parseNumber(str: string): Either<string, number> {
  const parsed = parseInt(str, 10);
  return isNaN(parsed) ? left(`Cannot convert "${str}" to a number.`) : right(parsed);
}

// 使用例
const result1 = parseNumber("42");
const result2 = parseNumber("not a number");

console.log(result1); // Right(42)
console.log(result2); // Left('Cannot convert "not a number" to a number.')

// 結果の検査
if (isLeft(result2)) {
  console.log(result2.left); // エラーメッセージを表示
}


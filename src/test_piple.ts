import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';

// 入力文字列の検証関数: 空でないことを確認
const validateInput = (input: string): E.Either<string, string> =>
  input.trim().length === 0 ? E.left('Input cannot be empty') : E.right(input);

// 文字列を数値に変換する関数: 変換可能な場合のみ
const parseToInt = (input: string): E.Either<string, number> =>
  isNaN(parseInt(input, 10)) ? E.left(`Cannot parse "${input}" to an integer`) : E.right(parseInt(input, 10));

// 数値を二乗する関数
const square = (n: number): number => n * n;

// 結果の表示またはエラーメッセージの処理
const handleResult = (result: E.Either<string, number>): string =>
  E.fold(
    (error: string) => `Error: ${error}`,
    (value: number) => `Result: ${value}`
  )(result);

// パイプラインを使用して上記の関数を組み合わせる
const processInput = (input: string) =>
  pipe(
    input,
    validateInput,
    E.chain(parseToInt), // E.chainを使用してEitherの中の値を次の関数に渡す
    E.map(square), // 成功した場合にのみ数値を二乗
    handleResult // 結果の表示またはエラーメッセージの処理
  );

// 使用例
console.log(processInput(' 10 ')); // Result: 100
console.log(processInput('not a number')); // Error: Cannot parse "not a number" to an integer
console.log(processInput('')); // Error: Input cannot be empty


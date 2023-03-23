console.log("4번 js 파일");
console.log(typeof Number("10"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("안녕하세요")); // NaN : 숫자가 아님을 나타내는 값(Number 타입)

console.log(typeof String(15));
console.log(String(true));
console.log(String(false));

// Boolean 타입으로 변환
// falsy : 거짓같은 값, Boolean 타입으로 변환했을 때 false로 판단되는 값들
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false

// truthy : 참 같은 값,
console.log(Boolean("false")); // true
console.log(Boolean(-36)); // true

console.log('3번 js 파일');

console.log(10 > 15);
// console.log(15 < 'a'); 오류는 나지 않지만 문자열의 크기는 비교를 자제
// 같은지 비교할때를 제외하고
console.log(Number('15') <= 15);

console.log(10 == '10'); // true ㄴ
console.log(10 === '10');// false , 내용 + 타입까지

console.log(10 != '10'); // false
console.log(10 !== '10'); // true


// 참조타입의 비교(객체, 배열 , ...) 서로같은지 
// 참조타입에서는 해당 변수가 가리키는 객체가 동일한 객체인지로 판단


let ar1 = [10, 20, 30];
let ar2 = [10, 20, 30];
console.log(ar1 === ar2);// false

let ar3 = ar1;
console.log(ar1 === ar3);//true

let person1 = {name:'홍길동', age : 10};
let person2 = {...person1};
let person3 = person1

console.log(person1 === person2);// false
console.log(person1 === person3);//true

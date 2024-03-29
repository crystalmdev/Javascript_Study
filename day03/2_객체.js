console.log("2 번 js 파일");

let book = {
  title: "뽀로로의 대모험",
  page: 59,
  price: 40,
  isSoldOut: false,
};

console.log(book);
console.log(typeof book);

console.log(book["title"]);
console.log(book["page"]);
console.log(book["price"]);
console.log(book["isSoldOut"]);

let scores = { 0: 50, 1: 70, 2: 39 };
console.log(scores);
console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);

book = {
  title: "뽀로로의 대모험",
  page: 59,
  price: 40,
  isSoldOut: false,
};

console.log(book);
console.log(book.title);
console.log(book.page);
console.log(book.price);
console.log(book.isSoldOut);

// 하위연산자를 통해 가져올 경우 발생할 수 있는 문제
let key = "title";
console.log(book.key); // undefined
console.log(book[key]); // 뽀로로의 대모험

let student = { name: "배상엽", age: 15, "phone-number": "0000000", true: 10 };

console.log(student.name);
console.log(student["name"]);

console.log(student.age);
console.log(student["age"]);

console.log(student["phone-number"]);

console.log(student.true);

student.name = "홍길동";
student["age"] = 50;

console.log(student.hello);
student.hello = "안녕";

console.log(student);

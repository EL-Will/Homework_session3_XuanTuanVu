// console.log("Hello World");

// Cau dieu kien re nhanh (Branching Statement)

// if(condition1){
//     // do something 1
// }
// else if(condition2){
//     // do something 2
// }
// else if(condition3){
//     // do something 3
// }
// else{
//     // do something 4
// }

// Menh de so sanh (Condition)
// Phep so sanh >, >=, <, <=, ==, ===, !=, !==

// Boolean (true/false)

// let single = true;
// let hair = false;

// console.log(1>1); // false
// console.log(1>=1); // true
// console.log(3<=3); // true

// so sanh ==  la so sanh khong chat che
// so sanh === la so sanh chay che (so sanh ca ve kieu du lieu va gia tri)
// console.log(1 ==  "1"); //true
// console.log(1 === "1"); //false

// console.log(1 !=  "1");  // false
// console.log(1 !== "1");  //true

// Ket hop menh de so sanh
// and(&&), or(||)

// Mot trong 2 menh de la false thi ca menh de la false
// console.log(1 > 1 && 2 <= 2); //false
// Mot trong 2 menh de la true thi ca menh de la true
// console.log(1 > 1 || 2 <= 2); //true

// if(condition1){
//     // do something 1
// }
// else if(condition2){
//     // do something 2
// }
// else if(condition3){
//     // do something 3
// }
// else{
//     // do something 4
// }

// Exercise 1:
// Cho một biến result = số ngẫu nhiên
// Cho người dùng nhập vào số n
// Viết đoạn script kiểm tra
// Nếu n < result, in ra là "Smaller"
// Nếu n > result, in ra là "Higher"
// Nếu n = result, in ra là "Bingo"

// let result = 10;
// let numInput = Number(prompt("Please input number"));
// if(numInput<result){
//     alert("Smaller");
// }
// else if(numInput>result){
//     alert("Highter");
// }
// else{
//     alert("Bingo");
// }


// Exercise 2:
// Cho người dùng nhập vào tuổi
// Viết đoạn script kiểm tra
// Nếu tuổi < 18, in ra "You cannot access this website";
// Nếu tuổi < 25, in ra "You can access certain part of this website";
// Nếu tuổi > 25, in ra "You can access this website 100%"

// let age = Number(prompt("Please input your age"));
// if(age < 18){
//     alert("You cannot access this website");
// }
// else if(age < 25){
//     alert("You can access certain part of this website")
// }
// else{
//     alert("You can access this website 100%");
// }


// Exercise 3:
// Cho người dùng nhập vào số n
// Viết đoạn script kiểm tra xem số n là chẵn hay lẻ
// if(numInput % 2 === 0){
//     alert("This is even number");
// }
// else{
//     alert("This is old number");
// }

// Exercise 4:
// Cho người dùng nhập vào 3 số a, b, c
// Tìm max, min của 3 số a, b, c
// let num1 = Number(prompt("Please input first number"));
// let num2 = Number(prompt("Please input second number"));
// let num3 = Number(prompt("Please input third number"));
// let numMax = num1;
// let numMin = num1;
// if(num2 > numMax){
//     numMax = num2;
// }
// if(num3 > numMax){
//     numMax = num3;
// }
// console.log(`Max number is ${numMax}`)

// if(num2 < numMin){
//     numMin = num2;
// }
// if(num3 < numMin){
//     numMin = num3;
// }
// console.log(`Min number is ${numMin}`)

// if(num1 >= num2 && num1 >= num3){
//     alert(`Max number is ${num1}`)
// }
// else if(num2 >= num1 && num2 >= num3){
//     alert(`Max number is ${num2}`)
// }
// else{
//     alert(`Max number is ${num3}`)
// }

// Exercise 5:
// Cho nguoi dung nhap vao 3 so a, b, c
// Tim nghiem phuong trinh ax^2 + bx + c = 0
// let a = Number(prompt("Nhap vao so a"));
// let b = Number(prompt("Nhap vao so b"));
// let c = Number(prompt("Nhap vao so c"));

// let delta = b**2 - 4*a*c;
// let x1, x2;

// if(delta > 0){
//     x1 = (-b + Math.sqrt(delta))/2*a;
//     x2 = (-b - Math.sqrt(delta))/2*a;
//     console.log(`Phuong trinh co 2 nghiem x1 = ${x1}, x2 = ${x2}`);
// }
// else if(delta === 0){
//     x1 = -b/2*a;
//     x2 = x1;
//     console.log(`Phuong trinh co 1 nghiem x = ${x1}`);
// }
// else{
//     console.log("Phuong tirnh vo nghiem");
// }

// Vong lap
// Vong lap se cho phep lap lai so lan mot doan logic code voi so lan lap cho truoc hoac khong cho truoc
// for loop
// Lap voi so lan biet truoc

// () -> Bo ba dieu kien lap de xac dinh so lan lap
// 1. Diem bat dau cua vong lap
// Khoi tao bien chay(counter) i = 0
// 2. Diem ket thuc cua vong lap
//  Khoi tao mot dieu kien
// 3. Buoc nhay
// Buoc nhay cua bien counter i sau moi lan lap
// for(let i = 0; i <= 4;  i = i+1){
//     // logic code can lap
//     console.log("Hello world " + i);
//     // co the su dung bien chay i trong vong lap
// }

// while loop
// Lap voi so lan lap biet truoc hoac khong biet truoc

// 1. Lap voi so lan KHONG biet truoc
// Mien la condition === true thi vong lap van luon duoc lap lai
// let result = 10;
// let condition = true;
// while(condition === true){
//     // do something
//     let numInput = Number(prompt("Please input number"));
//     if(numInput<result){
//         console.log("Smaller");
//     }
//     else if(numInput>result){
//         console.log("Higher");
//     }
//     else{
//         console.log("Bingo");
//         condition = false;
//     }
// }

// 2. Lap voi so lan lap biet truoc

// let i = 1;
// while(i <= 4){
//     console.log("Hello world " + i);
//     i++;
// }
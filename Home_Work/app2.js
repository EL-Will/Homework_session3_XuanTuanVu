// Bai 1:
// let hight  = Number(prompt("Please input your hight"));
// let weight = Number(prompt("Please input you weight"));

// let BMI = weight/(hight**2);

// if(BMI<18.5){
//     console.log("Thin");
// }
// else if(BMI >= 18.5 && MBI<=24.9){
//     console.log("Normal");
// }
// else if(BMI >= 25 && BMI <= 29.9){
//     console.log("Near fat");
// }
// else if(BMI >= 30 && BMI <= 34.9){
//     console.log("Beo phi cap do 1");
// }
// else if(BMI >= 35 && BMI <=39.9){
//     console.log("Beo phi cap do 2");
// }
// else{
//     console.log("Beo phi cap do 3");
// }

// Bai 2:
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
//     console.log(`Phuong trinh co 2 nghiem phan biet x1 = ${x1}, x2 = ${x2}`);
// }
// else if(delta === 0){
//     x1 = -b/2*a;
//     x2 = x1;
//     console.log(`Phuong trinh co 1 nghiem duy nhat x = ${x1}`);
// }
// else{
//     console.log("Phuong tirnh vo nghiem");
// }

// Bai 3:
// Cau 1:
// var, let, const la 3 cau lenh dung de khai bao bien trong JS.
// Cau 2: Su khac nhau giua let va var
// Phạm vi hoạt động của let là ở trong block
// Phạm vi hoạt động của var là ở trong function
// Ex:
// function useLet() {
//     console.log(j); // ReferenceError: j is not defined
  
//     for (let j = 0; j < 3; j++) {
//       console.log("j inside ", j); // 0, 1, 2
//     }
  
//     console.log("j outside ", j); // ReferenceError: j is not defined
//   }
  
//   useLet();
// function useVar() {
//     console.log(i); // undefined
  
//     for (var i = 0; i < 3; i++) {
//       console.log("i inside ", i); // 0, 1, 2
//     }
  
//     console.log("i outside ", i); // 3
//   }
  
//   useVar();

// var có thể khai báo lại và cập nhật giá trị

// Khai báo
// var date = 10;
// console.log(date);
// var date = 11;
// console.log(date);

// Cập nhật
// var date = 10;
// console.log(date);
// date = 11;
// console.log(date);

// let không thể khai báo lại chỉ có thể cập nhật giá trị

// Câu 3: sự khác nhau giữa let và const
// let có thể cập nhật lại giá trị 
// const không thể cập nhật lại giá trị khi kiểu dữ liệu là string, number, boolean, null, và undefined
// khi kiểu dữ liệu là object, array, và function chúng ta có thể cập nhật giá trị cho thuộc tính của biến đó

// Câu 4: Trường hợp nào thì sử dụng từ khóa nào
// 

// Bài 4:
// Câu 1: Boolean là gì
// Boolean là kiểu dữ liệu
// Câu 2: Có những kết quả nào trong boolean?
// true, false
// Câu 3: Boolean thường được sử dụng trong đâu? Cho ví dụ về các biến có kiểu giá trị
// là boolean
// Boolean thường được sử dụng trong lệnh điều kiện
// ví dụ: 
// let a = true, b = false;

// Bài 5:
// Viết một đoạn mã cho phép người dùng nhập vào một số, 
// kiểm tra xemsố đó nằmtrongkhoảng nửa bé hơn của [0 - 9] hay nửa lớn hơn của [0 - 9]
// let num = +prompt("Please input a number");
// if(num >= 0 && num <=9){
//     alert("Lower half of 9");
// }
// else{
//     alert("Higher half of 9");
// }

// Bài 6:
// Viết một đoạn mã cho phép người dùng nhập vào một số n và một số x. 
// Tiến hànhkiểmtra xem số x thuộc nửa bé hơn của [0 - n] hay nửa lớn hơn của [0 - n]

// let num = +prompt("Please input a number");
// let x   = +prompt("Please input a number");
// if(x >= 0 && x <= num){
//     alert("Lower half of " + num);
// }
// else{
//     alert("Higher half of " + num);
// }

// Bài 7: Viết một đoạn mã cho người dùng nhập vào một số x. 
// Tiến hành kiểmtra xemsốxđấylà chẵn hay lẻ và in kết quả kiểm tra được bằng câu lệnh alert
// let x = +prompt("Please input a number");
// if(x % 2 === 0){
//     alert("This is even number");
// }
// else{
//     alert("This is old number");
// }

// Bài 8:
// Viết một đoạn mã tính chỉ số BMI (Body Mass Index) của một người, công thức tínhnhưsau:
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: Bạn phải tiến hành chuyển đổi đơn vị trước khi tính toán
// Tiến hành phân loại thông tin cơ thể của người dùng theo bảng phân loại dưới đây:
// ● “Mày là bộ xương à” BMI < 16
// ● “Mày là idol hàn quốc à” 16 and 18.5
// ● “Mày đẹp zai đấy” 18.5 and 25
// ● “Mày béo quá rồi đấy” 25 and 30
// ● “Thôi ông không cần giảm nữa đâu” > 30

// let hight  = Number(prompt("Please input your hight"));
// let weight = Number(prompt("Please input you weight"));

// let BMI = weight/(hight**2);

// if(BMI<16){
//     console.log("TMày là bộ xương à");
// }
// else if(BMI >= 16 && MBI<=18){
//     console.log("Mày là idol hàn quốc à");
// }
// else if(BMI >= 25 && BMI <= 30){
//     console.log("Mày đẹp zai đấy");
// }

// else{
//     console.log("Thôi ông không cần giảm nữa đâu");
// }

// Bài 9: Viết một đoạn mã cho phép người dùng nhập vào một năm bất kỳ.
// - Kiểm tra xem năm người dùng nhập vào có hợp lệ hay không. 
// - Sau khi đã hợp lệ thì kiểm tra xem năm đó có phải là năm nhuận hay không→
// Tiến hành in kết quả kiểm tra được ra màn hình console
// let year = +prompt("Please input a year")
// if(year % 400 === 0){
//     alert(`Năm ${year} là năm nhuận`)
// }
// if(year % 4 === 0 && year % 100 !== 0){
//     alert(`Năm ${year} là năm nhuận`)
// }
// else{
//     alert(`Năm ${year} không phải là năm nhuận`)
// }

// Bài 10: Viết một đoạn mã cho phép người dùng nhập vào chiều cao của người đó ở cm. 
// Sauđótiến hành phân loại người đó theo hướng dẫn dưới đây
// - Chiều cao < 150 cm: Mày là người lùn à
// - Chiều cao trong khoảng 150 cm - 169 cm: Trông mày cũng tàmtạm. Cho3điểm
// - Chiều cao >= 170 cm: Mày trông cũng được đấy
// let boolHigh = true;
// while(boolHigh === true){
//     let high = +prompt("Please input your high");
//     if(high > 500){
//         alert("Vui lòng nhập lại chiều cao")
//         boolHigh = true;
//     }
//     else if(high < 150){
//         alert("Mày là người lùn à");
//         boolHigh = false;
//     }
//     else if(high >= 150 && high <= 169){
//         alert("Trông mày cũng tàm tạm. Cho 3 điểm");
//         boolHigh = false;
//     }
//     else{
//         alert("Mày trông cũng được đấy");
//         boolHigh = false;
//     }
// }

// Bài 11:Viết một đoạn mã cho phép người dùng nhập vào 2 số a và b.
// Tiến hành kiểm tra xem số nào lớn hơn và in số đó ra màn hình console.
// let a = +prompt("Please input  number a");
// let b = +prompt("Please input  number b");
// if(a > b){
//     console.log(`Số lớn hơn là a = ${a}`);
// }
// else{
//     console.log(`Số lớn hơn là b = ${b}`);
// }

// Bài 12: Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c. 
// Tiến hành kiểmtraxem số nào là max và số nào là min. 
// Sau đó in max và in ra màn hình console theocúpháp “Max là - …” “Min là - …”.

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

// Bài 13:
// Viết một đoạn mã cho phép người dùng nhập vào một số. 
// Tiến hành kiểmtra xemsốđócó phải là số chính phương hay không. 
// (Số chính phương là số có căn bậc 2 là một sốnguyên)
// let num1 = Number(prompt("Please input first number"));
// let num2 = Math.sqrt(num1);
// if(num2**2 === num1){
//     console.log(`Số ${num1} là số chính phương`);
// }else{
//     console.log(`Số ${num1} không phải là số chính phương`);
// }

// Bài 14: 
// let date  = +prompt("Please input date");
// let month = +prompt("Please input month");
// switch (month)
// {
//     case 1:
//         if(date<=19){
//             console.log("Ma Kết")
//         }
//         else{
//             console.log("Bảo Bình");
//         }
//         break;
//     case 2:
//         if(date <= 18){
//             console.log("Bảo Bình");
//         }
//         else{
//             console.log("Song Ngư");
//         }
//         break;
//     case 3:
//         if(date <= 20){
//             console.log("Song Ngư");
//         }
//         else{
//             console.log("Bạch Dương");
//         }
//         break;
//     case 4:
//         if(date <= 19){
//             console.log("Bạch Dương");
//         }
//         else{
//             console.log("Kim Ngưu");
//         }
//         break;
//     case 5:
//         if(date <= 20){
//             console.log("Kim Ngưu");
//         }
//         else{
//             console.log("Song Tử");
//         }
//         break;
//     case 6:
//         if(date <= 21){
//             console.log("Song Tử");
//         }
//         else{
//             console.log("Cự Giải");
//         }
//         break;
//     case 7:
//         if(date <= 22){
//             console.log("Cự Giải");
//         }
//         else{
//             console.log("Sư Tử");
//         }
//         break;
//     case 8:
//         if(date <= 22){
//             console.log("Sư Tử");
//         }
//         else{
//             console.log("Xử Nữ");
//         }
//         break;
//     case 9:
//         if(date <= 22){
//             console.log("Xử Nữ");
//         }
//         else{
//             console.log("Thiên Bình");
//         }
//         break;
//     case 10:
//         if(date <= 23){
//             console.log("Thiên Bình");
//         }
//         else{
//             console.log("Hổ Cáp");
//         }
//         break;
//     case 11:
//         if(date <= 21){
//             console.log("Hổ Cáp");
//         }
//         else{
//             console.log("Nhân Mã");
//         }
//         break;
//     case 12:
//         if(date <= 21){
//             console.log("Nhân Mã");
//         }
//         else{
//             console.log("Ma Kết");
//         }
//         break;
//     default:
//         console.log("Ban nhap chua chinh xac");
//         break;
// }

// Bài 15: . Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c. 
// Tìmvà in ra nghiệmcủa phương trình bậc 2 với 3 tham số a, b, c
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

// Bài 16: Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b, c 
// tương ứng với 3 cạnhcủamột tam giác. 
// Kiểm tra xem đây có phải là một tam giác hay không và in ra kết quả
// let a = +prompt("Please input side a");
// let b = +prompt("Please input side b");
// let c = +prompt("Please input side c");

// if( a+b > c && a+c > b && b+c > a){
//     console.log("Ba cạnh a, b, c có tạo thành tam giác");
// }
// else{
//     console.log("Ba cạnh a, b, c không tạo thành tam giác");
// }
// Bai 17:
// for(let i = 1; i<=10; i++){
//     console.log(`${i*1} ${i*2} ${i*3} ${i*4} ${i*5} ${i*6} ${i*7} ${i*8} ${i*9} ${i*10}
//     `)
 
// }

// Bai 18: Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểmtra xemđócó phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành tính kết quả củabiểuthức A = 0 + 1 + 2 + … + n

// let sum = 0;
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 0; i<=n; i++){
//             sum = sum + i;
//         }
//         console.log(`Tong la ${sum}`);
//         checkNum = false;
//     }
// }
// Bai 19
// let multi = 1;
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 1; i<=n; i++){
//             multi = multi * i;
//         }
//         console.log(`Tong la ${multi}`);
//         checkNum = false;
//     }
// }
// Bai 20
// let sum = 0;
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 1; i<=n; i++){
//             sum = sum + (1/i);
//         }
       
//         console.log(`Tong la ${sum}`);
//         checkNum = false;
//     }
// }

// Bai 21
// let sum = 0;
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 1; i<=n-1; i++){
//             sum = sum + ((1/i)*(1/(i+1)));
//         }
//         console.log(`Tong la ${sum}`);
//         checkNum = false;
//     }
// }
// Bai 22:
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 1; i<=10; i++){
//             console.log(`${n} x ${i} = ${n*i}`);
//         }
       
//         checkNum = false;
//     }
// }
// Bai 23
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//        let n0 = 0;
//        let n1 = 1;
//        let n2 = 1;
       
//         for(let i = 0; i<=n; i++){
//             if(i<0){
//                 console.log(`-1`);
//             }
//             else if(i === 0 || i === 1){
//                 console.log(`${i}`);
//             }
//             else{
//                 for(let j = 2; j <n ; j++){
//                     i = n+1;
//                     n0 = n1;
//                     n1 = n2;
//                     n2 = n0 + n1;
//                     if(n2 <= n){
//                          console.log(`${n2}`);
//                     }
//                     else{
//                         j=n;

//                     }
//                 }
//             }
//         }
       
//         checkNum = false;
//     }
// }

// Bai 24
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 0; i<=n; i++){
//             if(i%2===0){
//                 console.log(`${i} - so chan`);
//             }
//             else{
//                 console.log(`${i} - so le`);
//             }
//         }
       
//         checkNum = false;
//     }
// }

// Bai 25
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 0; i<=n; i++){
//             if(i%2===0){
//                 console.log(`${i}`);
//             }
           
//         }
//         for(let i = 0; i<=n; i++){
           
//             if(i%2!==0){
//                 console.log(`${i}`);
//             }
//         }
//         checkNum = false;
//     }
// }

// Bai 26
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 0; i<=n; i++){
//             if(i>1){
//                 let _count = 0;
//                 for(let j = 1; j <= i; j++){
//                     if(i % j === 0){
//                         _count++;
//                     }
                    
//                 }
//                 if(_count === 2){
//                     console.log(`${i} la so nguyen to`);
//                 }
//                 else{
//                     console.log(`${i} khong la so nguyen to`);
//                 }
//             }
//             else{
//                 console.log(`${i} khong la so nguyen to`);
//             }
           
//         }
//         checkNum = false;
//     }
// }

// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
       
//             if(n>1){
//                 let _count = 0;
//                 for(let j = 1; j <= n; j++){
//                     if(n % j === 0){
//                         _count++;
//                     }
                    
//                 }
//                 if(_count === 2){
//                     console.log(`${n} la so nguyen to`);
//                 }
//                 else{
//                     console.log(`${n} khong la so nguyen to`);
//                 }
//             }
//             else{
//                 console.log(`${n} khong la so nguyen to`);
//             }
       
       
//         checkNum = false;
//     }
// }

// Bai 27:
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
        
//         for(let i = 1; i<=n; i++){
//             let str = ""
//             for(j = 1; j <= i; j++){
//                 str = str + "* "
//             }
//             console.log(str);
//         }
       
//         checkNum = false;
//     }
// }

// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = n; i>=1; i--){
//             let str = ""
//             for(j = 1; j <= i; j++){
//                 str = str + "* "
//             }
//             console.log(str);
//         }
       
//         checkNum = false;
//     }
// }

// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = 1; i<=n; i++){
//             let str = ""
//             for(j = 1; j <= i; j++){
//                 str = str + j + " "
//             }
//             console.log(str);
//         }
       
//         checkNum = false;
//     }
// }

// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n)){
//         for(let i = n; i>=1; i--){
//             let str = ""
//             for(j = i; j >= 1; j--){
//                 str = str + j + " "
//             }
//             console.log(str);
//         }
       
//         checkNum = false;
//     }
// }

// Bai 28:
// console.log(2850000%500000);
// let checkNum = true;
// while(checkNum){
//     let n = +prompt("Nhap vao mot so nguyen");
//     if(Number.isInteger(n) && n % 50000 === 0){
//         if(n>=500000){
//             if(n % 500000 === 0){
//                 console.log(`500.000 - ${n/500000}`);
//             }
//             else{
//                 console.log(`500.000 - ${(n-(n%500000))/500000}`);
//                 n = n % 500000;
//                 if(n >= 200000){
//                     if(n % 200000 === 0){
//                         console.log(`200.000 - ${n/200000}`);
//                     }
//                     else{
//                         console.log(`200.000 - ${(n-(n%200000))/200000}`);
//                         n = n % 200000;
//                         if(n >= 100000){
//                             if(n % 100000 === 0){
//                                 console.log(`100.000 - ${n/100000}`);
//                             }
//                             else{
//                                 console.log(`100.000 - ${(n-(n%100000))/100000}`);
//                                 console.log(`50.000 - 1`);
//                             }
//                         }
//                     }
//                 }
//                 else if(n>=100000){
//                     if(n % 100000 === 0){
//                         console.log(`100.000 - ${n/100000}`);
//                     }
//                     else{
//                         console.log(`100.000 - ${(n-(n%100000))/100000}`);
//                         console.log(`50.000 - 1`);
//                     }
//                 }
//                 else{
//                     console.log(`50.000 - 1`);
//                 }
//             }
//         }
//         else if(n>=200000){
          
//                 if(n % 200000 === 0){
//                     console.log(`200.000 - ${n/200000}`);
//                 }
//                 else{
//                     console.log(`200.000 - ${(n-(n%200000))/200000}`);
//                     n = n % 20000;
//                     if(n >= 100000){
//                         if(n % 100000 === 0){
//                             console.log(`100.000 - ${n/100000}`);
//                         }
//                         else{
//                             console.log(`100.000 - ${(n-(n%100000))/100000}`);
//                             console.log(`50.000 - 1`);
//                         }
//                     }
//                 }
           
//         }
//         else if(n>=100000){
           
//                 if(n % 100000 === 0){
//                     console.log(`100.000 - ${n/100000}`);
//                 }
//                 else{
//                     console.log(`100.000 - ${(n-(n%100000))/100000}`);
//                     console.log(`50.000 - 1`);
//                 }
           
//         }
//         else{
//             console.log(`50.000 - 1`);
//         }
       
//         checkNum = false;
//     }
// }

// let x, y, z;
// for(x = 0; x < 100; x++){
//     for(y = 0; y< 100; y++){
//         for(z=0; z<100; z++){
//             if(((x + y + z) === 100) && (x*15 + y*9 + z) === 300){
//                 console.log(x);
//                 console.log(y);
//                 console.log(z);
//             }
//         }
//     }
// }

// let x, y;
// for(x=0; x<36; x++){
//     for(y=0;y<36; y++){
//         if(x+y===36 && 4*x+2*y===100){
//             console.log(x);
//             console.log(y);
//         }
//     }
// }


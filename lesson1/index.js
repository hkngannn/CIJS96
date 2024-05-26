// // Bai1
// let binhPhuong = a => a*a
// console.log(binhPhuong(4));

// // bai2
// let check = (text, word) => {
//     return text.includes(word);
// }
// console.log(check("Hello world", "world"));

// // bai3
// let addPrefix = (arr, prefix) => {
//     let result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let addPrefixText = prefix + " : " + arr[i]
//         result.push(addPrefixText)
//     }

//     return result;

// }
// console.log(addPrefix(["one", "two", "three"], "number"));

// // bai4:
// let doubleValue = (arr) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]*2)
//     }
//     return result;
// }
// console.log(doubleValue([1, 2, 3, 4]));

// // bai5
// let oddNumber = (arr) => {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i])
//         }
//     }
    
//     return result;
// }
// console.log(oddNumber([1, 2, 3, 4, 5, 6]));

// // bài6

// const employee = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// let sum = (employee) => {
//     let result = 0;
    
//     for (let i = 0; i < employee.length; i++) {
//         result += employee[i].workingDays
//     }
    
//     return result;
// }

// console.log(sum(employee));

// // bai7
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// let highestSalary = (employees) => {
//     let result = "";

//     for (let i = 0; i < employees.length; i++) {
//         let max = 0;
//         if (employees[i].salary > max) {
//             max = employees[i].salary;
//             result = employees[i]
//         }
//     }
//     return result;
// }

// console.log(highestSalary(employees));

// bai 4

// const listNumber = [1, 2, 3, 4];
// const doublelistNumber = listNumber.map((item) => {
//     return item * 2
// })
// console.log(doublelistNumber);

// bài 5

// const listNumber = [1, 2, 3, 4, 5, 6];
// const oddNumber = listNumber.filter((item) => {
//     return item % 2 !== 0
// });
// console.log(oddNumber);

// bai 6
// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// const result = employees.reduce((prevValue, item) => {
//     return {
//         workingDays: prevValue.workingDays + item.workingDays
//     }
// }, {
//     workingDays: 0
// })
// console.log(result);

// bai 7

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// let max = employees[0].salary;

// let indexMax = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     if (element.salary > max) {
//         max = element.salary;
//         indexMax = i;
//     }
// }
// console.log(employees[indexMax]);

// bai 8

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let max = employees[0].workingDays - employees[0].lateDays;

// let indexMax = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     if ((element.workingDays - element.lateDays) > max) {
//         max = element.workingDays - element.lateDays;
//         indexMax = i;
//     }
// }
// console.log(employees[indexMax]);

// bài 9

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const result = { };

// const listName = employees.map(item => item.name)

// console.log(listName);

// listName.forEach((item, idx) => {
   
//     if (!result[item]) {
//         result[item] = [];
//     }
//     result[item].push(employees[idx]);
// });
// console.log(result);

// c2

// const result = {};

// employees.forEach((item) => {
//     if (!result[item.name]) {
//         result[item.name] = [];
//     }
//     result[item.name].push(item)
// });
 
// console.log(result);

// bai 10

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let max = employees[0].workingDays / employees[0].salary;

// let indexMax = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     const hieuSuat = (element.workingDays / element.salary)
//     if (hieuSuat > max) {
//         max = hieuSuat;
//         indexMax = i;
//     }
// }
// console.log(employees[indexMax]);

// bài 11:

// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const result = { };

// employees.forEach((item) => {
//     if (!result[item.workingDays]) {
//         result[item.workingDays] = 0;
//     }
//     result[item.workingDays]++;
// })
// console.log(result);


// Bai1
let binhPhuong = a => a*a
console.log(binhPhuong(4));

// bai2
let check = (text, word) => {
    return text.includes(word);
}
console.log(check("Hello world", "world"));

// bai3
let addPrefix = (arr, prefix) => {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let addPrefixText = prefix + " : " + arr[i]
        result.push(addPrefixText)
    }

    return result;

}
console.log(addPrefix(["one", "two", "three"], "number"));

// bai4:
let doubleValue = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]*2)
    }
    return result;
}
console.log(doubleValue([1, 2, 3, 4]));

// bai5
let oddNumber = (arr) => {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i])
        }
    }
    
    return result;
}
console.log(oddNumber([1, 2, 3, 4, 5, 6]));

// bài6

const employee = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];

let sum = (employee) => {
    let result = 0;
    
    for (let i = 0; i < employee.length; i++) {
        result += employee[i].workingDays
    }
    
    return result;
}

console.log(sum(employee));

// bai7
const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];

let highestSalary = (employees) => {
    let result = "";

    for (let i = 0; i < employees.length; i++) {
        let max = 0;
        if (employees[i].salary > max) {
            max = employees[i].salary;
            result = employees[i]
        }
    }
    return result;
}

console.log(highestSalary(employees));


export {};

let empName: string;
empName = 'Testleaf';

console.log(empName);

let age: number;
age = 36;
age = 67;
console.log(age);

let empNameList: string[];
empNameList = ["Dilip", "Neha", "Vijayalakshmi"];

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(4, 6));

function getEmployeeData(empname: string, empId: number): string {
    return empname + " " + empId;
}

console.log(getEmployeeData("Vishali", 10));

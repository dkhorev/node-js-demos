import * as fs from "node:fs";

console.log("Start");

const data = fs.readFileSync("data.txt");

console.log(data.toString());

console.log("End");

// import * as fs from 'node:fs/promises';

// console.log('Start');

// fs.readFile('data.txt')
//   .then((data) => console.log(data.toString()));

// console.log('End');

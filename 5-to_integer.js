// filename: 4-convert_number.js

const arg = process.argv[2];
const number = parseInt(arg);

if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}

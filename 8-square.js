// filename: 8-square.js

const size = parseInt(process.argv[2]);

if (!size || size < 1) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}

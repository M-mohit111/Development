let num1 = 5;
num1 = parseInt(num1);
if (isNaN(num1)) {
    console.log("Invalid input for Even/Odd Check. Please enter a valid number.");
} else {
    if (num1 % 2 === 0) {
        console.log(`The number ${num1} is Even.`);
    } else {
        console.log(`The number ${num1} is Odd.`);
    }
}
console.log("\n");
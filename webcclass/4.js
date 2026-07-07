let arrayInput = [1,5,10,2];
let numbersArray = arrayInput.split(',').map(item => parseFloat(item.trim()));
let validNumbers = numbersArray.filter(item => !isNaN(item));
if (validNumbers.length === 0 && arrayInput.trim() !== "") {
    console.log("Invalid input for Sum of Array Elements. No valid numbers found.");
} else if (arrayInput.trim() === "") {
    console.log("Input required for Sum of Array Elements. Please enter numbers.");
}
else {
    let sumArray = 0;
    for (let i = 0; i < validNumbers.length; i++) {
        sumArray += validNumbers[i];
    }
    console.log(`The sum of the array elements [${validNumbers.join(', ')}] is: ${sumArray}`);
}
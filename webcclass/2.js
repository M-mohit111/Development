let age = 21;
age = parseInt(age);
if (isNaN(age)) {
    console.log("Invalid input for Vote Eligibility. Please enter a valid age.");
} else {
    if (age < 0) {
        console.log("Age cannot be negative. Please enter a valid age.");
    } else if (age < 18) {
        console.log(`You are ${age} years old. You are not eligible to vote yet.`);
    } else {
        console.log(`You are ${age} years old. You are eligible to vote!`);
    }
}
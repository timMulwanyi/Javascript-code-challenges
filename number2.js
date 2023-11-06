// Prompt the user to enter their year of birth
const birthYear = prompt("Enter your year of birth:");

// Calculate the user's age
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear, 10);

// Determine and print the user's category
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
  console.log("You are a youth.");
} else {
  console.log("You are an elder.");
}

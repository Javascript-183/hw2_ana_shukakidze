// task 1
let numbersArray = [1, 2, 3, 4, 5];

let answer = Array.isArray(numbersArray);

if (answer == true) {
    console.log("the variable is an array");
} else {
    console.log("the variable is not an array");
}

// task 2
let firstElement = numbersArray.at(0); //an numbersArray[0]
console.log(`first element is: ${firstElement}`);

//task 3
let lastElement = numbersArray.at(-1);
console.log(`last element is: ${lastElement}`);

//task 4
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < 3; i++) {
    console.log(`${i + 1 + o[i + 1]} choice is ${color.at(i)}`);
};

//task 5

let studentInfo = {
    name: "Mate",
    surname: "Gotua"
};

studentInfo.address = "Tbilisi";

delete studentInfo.surname;

studentInfo.name = "Ana";

console.log(studentInfo);

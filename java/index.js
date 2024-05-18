//chapter1



alert("Hello!,Welcome to my page!!");//Example1
alert("Please!enter a valid password");//Example2
alert("Welcome to JS land....\nHappy coding!!!!");//Example3
alert(console.log("HELLO!i can run this project by my project console"));//example4

//chapter2
let username="sukaina";//example1
let myName="fullname";
fullname="Sukaina Batool";
//example3
let message;
message="Hello world";
alert(message);
//example4
let Studentname="john doe";
let age="15 years old";
let education="Certified mobile application specialist";
alert(Studentname);
alert(age);
alert(education);
//example 5
alert("pizza\npizz\npiz\npi\np")
//example6
let email="sukaina912@gmail.com";
alert(email);
//example7
let book="Asmarter way to learn JavaScript";
alert(book);
//example8
document.write("i can write HTML content through Javascript");
//exampple9
let design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

//chapter3
//example1
let age1="I am 21 years old";
alert(age);
//example2
let visit=4;
alert("you have visited the site"+ visit +"times");
//example3
let birthyear=2003;
document.write(birthyear);
//example4
let visitorname="John";
let producttitle="T-shirts";
let quantity=5;
document.write(visitorname+"ordered"+quantity+producttitle+"XYZ clothing store");

//chapter4
//example1
let a = 1, b = 2, c = 3;
//example2
let firstname;
let fullname;
let Education;
let age3;
let isvalid;
//illegal variables name

//let 2nd;
//let first-name;
//let var
//let user name;
//let @email;
 
//example3
document.write("Rules for naming JS variables");
document .write("Variable names can only contain numbers,$ and _ For example $my_1stVariable");
document.write("Variable names are case sensitive");


//chapter 5
//example1
let num1=prompt("Enter your number");
let num2=prompt("Enter your number");
let sum=num1 +num2;
document.write("Sum of"+num1 +"and"+ num2+ "is"+sum);

//example2

let subtract=num1 -num2;
document.write("Subtraction of"+num1 +"and"+ num2+ "is"+subtract);


let divi=num1 /num2;
document.write("Division of"+num1 +"and"+ num2+ "is"+divi);


let multi=num1 *num2;
document.write("Multiplication of"+num1 +"and"+ num2+ "is"+multi);

//example3
let number;
document.write("Value after variable declaration is :??");
number=5;
document.write("Initial value:5");
let num=number+1;
document.write("Value after increment is :"+num);
let numadd=num+7;
document.write("value after addition is :"+numadd);
let numsub=numadd-1;
document.write("Value after decrement is:"+numbsub);
let remainder=numsub%3;
document.write("The remainder is:"+remainder);

//example4
let moviecost=600;
let cost=moviecost*5;
document.write("The total cost to buy a 5 movie ticket is"+cost);

//example5
// Create a multiplication table for the number 4
const newnum = 4;
const range = 10; 

console.log(`Multiplication table of ${newnum}}:`);

for (let i = 1; i <= range; i++) {
    console.log(`${newnum} x ${i} = ${newnum* i}`);
}
//example6

let celsius = 25; 

let fahrenheitFromCelsius = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheitFromCelsius}°F`);
let fahrenheit = 77; 

let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`);

//example7
// Store the prices and quantities of items and shipping charges
let priceItem1 = 25; 
let priceItem2 = 30; 
let quantityItem1 = 2; 
let quantityItem2 = 3; 
let shippingCharges = 5;

// Compute the total cost
let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<hr>");
document.write("<p><strong>Total Cost: $" + totalCost + "</strong></p>");

//example8
// Store total marks and marks obtained by the student
let totalMarks = 500;
let marksObtained = 420;

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


//example9
// Define the exchange rates
const usdToPkrRate = 104.80; 
const sarToPkrRate = 28;      

// Calculate the total amount in Pakistani Rupees
const totalPkr = (10 * usdToPkrRate) + (25 * sarToPkrRate);

// Display the result in the browser
document.write("<h2>Currency Conversion</h2>");
document.write("<p>10 US Dollars = " + (10 * usdToPkrRate) + " Pakistani Rupees</p>");
document.write("<p>25 Saudi Riyals = " + (25 * sarToPkrRate) + " Pakistani Rupees</p>");
document.write("<hr>");
document.write("<p><strong>Total Amount in Pakistani Rupees: " + totalPkr + "</strong></p>");

//example10

let airthnumber = 10;
let result = ((airthnumber + 5) * 10) / 2;
console.log("Result:", result);

//example11
let currentYear = new Date().getFullYear();

let birthYear = 1990; 
let agenow = currentYear - birthYear;
let age2 = agenow - 1; 
console.log(`They are either ${agenow} or ${age2} years old.`);

//example12
// Store the radius into a variable
let radius = 5; 
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius ** 2;

console.log(`The circumference is ${circumference.toFixed(2)}.`);
console.log(`The area is ${area.toFixed(2)}.`);

//chapter6-9
//example1

let ab = 5; 


let result1 = --ab;

let result2 = ++ab;

let result3 = ab++;

let result4 = ab--;

document.write("<h2>Arithmetic Operations</h2>");
document.write("<p>--ab: " + result1 + "</p>");
document.write("<p>++ab: " + result2 + "</p>");
document.write("<p>ab++: " + result3 + "</p>");
document.write("<p>ab--: " + result4 + "</p>");
document.write("<p>Final value of a: " + a + "</p>");


//example2
/* --a: Pre-decrement operator is used. It decrements the value of a before it's used in the expression. So, a becomes 1.
--a - --b: Pre-decrement is applied to b as well, so b becomes 0. The expression becomes 1 - 0, resulting in 1.
--a - --b + ++b: Pre-increment operator is used on b, which makes it 1. So the expression now becomes 1 + 1, resulting in 2.
--a - --b + ++b + b--: Post-decrement operator is used on b, so it's decremented after being used in the expression. The expression now becomes 1 + 1 + 1 + 1, resulting in 4.
 */
//example3

let name = prompt("Enter your name:");
alert("Hello, " + name + "! Welcome to our website.");

//example4

let number3 = prompt("Enter a number to display its multiplication table:");


if (number3 === null || number3 === "" || isNaN(number3)) {

    number = 5;
}

document.write("<h2>Multiplication Table of " + number3 + "</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(number3 + " x " + i + " = " + (number3 * i) + "<br>");
}
//example5
// Take three subjects names from the user
let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

// Total marks for each subject
const totalMark = 100;

// Take obtained marks for the first subject from the user
let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// Take obtained marks for the remaining 2 subjects from the user
let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in the browser
document.write("<h2>Result</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMark + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMark + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMark + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");
document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
document.write("<p>Total Percentage: " + totalPercentage.toFixed(2) + "%</p>");






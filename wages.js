"use strict";

let hourlyWage = prompt("What is your hourly wage?");
hourlyWage = Number(hourlyWage);

confirm(`Your hourly wage is $${hourlyWage.toFixed(2)}. Is that correct?`);

let hoursWorked = prompt("How many hours did you work this week?");
hoursWorked = Number(hoursWorked.trim());

confirm(`You worked ${hoursWorked} hours this week. Is that correct?`);

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.10;
let netPay = grossPay - taxes;

console.log(`Your gross pay is $${grossPay.toFixed(2)}`);
console.log(`Taxes withheld: $${taxes.toFixed(2)}`);
console.log(`Your net pay is $${netPay.toFixed(2)}`);

if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursWorked === 40) {
    console.log("You worked exactly 40 hours.");
} else {
    console.log("No overtime this week.");
}

if (netPay > 800) {
    console.log("Great paycheck this week!");
} else {
    console.log("Keep working toward a bigger paycheck!");
}
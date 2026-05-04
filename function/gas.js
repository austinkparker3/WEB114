// =====================================
// Name and Date: Austin Parker.05032026
// =====================================


// ==========================
// GLOBAL VARIABLES
// ==========================
let entryCount = 0;
let totalGas = 0;
// This is the end of declaring two global variables.

// ==========================
// MAIN PROGRAM
// ==========================
let username = prompt("Enter your name:");

// Validate name
if (username === null) {
    alert("You cancelled the name prompt.");
} else if (username.trim() === "") {
    alert("You must type a name."); // This is the end of validating a name.
} else {

    let average = calcGasAvg(); // This sets up using a variable average using the CalcGasAvg function.

    if (average === null) {
        alert("You cancelled entering gas totals.");
    } else {

        let message; // This next part uses an if statement to display how many gas totals they entered.

        if (entryCount === 0) {
            alert("No gas totals were entered.");
        } else if (entryCount === 1) {
            message = `${username}'s gas total is $${totalGas.toFixed(2)}.`;
            alert(message);
        } else {
            message = `${username}'s average weekly gas bill is $${average.toFixed(2)}.`;
            alert(message);
        }

        // Entry count message
        if (entryCount === 0) {
            alert("No gas totals were entered.");
        } else if (entryCount === 1) {
            alert("You entered 1 gas total.");
        } else {
            alert(`You entered ${entryCount} gas totals.`);
        }
    }
}


// ==========================
// FUNCTION: calcGasAvg()
// ==========================
function calcGasAvg() { // This starts the creation of the function.

    let input = prompt("Enter your first week's gas total. Enter -1 when done."); // This creates the variable called input that will be used in the function and prompts for the first gas total.

    if (input === null) {
        return null;
    }

    let weeklyGas = parseFloat(input);

    while (weeklyGas !== -1) {

        // Validate number
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");

            input = prompt("Enter your gas total again:");
            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
            continue;
        }

        // Add to total and count
        totalGas += weeklyGas;
        entryCount++;

        // Ask for next entry
        input = prompt("Enter your next week's gas total. Enter -1 when done.");

        if (input === null) {
            return null;
        }

        weeklyGas = parseFloat(input);
    }

    // Calculate average
    if (entryCount > 0) {
        return totalGas / entryCount;
    } else {
        return 0;
    }
}
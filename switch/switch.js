// =====================================
// Name and Date: Austin Parker.05032026
// =====================================


// Step 1: Prompt User Input
let favMonth = prompt("What is your favorite month?");

if (favMonth === null) {
    console.log("You cancelled the prompt.");
} else {

    favMonth = favMonth.toLowerCase();

    // Step 2: Switch statement for seasons
    switch (favMonth) {

        // Spring
        case "march":
        case "april":
        case "may":
            console.log("Spring is nice with everything blooming.");
            break;

        // Summer
        case "june":
        case "july":
        case "august":
            console.log("You enjoy the summer months!");
            break;

        // Fall
        case "september":
        case "october":
        case "november":
            console.log("Fall is fun with all of the pretty colors.");
            break;

        // Winter
        case "december":
        case "january":
        case "february":
            console.log("You love the winter months!");
            break;

        // Default case
        default:
            console.log("Other months are interesting too!");
    }
}
// Austin Keith Parker
// April 5, 2026

"use strict";

// Loop through crates 1 to 20
for (let crate = 1; crate <= 20; crate++) {

  // Check if divisible by 5 (fragile)
  if (crate % 5 === 0) {
    console.log(`Crate ${crate}: Handle with care`);

  // Check if even (normal supplies)
  } else if (crate % 2 === 0) {
    console.log(`Crate ${crate}: Load crate`);

  // Otherwise odd (unknown cargo)
  } else {
    console.log(`Crate ${crate}: Inspect crate`);
  }
}

// Final summary
console.log("Total crates scanned: 20");
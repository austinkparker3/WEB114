// =====================================
// Name and Date: Austin Parker.05032026
// =====================================


// ==========================
// STEP 1: SELECT ELEMENTS
// ==========================
const moodDisplay = document.querySelector("#moodDisplay");
const messageDisplay = document.querySelector("#message");
const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");


// ==========================
// STEP 2: CREATE DATA OBJECT
// ==========================
const moods = {

    happy: {
        name: "Happy",
        bg: '#FFD700',
        text: '#bd26b0',
        message: 'Warm smiles and the suns kisses!'
    },

    calm: {
        name: "Calm",
        bg: '#A8DADC',
        text: '#1D3557',
        message: 'Peaceful waves and quiet moments.'
    },

    angry: {
        name: "Angry",
        bg: '#E63946',
        text: '#ffffff',
        message: 'Take a breath... cool the fire.'
    },

    sleepy: {
        name: "Sleepy",
        bg: '#2B2D42',
        text: '#EDF2F4',
        message: 'Rest your mind and drift away.'
    }
};


// ==========================
// STEP 3: CHANGE MOOD FUNCTION - CHANGES THE CHARACTERISTICS OF THE WEBPAGE TO MATCH THOSE IDENTIFIED WITH EACH MOOD
// ==========================
function changeMood(moodName) {

    const mood = moods[moodName];

    // Change background color
    document.body.style.backgroundColor = mood.bg;

    // Change text color
    document.body.style.color = mood.text;

    // Update message
    messageDisplay.textContent = mood.message;

    // Update mood title
    moodDisplay.textContent = mood.name;

    // Debugging (for testing)
    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}


// ==========================
// STEP 4: EVENT HANDLERS - PROVIDES FUNCTIONS TO CHANGE THE TITLE OF THE SECTION IN THE HTML PAGE CONSISTENT WITH EACH IDENTIFIED MOOD
// ==========================
function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}


// ==========================
// STEP 5: EVENT LISTENERS - THESE LISTEN FOR CLICKS TO CHANGE THE TITLE OF THE SECTION
// ==========================
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
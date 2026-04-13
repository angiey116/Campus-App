console.log("JavaScript connected");

// Event button
const loadEventsBtn = document.getElementById("loadEventsBtn");

if (loadEventsBtn) {
    loadEventsBtn.addEventListener("click", function () {
        const eventsContainer = document.getElementById("eventsContainer");
        eventsContainer.innerHTML = `
            <h2>Upcoming Events</h2>
            <p>Spring Festival - April 15th</p>
            <p>Career Fair - April 20th</p>
            <p>Movie Night - April 25th</p>
        `;
    });
}

//Dining button
const loadDiningBtn = document.getElementById("loadDiningBtn");

if (loadDiningBtn) {
    loadDiningBtn.addEventListener("click", function () {
        const diningContainer = document.getElementById("diningContainer");
        diningContainer.innerHTML = `
            <h2>Dining Hall Hours</h2>
            <p>Main Hall: 7:00 AM - 8:00 PM</p>
            <p>Student Cafe: 8:00 AM - 6:00 PM</p>
            <p>Late Night Snacks: 7:00 PM - 12:00 AM</p>
        `;
    });
}

// API Setup
const eventsApiUrl = "https://example.com/api/events";
const diningApiUrl = "https://example.com/api/dining";

async function fetchEventsData() {
    try {
        const response = await fetch(eventsApiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Events API placeholder not working yet.", error);
    }
}

async function fetchDiningData() {
    try {
        const response = await fetch(diningApiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Dining API placeholder not working yet.", error);
    }
}
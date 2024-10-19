<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Display</title>
    <style>
        .scrollable-container {
            max-height: 400px; /* Set a maximum height for the scrollable area */
            overflow-y: auto;  /* Enable vertical scrolling */
            border: 1px solid #ccc; /* Optional: Add a border for better visibility */
            padding: 10px; /* Optional: Add padding */
            background-color: #f9f9f9; /* Optional: Set background color */
        }

        .person {
            margin-bottom: 15px; /* Space between profiles */
        }

        /* Additional styles for profile pictures, etc. can be added here */
        .picture-container img {
            width: 100px; /* Set a fixed width for images */
            height: auto; /* Maintain aspect ratio */
        }
    </style>
</head>
<body>

<div id="peopleContainer" class="scrollable-container"></div>

<script>
// Function to fetch people data from JSON file
async function fetchPeople() {
    const response = await fetch('people.json'); // Ensure the path is correct
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// Function to display the people data as HUD-style profiles
async function displayPeople() {
    const container = document.getElementById("peopleContainer");
    container.innerHTML = ''; // Clear previous content if any

    try {
        const fakePeople = await fetchPeople();

        // Shuffle and select random people
        const shuffledPeople = fakePeople.sort(() => 0.5 - Math.random()).slice(0, 20); // Display 20 random people
        
        shuffledPeople.forEach(person => {
            const personDiv = document.createElement("div");
            personDiv.classList.add("person");

            personDiv.innerHTML = `
                <div class="picture-container" style="text-align: left;">
                    <img src="${person.profilePicture}" alt="${person.firstName} ${person.lastName}">
                </div>
                <br>
                <div style="text-align: left; display: flex; flex-direction: column;">
                    <p><strong>Name:</strong> ${person.firstName} ${person.lastName}</p>
                    <p><strong>Age:</strong> ${person.age}</p>
                    <p><strong>Email:</strong> ${person.email}</p>
                    <p><strong>Job Title:</strong> ${person.jobTitle}</p>
                    <p><strong>Secret:</strong> ${person.secret}</p> <!-- Display secret -->
                </div>
            `;

            container.appendChild(personDiv);
        });
    } catch (error) {
        console.error('Failed to fetch people:', error);
        container.innerHTML = '<p>Error loading profiles. Please try again later.</p>'; // Display error message in UI
    }
}

// Call the function to display people when the page loads
document.addEventListener("DOMContentLoaded", displayPeople);
</script>

</body>
</html>

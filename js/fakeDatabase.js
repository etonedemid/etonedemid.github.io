// Fake database of people in JSON format
const fakePeople = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "age": 34,
        "email": "john.doe@example.com",
        "jobTitle": "Software Engineer",
        "profilePicture": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "age": 29,
        "email": "jane.smith@example.com",
        "jobTitle": "Graphic Designer",
        "profilePicture": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "id": 3,
        "firstName": "Michael",
        "lastName": "Johnson",
        "age": 42,
        "email": "michael.johnson@example.com",
        "jobTitle": "Project Manager",
        "profilePicture": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Davis",
        "age": 27,
        "email": "emily.davis@example.com",
        "jobTitle": "Marketing Specialist",
        "profilePicture": "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

// Function to display the people data as paragraphs in HTML
function displayPeople() {
    const container = document.getElementById("peopleContainer");
    fakePeople.forEach(person => {
        const personDiv = document.createElement("div");
        personDiv.classList.add("person");

        personDiv.innerHTML = `
            <img src="${person.profilePicture}" alt="${person.firstName} ${person.lastName}" width="100">
            <p><strong>Name:</strong> ${person.firstName} ${person.lastName}</p>
            <p><strong>Age:</strong> ${person.age}</p>
            <p><strong>Email:</strong> ${person.email}</p>
            <p><strong>Job Title:</strong> ${person.jobTitle}</p>
        `;

        container.appendChild(personDiv);
    });
}

// Call the function to display people when the page loads
document.addEventListener("DOMContentLoaded", displayPeople);

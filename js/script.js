console.log("suit");

// Hardcoded login credentials
const logins = {
    "tuxedo": "tuxedo",
    "admin": "admin",
    "yarik": "martina",
    "hehe": "haha"
};

// Function to get the value of a specific cookie
// Function to get the value of a specific cookie
function getCookieValue(name) {
    const value = document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
    return value ? decodeURIComponent(value) : null;
}

// Display the username in the HTML element
function displayUsername() {
    const username = getCookieValue("username");
    if (username) {
        document.querySelector("#usernameDisplay").textContent = username;
    }
}

// Call the function to display the username when the page loads
document.addEventListener("DOMContentLoaded", displayUsername);


// Redirect to database if logged in
if (getCookieValue("username") && document.title === "Log in") {
    const username = getCookieValue("username");
    console.log(username);
    window.location.href = "../database.html";
}

// Login function
function login() {
    const username = document.querySelector("#logininput").value;
    const password = document.querySelector("#passwordinput").value;

    if (logins[username] === password) {
        loginsuccess(username);
    } else {
        accessdenied();
    }
}

// Successful login actions
function loginsuccess(username) {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#grid").style.display = "block";
    document.cookie = `username=${encodeURIComponent(username)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    setTimeout(() => redirect("database"), 6000);
}

// Redirect function
function redirect(WhereTo = "database") {
    const pageMap = {
        "database": "../database.html",
        "profile": "../profile.html"
    };
    window.location.href = pageMap[WhereTo] || pageMap["database"];
}

// Access denied actions
function accessdenied() {
    document.querySelector("#accessdenied").style.display = "block";
    document.querySelector("#logininput").value = "";
    document.querySelector("#passwordinput").value = "";
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 300);
}

// Function to exit the application (closes the window)
function exit() {
    window.close();
}

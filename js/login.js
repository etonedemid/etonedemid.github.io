console.log("Hello World");

function login() 
{
    if (document.querySelector("#logininput").value == "tuxedo" && document.querySelector("#passwordinput").value == "tuxedo") 
    {
        loginsuccess();
    }
    else 
    {
        accessdenied();
    }

}
function loginsuccess() 
{
    document.querySelector("#login").style.display = "none";
    document.querySelector("#grid").style.display = "block";
    setTimeout(redirect, 5000);
}

function redirect() 
{
    window.location.href = "../database.html";
}
function accessdenied() 
{
    document.querySelector("#accessdenied").style.display = "block"; 
    document.querySelector("#logininput").value = "";
    document.querySelector("#passwordinput").value = "";
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 300);

}
function exit() {
    window.close();
}

function toprofile() {
    window.location.href = "../profile.html";
}
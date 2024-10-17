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
    window.location.href = "../database.html";
}

function accessdenied() 
{
    document.querySelector("#accessdenied").style.display = "block"; 
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 100);

}
function exit() {
    window.close();
}


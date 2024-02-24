
function getname(){
    var username = prompt("what is your name"," ");
    document.getElementById("welcomeMessage").innerHTML = username + " This is Lab 5";
}

function makeBigger(element){
    element.classList.toggle("big-image");
}

function myFunctionclick() {
    document.getElementById("navbar").classList.toggle("show"); 
}
/*
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content"); 
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); 
            }
        }
    }
}
*/

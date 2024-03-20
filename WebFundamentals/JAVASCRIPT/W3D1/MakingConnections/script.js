var userName = document.getElementById('userName');
var editUserName = document.getElementById('editUserName');

editUserName.addEventListener('click', function (e){
    e.preventDefault();

var newName = prompt('Enter a new Name: ');

if(newName !== null && newName !== ''){
    userName.innerText = newName;
}
});



function hide() {
    var hideRequests = document.getElementById("requests");
    if (hideRequests.style.display === "none") {
        hideRequests.style.display = "block";
    } else {
        hideRequests.style.display = "none";
    }
}


var userName = document.getElementById('userName');
function changeName(){
    userName = innerText('Lynn Evans');
}
function hide(element) {
    element.remove();
}

/* Drop-down list solution */

var options = ["You are looking for all kind of pets", "You are looking for a: Cat", "You are looking for a: Dog"];
window.onload = function () {
    document.getElementById("list").onchange = function () {
        if (this.value !== 0) alert(options[this.value]);
    }
}

/* Pet button solution */


var count1 = 3;
var countElement1 = document.querySelector("#count1");

console.log(countElement1);

function add1() {
    count1++;
    countElement1.innerText = count1 + " petting(s)";
    console.log(count1);
}


var count2 = 5;
var countElement2 = document.querySelector("#count2");

console.log(countElement2);

function add2() {
    count2++;
    countElement2.innerText = count2 + " petting(s)";
    console.log(count2);
}


var count3 = 8;
var countElement3 = document.querySelector("#count3");

console.log(countElement3);

function add3() {
    count3++;
    countElement3.innerText = count3 + " petting(s)";
    console.log(count3);
}
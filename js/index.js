//mouseover event listener
let test = document.querySelectorAll("nav") [0];
test.addEventListener ('mouseover', function(event) {
    event.target.style.color = "hotpink";

    setTimeout (function () {
        event.target.style.color = "";
    },500);
}, false);


//keydown event listener
document.querySelector("body").addEventListener("keydown", myFunction);

function myFunction() {
  document.querySelector("body").style.backgroundColor = "hotpink";
}

//WHYYYY YOU NOOOOO WOOOOORRRRKKKKKKKK!??!?!!?!!?!
// let placeHolder = document.querySelector('body');
// placeHolder.addEventListener('keydown', function(event) {
//     event.textContent += (`${event.code}`);
// //   console.log(`this is my keypress:${event.code}`);
// })


//wheel event listener
document.querySelector("h1").addEventListener("wheel", myFunctionAgain);

function myFunctionAgain() {
 this.style.fontSize = "50px";
}

//drag / drop event listener



//load event listener

document.querySelector("body").addEventListener("load", myFunctionThird);

function myFunctionThird() {
  document.querySelector("body")
  console.log("Page is loaded.");
}

//focus event listener



//resize event listener



//scroll event listener



//select event listener



//dblclick event listener



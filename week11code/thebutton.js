//Ryan Monaghan
//11.09.2020
//Week 11 Intro to Web
//Prof Leopold

console.log("js!"); 



let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
let theP = document.querySelector('p');
let theH4 = document.querySelector('h4');



console.log(theTxt)
//
theButton.addEventListener('click', theClick);


function theClick(){
 console.log("you clicked the button omg!");
 theButton.style.backgroundColor = "rgb(153, 153, 255)";
 theButton.style.fontSize = 60;
 theButton.style.fontStyle = "italic";
 theButton.style.fontFamily = "Impact, Charcoal, sans-serif";
 theButton.style.color = "skyblue";
 theBody.style.backgroundImage =  "url(images/piratebeach.jpg)";
 theBody.style.backgroundSize = ("cover");
 theBody.style.backgroundRepeat= ("no-repeat");
 theButton.textContent = "Click here to try again!";
 theButton.style.border = "thick solid red";
 theButton.style.padding = "50px 10px 10px 50px";
 theButton.style.margin = "50px 10px 10px 50px";
 theButton.style.backgroundSize = "100px 100px";
 }

function myMove() {
  var elem = document.getElementById("myAnimation", theBody, theButton);   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 399) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}




/*	
document.addEventListener('keydown', myFunction)

function myFunction() {
 console.log("woo you pressed a key!");
 theTxt.textContent = "you pressed any key!!";	
}




/// code prof. added to clarify different syntax
// ES6 Arrow notation
// ES6 Arrow notation 
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32) {
  console.log("space bar!");
  document.querySelector('h2').textContent = "you pressed the space bar!!";
 }
})



// common ways of triggering a function you'll often see online
document.addEventListener('keydown', function(theEvent) {
 if (theEvent.keyCode === 82) {
  console.log("R!");
  document.querySelector('h2').textContent = "you pressed the R!!";
 }
}) */

//Code that Ryan added for = sign & - sign

document.addEventListener('keydown', function (theEvent) {
	// body...
	if (theEvent.keyCode === 187) {
		console.log("equal-sign");
		document.querySelector('h2').textContent = "The ship has found gold :)!";
		document.querySelector('h2').style.backgroundColor = "yellow";
		document.querySelector('button').style.backgroundImage = "url(images/cutegold.png";
	}
	 if(theEvent.keyCode===189){
		console.log("minus-sign");
		document.querySelector('h2').textContent = "The ship has found no gold :(";
		document.querySelector('h2').style.backgroundColor = "gray";
		document.querySelector('button').style.backgroundImage = "url(images/piratecrying.gif)";

	}

})


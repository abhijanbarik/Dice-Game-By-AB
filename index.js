
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;      // Random Number Generating between [1 - 6]

var diceImageRandom = "dice" + randomNumber1 + ".png";         // Dice pictures from 1 to 6.

var imageSource = "images/" + diceImageRandom;                 // We will get dice images accoring to dice

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);


/* dice-2 */

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "🏆 Player-1 Wins!";
}else if(randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML = "Player-2 Wins! 🏆";
}else{

    document.querySelector("h1").innerHTML = "✌🏻 Draw!!";
}


$(document).ready(function() {

//variables
var originalNum;
var firstNum;
var secondNum;
var thirdNum;
var forthNum;
var wins = 0;
var losses = 0;
var result = 0;

//Set images to buttons
$("#button-1").html("<img src='assets/images/pink.jpg'>");
$("#button-2").html("<img src='assets/images/purple.jpg'>");
$("#button-3").html("<img src='assets/images/blue.jpg'>");
$("#button-4").html("<img src='assets/images/green.jpg'>");



//Functions

function initializeVaribles() {

    result = 0;
    $("#yourScore").html(result);

    originalNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("random number: " + originalNum);
        $("#randomNumber").html("Random Number:  " + "<h4>" + originalNum + "</h4");

    firstNum = Math.floor(Math.random() * 12) + 1;
        console.log("num1: " + firstNum);
    secondNum = Math.floor(Math.random() * 12) + 1;
        console.log("num2: " + secondNum);
    thirdNum = Math.floor(Math.random() * 12) + 1;
        console.log("num3: " + thirdNum);
    forthNum = Math.floor(Math.random() * 12) + 1;
        console.log("num4: " + forthNum);
}


function matchRandomNumber() {
    if (result === originalNum) {
        wins++;
        $("#wins-losses").text("You win!!");
        $("#wins").html("<h5>" + "Wins: " + wins + "</h5>");
        initializeVaribles();
    }
    else if (result > originalNum) {
        losses++;
        $("#wins-losses").html("You lose!!");
        $("#losses").html("<h5>" + "Losses: " + losses + "</h5>");
        initializeVaribles();
    } 
};

//Call Initial Variable Function
initializeVaribles();



//On Button Click
$("#button-1").on("click", function() {
    // firstNum = Math.floor(Math.random() * 12) + 1;
    result = result + firstNum;
    $("#yourScore").html(result);
    console.log(firstNum);
});

$("#button-2").on("click", function() {
    // secondNum = Math.floor(Math.random() * 12) + 1;
    result = result + secondNum;
    $("#yourScore").html(result);
    console.log(secondNum);
});

$("#button-3").on("click", function() {
    // thirdNum = Math.floor(Math.random() * 12) + 1;
    result = result + thirdNum;
    $("#yourScore").html(result);
    console.log(thirdNum);
});

$("#button-4").on("click", function() {
    // forthNum = Math.floor(Math.random() * 12) + 1;
    result = result + forthNum;
    $("#yourScore").html(result);
    console.log(forthNum);
});



$('button').on("click", function() {
    matchRandomNumber();
});


});








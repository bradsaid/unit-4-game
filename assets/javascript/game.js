var redCrystal = 0;   // name crystal variables and set values to 0
var blueCrystal = 0;
var yellowCrystal = 0; 
var greenCrystal = 0;
var blueCounter = 0;
var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var randomNumber = document.getElementById("targetNumber"); // target number, random
var sum = 0;  // sum of clicked crystals
var runningTotal = 0;  // not being used rn, another sum 
var wins = 0;

/// this block of code here updates the total crystal value with each click
var greenCount = (function () {
    return function () {return greenCounter += greenCrystal}    // sets counter to 0 and adds green crystal to itself
})();

function greenCrystalUpdate(){
    document.getElementById("greenCrystal").innerHTML = greenCount();
}

var redCount = (function () {
    return function () {return redCounter += redCrystal}
})();

function redCrystalUpdate(){
    document.getElementById("redCrystal").innerHTML = redCount();
}

var yellowCount = (function () {
    return function () {return yellowCounter += yellowCrystal}
})();

function yellowCrystalUpdate(){
    document.getElementById("yellowCrystal").innerHTML = yellowCount();
}

var blueCount = (function () {
    return function () {return blueCounter += blueCrystal}
})();

function blueCrystalUpdate(){
    document.getElementById("blueCrystal").innerHTML = blueCount();
}

/////  Sum of crystal counts
function countCyrstals() {  
    sum = greenCount() + yellowCount() + blueCount() + redCount();
    return sum;
}
//////


/////this function is to sum the total crystal values, doubles everytime
//var add = (function () {     
//    var counter = 0;
//    return function () {return counter += redCrystal + blueCrystal + yellowCrystal + greenCrystal;}
//})();

//function counter(){
//    document.getElementById("sums1").innerHTML = add();
//}
/////



// function redCrystalUpdate() {  // call Crystal value   
//    return redCrystal;
// }

// function blueCrystalUpdate() {  // call Crystal value
//    return blueCrystal;
// }

// function yellowCrystalUpdate() {  // call Crystal value
//    return yellowCrystal;
// }
function resetGame() {   // assign values to crystals & randomNumber
    numberValue = Math.floor(Math.random() * (120 - 19 + 1) + 19); 
    redCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    blueCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    sum = 0;
    greenCounter = 0;
    yellowCounter = 0;
    redCounter = 0;
    blueCounter = 0;
    console.log("Number Value = ", numberValue);
    console.log("Red = ", redCrystal);
    console.log("Blue = ", blueCrystal);
    console.log("Yellow = ", yellowCrystal);
    console.log("Green = ", greenCrystal);
        function setTargetNumber(tn) {   // return the target number value
            return tn;
        }
    document.getElementById("targetNumber").innerHTML = setTargetNumber(numberValue); // place the target number value
        function setSumToZero(setsum) {    // return the sum 0 value
            return setsum;
        }
    document.getElementById("sums").innerHTML = "Sum " + setSumToZero(sum);        // place the sum value
}
$( document ).ready(function(){
    var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);    // picks a random number w/in max/min values
    $('#randomNumber').text(randomNumber);                     // dislay the random number picked
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);       // pick random number value for the crystals 
    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    
    var score = 0;    // setting 0 values and displaying them
    var wins = 0;
    $('#wins').text(wins);
    var losses = 0;
    $('#losses').text(losses);
  
function resetGame() {
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $('#randomNumber').text(randomNumber);
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    score = 0;
    $('#totalScore').text(score);
} 

function lose(){   // win & loss function to iterate + to win and to reset game
    losses++;
    $('#losses').text(losses);
    resetGame()
}
  
function win(){   
    wins++; 
    $('#wins').text(wins);
    resetGame();
}

$('.greenCrystal').on ('click', function(){
      score = score + greenCrystal;
      console.log("New score= " + score);
      $('#totalScore').text(score); 
            //Win & lose conditions
          if (score == randomNumber){
            win();
          }
          else if ( score > randomNumber){
            lose();
          }   
})  
   
$('.yellowCrystal').on ('click', function(){
      score = score + yellowCrystal;
      console.log("New score= " + score);
      $('#totalScore').text(score); 
          if (score == randomNumber){
            win();
          }
          else if ( score > randomNumber){
            lose();
          } 
})  
    
$('.blueCrystal').on ('click', function(){
      score = score + blueCrystal;
      console.log("New score= " + score);
      $('#totalScore').text(score);
         if (score == randomNumber){
            win();
          }
          else if ( score > randomNumber){
            lose();
          } 
})  
    
$('.redCrystal').on ('click', function(){
      score = score + redCrystal;
      console.log("New score= " + score);
      $('#totalScore').text(score); 
        if (score == randomNumber){
            win();
          }
          else if ( score > randomNumber){
            lose();
          }
});   
}); 

///// first attempts at coding below:
//var redCrystal = 0;   // name crystal variables and set values to 0
//var blueCrystal = 0;
//var yellowCrystal = 0; 
//var greenCrystal = 0;
//var blueCounter = 0;
//var redCounter = 0;
//var yellowCounter = 0;
//var greenCounter = 0;
//var randomNumber = document.getElementById("targetNumber"); // target number, random
//var sum = 0;  // sum of clicked crystals
//var runningTotal = 0;  // not being used rn, another sum 
//var wins = 0;

/// this block of code here updates the total crystal value with each click
//var greenCount = (function () {
//    return function () {return greenCounter += greenCrystal}    // sets counter to 0 and adds green crystal to itself
//})();

//function greenCrystalUpdate(){
//    document.getElementById("greenCrystal").innerHTML = greenCount();
//        function addGreen() {
//            let i = sum; i + greenCrystal;
//        }
//}

//var redCount = (function () {
//    return function () {return redCounter += redCrystal}
//})();

//function redCrystalUpdate(){
//    document.getElementById("redCrystal").innerHTML = redCount();
//}

//var yellowCount = (function () {
//    return function () {return yellowCounter += yellowCrystal}
//})();

//function yellowCrystalUpdate(){
//    document.getElementById("yellowCrystal").innerHTML = yellowCount();
//}

//var blueCount = (function () {
//    return function () {return blueCounter += blueCrystal}
//})();

//function blueCrystalUpdate(){
//    document.getElementById("blueCrystal").innerHTML = blueCount();
//}

/////  Sum of crystal counts
//function countCyrstals() {  
//    sum = greenCount() + yellowCount() + blueCount() + redCount() - redCrystal - blueCrystal - greenCrystal - yellowCrystal;
//    return sum;
//}
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
// function resetGame() {   // assign values to crystals & randomNumber
//    numberValue = Math.floor(Math.random() * (120 - 19 + 1) + 19); 
//    redCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
//    blueCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
//    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
//    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
//    sum = 0;
//    greenCounter = 0;
//    yellowCounter = 0;
//    redCounter = 0;
//    blueCounter = 0;
//    console.log("Number Value = ", numberValue);
//    console.log("Red = ", redCrystal);
//    console.log("Blue = ", blueCrystal);
//    console.log("Yellow = ", yellowCrystal);
//   console.log("Green = ", greenCrystal);
//        function setTargetNumber(tn) {   // return the target number value
//            return tn;
//        }
//    document.getElementById("targetNumber").innerHTML = setTargetNumber(numberValue); // place the target number value
//        function setSumToZero(setsum) {    // return the sum 0 value
//            return setsum;
//        }
//    document.getElementById("sums").innerHTML = "Sum " + setSumToZero(sum);        // place the sum value
//}
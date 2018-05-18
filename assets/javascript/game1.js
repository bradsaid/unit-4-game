$(document).ready(function() {
    // make target random number
    var numberValue = Math.floor(Math.random() * (102 + 19));
    // show the target number
    $('#randomNumber').text(numberValue);
    // crystal values
    redCrystal = Math.floor(Math.random() * (12 + 1));
    blueCrystal = Math.floor(Math.random() * (12 + 1));
    yellowCrystal = Math.floor(Math.random() * (12 + 1));
    greenCrystal = Math.floor(Math.random() * (12 + 1));
    
    
    // wins & losses & score
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    // show wins, losses, score
    $('#losses').text(losses);
    $('#wins').text(wins);


function resetGame() {      // basically repeating the code above for the reset function (not resetting win/loss)
    numberValue = Math.floor(Math.random() * (102 + 19));
    $('#randomNumber').text(numberValue);
    redCrystal = Math.floor(Math.random() * (12 + 1));
    blueCrystal = Math.floor(Math.random() * (12 + 1));
    yellowCrystal = Math.floor(Math.random() * (12 + 1));
    greenCrystal = Math.floor(Math.random() * (12 + 1));
    totalScore = 0;
    $('#score').text(totalScore);  // resetGame and show score
}

function youLose() {  // lose function
    losses++;
    $('#losses').text(losses);
    resetGame();
}

function youWin() {   // win function
    wins++;
    $('#wins').text(wins);
    resetGame();
}

// crystal interaction
$('.blueCrystal').on('click', function () {
    totalScore = totalScore + blueCrystal;
    $('#score').text(totalScore);
    if (totalScore === numberValue) {
        youWin();       
    } else {
        (totalScore > numberValue) 
            youLose();
        }
    });


$('.greenCrystal').on('click', function () {
    totalScore = totalScore + greenCrystal;
    $('#score').text(totalScore);
    if (totalScore === numberValue) {
        youWin();       
    } else {
        (totalScore > numberValue) 
            youLose();
        }
    });


$('.redCrystal').on('click', function () {
    totalScore = totalScore + redCrystal;
    $('#score').text(totalScore);
    if (totalScore === numberValue) {
        youWin();       
    } else {
        (totalScore > numberValue) 
            youLose();
        }
    });


$('.yellowCrystal').on('click', function () {
    totalScore = totalScore + yellowCrystal;
    $('#score').text(totalScore);
    if (totalScore === numberValue) {
        youWin();       
    } else {
        (totalScore > numberValue) 
            youLose();
        }
    });
});










   
$( document ).ready(function(){
  let targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
  $("#randomNumber").text(targetNumber);
  let crystals = $("#crystals");
  let counter = 0;
  //let numberOptions = [10, 5, 3, 7];
  let numberOptions = [];
  let wins = 0;
  let losses = 0;
  images = ["1.png", "2.png", "3.png", "4.png"]
  
  function loadCrystals() {
    for (var a = 0; a < 4; a++) {
    numberOptions.push([Math.floor(Math.random() * (12 - 1) + 1)]);
    }
  }
  loadCrystals();
  console.log(numberOptions[0]);
  console.log(numberOptions[1]);
  console.log(numberOptions[2]);
  console.log(numberOptions[3]);
  
  function resetGame() {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $('#randomNumber').text(targetNumber);
    let crystals = $("#crystals");
    counter = 0;
    $("#currentScore").text(counter);
  }
  
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    //imageCrystal.attr("src", "assets/images/"+1+".png");
    imageCrystal.attr("src", "assets/images/" + images[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystals.append(imageCrystal);
  }

  crystals.on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#currentScore").text(counter);
    if (counter === targetNumber) {
      alert("You win!");
      resetGame();
      wins++;
      $('#wins').text(wins);
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      resetGame();
      losses++;
      $('#losses').text(losses);
    }

  });
}); 

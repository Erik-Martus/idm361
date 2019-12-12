var submitBtn = document.getElementById("submit-btn");
var selectionDiv = document.getElementById("selection-div");
var shuffleDiv = document.getElementById("shuffling-animation-div");

var resultDiv = document.getElementById("result-div");
var resultImg = document.getElementById("result-img");
var resultLab = document.getElementById("result-label");
var nearbyBtn = document.getElementById("nearby");
var pickAgainBtn = document.getElementById("pick-again");


// Loads and plays shuffling animation
function playShuffle() {
  selectionDiv.classList.add("hidden");
  shuffleDiv.classList.remove("hidden");

  setTimeout(function () {
    shuffleDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
  }, 2000);
};

// Randomly picks cuisine and sets result page info
function pickCuisine() {
  var selectedCuisine = new Array(); // Create arry

  var cuisineDiv = document.getElementById("cuisine-section");

  var cuisineChecks = cuisineDiv.querySelectorAll("[type=checkbox]");

  for (var i = 0; i < cuisineChecks.length; i++) {
    if (cuisineChecks[i].checked) {
      selectedCuisine.push(cuisineChecks[i].id);
    }
    // console.log(cuisineChecks.name);
  }
  console.log(selectedCuisine.length);
  if (selectedCuisine.length < 2) {

  }

  var pickedCuisine = selectedCuisine[Math.floor(Math.random() * selectedCuisine.length)];
  resultImg.src = "images/cuisine-" + pickedCuisine.toLowerCase() + "@2x.png";
  var capPickedCuisine = pickedCuisine[0].toUpperCase() +
    pickedCuisine.slice(1);
  resultImg.alt = capPickedCuisine + " Food";
  resultLab.innerHTML = pickedCuisine;

  nearbyBtn.addEventListener("click", function () {
    var search = capPickedCuisine + "+restaurants+near+me"
    var searchLink = "http://www.google.com/search?q=" + search;
    window.open(
      searchLink,
      '_blank'
    );
  });

  // playShuffle();
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  pickCuisine();
});

pickAgainBtn.addEventListener("click", function () {
  resultDiv.classList.add("hidden");
  selectionDiv.classList.remove("hidden");
});


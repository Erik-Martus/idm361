// * handle form switch *
// Toggle switch options at the top of the page
// var likeBtn = document.getElementById("toggle-on");
// var dislikeBtn = document.getElementById("toggle-off");

// like_btn.addEventListener("click", function () {
//   console.log("Clicked likes");
// }, false);

// dislike_btn.addEventListener("click", function () {
//   console.log("Clicked dislikes");
// }, false);

// * handle screen state switching *
var submitBtn = document.getElementById("submit-btn");
var selectionDiv = document.getElementById("selection-div");
var shuffleDiv = document.getElementById("shuffling-animation-div");

var resultDiv = document.getElementById("result-div");
var

var pickAgainBtn = document.getElementById("pick-again");

function playShuffle() {
  selectionDiv.classList.add("hidden");
  shuffleDiv.classList.remove("hidden");

  setTimeout(function () {
    shuffleDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
  }, 2000);
};

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
  var pickedCuisine = selectedCuisine[Math.floor(Math.random() * selectedCuisine.length)];
  console.log(pickedCuisine);
  alert(pickedCuisine);

}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Prevented");
  // if (likeBtn.checked == true) {
  //   console.log("Use likes");
  // } else if (dislikeBtn.checked == true) {
  //   console.log("Use dislikes");
  // }
  pickCuisine();
  playShuffle();
});

pickAgainBtn.addEventListener("click", function () {
  resultDiv.classList.add("hidden");
  selectionDiv.classList.remove("hidden");
});


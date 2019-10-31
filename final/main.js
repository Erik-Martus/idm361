var submit_btn = document.getElementById("submit-btn");
console.log(submit_btn);
var selection_div = document.getElementById("selection-div");
var shuffle_div = document.getElementById("shuffling-animation-div");
var result_div = document.getElementById("result-div");

// var btn_nearby = document.getElementById("nearby");
var btn_pickAgain = document.getElementById("pick-again");

function playShuffle() {
  selection_div.classList.add("hidden");
  shuffle_div.classList.remove("hidden");

  setTimeout(function () {
    shuffle_div.classList.add("hidden");
    result_div.classList.remove("hidden");
  }, 2000);
};

submit_btn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Prevented");
  playShuffle();
});

btn_pickAgain.addEventListener("click", function () {
  result_div.classList.add("hidden");
  selection_div.classList.remove("hidden");
});


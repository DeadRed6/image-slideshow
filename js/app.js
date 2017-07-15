var sliderInt = 1;
var sliderNext = 2;

$(document).ready(function() {
  $("#slider > img#1").fadeIn(300);
  startSlider();
});

function startSlider() {
  var count = $("img").length;
  var loop = setInterval(function() {
      $("img").fadeOut(300);
      $("img#" + sliderNext).fadeIn(300);
      sliderInt = sliderNext;
      sliderNext+=1;
      if(sliderNext > count) {sliderNext = 1};
  }, 1500);
}

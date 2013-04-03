var productLinkClick = function () {
  var product = $('.product_link')
  product.on("click", function () {
    console.log("Done here");
  });
}

loadSlider = function () {
  $('#slider').nivoSlider({
    directionNav: false,
    controlNav: false
  });
}

$(document).ready(function () {
  productLinkClick();
  loadSlider();
});

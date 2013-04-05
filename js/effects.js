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


addCopyRightDate = function () {
  $('.footer span').text((new Date()).getFullYear());
}

$(document).ready(function () {
  addCopyRightDate();
  productLinkClick();
  loadSlider();
});

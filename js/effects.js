var productLinkClick = function () {
  var product = $('.product_link')
  product.on("click", function () {
    console.log("Done here");
  });
}

$(document).ready(function () {
  productLinkClick();
});

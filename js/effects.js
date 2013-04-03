var productLinkClick = function () {
  var product = $('.product_link')
  product.on("click", function () {
    console.log("Done here");
  });
}

$(document).ready(function () {
  console.log("I am aready");
  productLinkClick();
});

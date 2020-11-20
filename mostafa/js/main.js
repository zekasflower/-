// Tabs
$("ul.tabs li").on("click", function () {
  $(this).addClass("active").siblings("li").removeClass("active");
  $(".tabs-content > div").hide();
  $($(this).data("content")).fadeIn();
});

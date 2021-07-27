$(".collapsible-btn").click(function () {
  $("i", this).toggleClass("lnr-chevron-right lnr-chevron-down");
});

$(showCollapsible());

$(window).on("resize", function () {
  showCollapsible();
});

function showCollapsible() {
  if ($(window).width() > 500) {
    console.log($(window).height());
    $(".collapsible-text").addClass("collapse");
  } else {
    console.log("TEXT");
    $(".collapsible-text").removeClass("collapse");
  }
}

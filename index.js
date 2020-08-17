// set the behavior of the search bar

let searchFocus = false;

$(".searchbar").hover(() => {
  $(".searchbar").addClass("style-1");
}, () => {
  if (!searchFocus) {
    $(".searchbar").removeClass("style-1");
  }
});

$(".searchbar").focus(
  () => {
    searchFocus = true;
    $(".searchbar").addClass("style-1");
  }
);

$(".searchbar").blur(
  () => {
    searchFocus = false;
    $(".searchbar").removeClass("style-1");
  }
);

$(".search-icon").hover(
  () => {
    $(".searchbar").addClass("style-1");
  }, () => {}
);

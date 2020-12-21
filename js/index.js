$(document).ready(function () {

  $(".mobile-nav-toggle").click(function () {
    $("#mobileSideNav").toggleClass("show", 1000);
    $("body").toggleClass("show-mobile-nav", 1000);
  });

  $(".drop-down-link").click(function () {
    $(this).parent().toggleClass("show-drop-down", 1000);
  });

});


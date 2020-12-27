$(document).ready(function () {

  $(".mobile-nav-toggle").click(function () {
    $("#mobileSideNav").toggleClass("show", 1000);
    $("body").toggleClass("show-mobile-nav", 1000);
  });

  $(".drop-down-link").click(function () {
    $(this).parent().toggleClass("show-drop-down", 1000);
  });

  $(".card-details .show-more-lnk").click(function () {
    $(this).addClass("d-none");
    $(this).parent().find(".show-more-details").removeClass("d-none");
  });

  $(".card-details .show-less-lnk").click(function () {
    $(".card-details .show-more-lnk").removeClass("d-none");
    $(this).parent().addClass("d-none");
  });

});


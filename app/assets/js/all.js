$(function () {
  // $(window).resize(function () {
  //   if (jQuery(window).width() > 768) {
  //       $("h1").removeClass("d-none");
  //   } 
  // });

  // $(".search").click(function (e) {
  //   e.preventDefault();
  //   if (jQuery(window).width() < 768) {
  //     $("h1").addClass("d-none");
  //     $(".navbar-toggler").addClass("d-none");
  //     $(".search-bar").removeClass("d-none");
  //     $(".search-back").removeClass("d-none");
  //     $(".search-form").removeClass("ms-auto");
  //     $(".search-form").addClass("p-1");
  //   }
  // });
  // $(".search-back").click(function (e) {
  //   $("h1").removeClass("d-none");
  //   $(".navbar-toggler").removeClass("d-none");
  //   $(".search-bar").addClass("d-none");
  //   $(".search-back").addClass("d-none");
  //   $(".search-form").addClass("ms-auto");
  //   $(".search-form").removeClass("p-1");
  // });
  $(".table-triangle").click(function (e) {
    $(this).toggleClass("table-turn");
  });
});

$(window).ready(function () {
  $(".menu-btn").click(function () {
    $("nav .navbar").toggleClass("active");
  });
  $(".search-icon").click(function () {
    $(".search-bar").toggleClass("active");
  });
  $(".open-modal").click(function () {
    $(".modal").addClass("active");
  });
  $(".cancelbtn").click(function () {
    $(".modal").removeClass("active");
  });
  $(window).click(function (event) {
    let modal = document.getElementById("id01");
    if (event.target == modal) {
      console.log(12);
      $(modal).removeClass("active");
    }
  });
  $(".carousel").owlCarousel({
    loop: true,
    autoplayTimeOut: 2000,
    autpplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

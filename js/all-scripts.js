 var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $(".menu-mobile-adaptive").toggleClass("menu--open");
    $(".overlay-menu-mobile").toggleClass("menu--open");
  });
$(document).ready(function () {
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  }

  if ($(".swiper-slide.typeB").hasClass("swiper-slide-active")) {
    $(".swiper-slide.typeA").removeClass("first");
  }

  $(window).on("scroll", function () {
    scrollFunction();
    var $scrollNav = $("#scrollNav"),
      sTop = $(window).scrollTop();

    if (sTop <= 500) {
      $("#bt_top").css("display", "none");
      $scrollNav.find("ul").removeClass("on");
      $scrollNav.find("li").removeClass("on");
      $scrollNav.find("li").eq(0).addClass("on");
    } else if (sTop <= 1400) {
      $("#bt_top").css("display", "block");
      $scrollNav.find("ul").addClass("on");
      $scrollNav.find("li").removeClass("on");
      $scrollNav.find("li").eq(1).addClass("on");
    } else if (sTop < 2500) {
      $scrollNav.find("ul").addClass("on");
      $scrollNav.find("li").removeClass("on");
      $scrollNav.find("li").eq(2).addClass("on");
    } else if (sTop <= 3416) {
      $scrollNav.find("ul").removeClass("on");
      $scrollNav.find("li").removeClass("on");
      $scrollNav.find("li").eq(3).addClass("on");
    } else if (sTop <= 4066) {
      $scrollNav.find("ul").removeClass("on");
      $scrollNav.find("li").removeClass("on");
      $scrollNav.find("li").eq(4).addClass("on");
    }
  });

  var filter = "win16|win32|win64|mac|macintel";

  if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      $(window)
        .on("scroll", function () {
          var sTop = $(window).scrollTop();
          //console.log(sTop);

          function effect01() {
            var $target = $("section.repWork");

            $target.addClass("on");
          }
          function effect02() {
            var $target = $("section.serviceIntro");

            $target.addClass("on");
          }
          function effect04() {
            var $target = $("section.companyView");

            $target.addClass("on");
          }
          function effect05() {
            var $target = $("section.videoView");

            $target.addClass("on");
          }

          if (sTop >= 200 && sTop <= 600) {
            effect01();
          } else if (sTop >= 700 && sTop <= 1300) {
            effect02();
          } else if (sTop >= 1301 && sTop <= 1900) {
            effect04();
          } else if (sTop >= 1901) {
            effect05();
          }
        })
        .trigger("scroll");
    } else {
      $(window)
        .on("scroll", function () {
          var sTop = $(window).scrollTop();
          //console.log(sTop);

          function effect01() {
            var $target = $("section.repWork");

            $target.addClass("on");
          }
          function effect02() {
            var $target = $("section.serviceIntro");

            $target.addClass("on");
          }
          function effect04() {
            var $target = $("section.companyView");

            $target.addClass("on");
          }
          function effect05() {
            var $target = $("section.videoView");

            $target.addClass("on");
          }

          if (sTop >= 200 && sTop <= 1500) {
            effect01();
          } else if (sTop >= 1501 && sTop <= 2300) {
            effect02();
          } else if (sTop >= 2301 && sTop <= 2800) {
            effect04();
          } else if (sTop >= 2801 && sTop <= 4000) {
            effect05();
          }
        })
        .trigger("scroll");
    }
  }
});

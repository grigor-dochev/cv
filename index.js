// Smooth Scrolling

var educationPosition = $("#education").offset().top;

$(function() {
  $(".education-link").on('click', function() {
    var educationPosition = $("#education").offset().top;
    $("HTML, BODY").animate({
      scrollTop: educationPosition
    }, 1000);
  });
});

var projectsPosition = $("#projects").offset().top;

$(function() {
  $(".projects-link").on('click', function() {
    var projectsPosition = $("#projects").offset().top;
    $("HTML, BODY").animate({
      scrollTop: projectsPosition
    }, 1000);
  });
});

var skillsPosition = $("#skills").offset().top;

$(function() {
  $(".skills-link").on('click', function() {
    var skillsPosition = $("#skills").offset().top;
    $("HTML, BODY").animate({
      scrollTop: skillsPosition
    }, 1000);
  });
});

// this makes the animation on scroll
$(window).on("load", function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom + 200) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(1500, 1);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  });
  $(window).scroll(); //invoke scroll-handler on page-load
});

$(window).on("load", function() {
  $(window).scroll(function() {
    $(".divider").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom + 200) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(0, 0.5);
          $(this).delay(100).animate({
            'width': '55%'
          }, 1500);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  });
  $(window).scroll(); //invoke scroll-handler on page-load
});

$(".navbar-brand").hover(function() {

  $(".navbar-brand").addClass("wobble-effect");

  setTimeout(function() {
    $(".navbar-brand").removeClass("wobble-effect");

  }, 3000);

});

// $(".html5").click(function() {
//
//   $(".html5-text").removeClass("tracking-out");
//   $(".item6").addClass("html5-text");
//   $(".html5-text").addClass("tracking-in");
//   $(".html5-text").css({
//     opacity: 1
//   });
//
//   setTimeout(function() {
//
//     $(".item6").removeClass("html5-text");
//     $(".html5-text").removeClass("tracking-in");
//     $(".html5-text").addClass("tracking-out");
//     $(".html5-text").css({
//       opacity: 0
//     });
//
//   }, 2000);
//
// });

$(document).ready(function() {
  $(".navbar").delay(200).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".hello-text").delay(600).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".name-text").delay(1000).animate({
    'opacity': '1'
  }, 2000);
});

$(document).ready(function() {
  $(".intro-text").delay(1400).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".divide").delay(1600).animate({
    'opacity': '0.5'
  }, 0);

  $(".divide").delay(0).animate({
    'width': '55%'
  }, 1500);
});

$(document).ready(function() {
  $(".section-title-edu").delay(2800).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".uol").delay(3200).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".dgs").delay(3600).animate({
    'opacity': '1'
  }, 1500);
});

$(document).ready(function() {
  $(".bgs").delay(4000).animate({
    'opacity': '1'
  }, 1500);
});

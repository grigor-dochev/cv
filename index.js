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
        // } else { //object goes out of view (scrolling up)
        //if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
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
          $(this).fadeTo(0, 1);
          $(this).delay(100).animate({
            'width': '55%'
          }, 1500);
        }



        // } else { //object goes out of view (scrolling up)
        //if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
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

$(".java").click(function() {

  $(".java-text").removeClass("tracking-out");
  $(".item1").addClass("java-text");
  $(".java-text").addClass("tracking-in");
  $(".java-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item1").removeClass("java-text");
    $(".java-text").removeClass("tracking-in");
    $(".java-text").addClass("tracking-out");
    $(".java-text").css({
      opacity: 0
    });

  }, 2000);

});

$(".python").click(function() {

  $(".python-text").removeClass("tracking-out");
  $(".item2").addClass("python-text");
  $(".python-text").addClass("tracking-in");
  $(".python-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item2").removeClass("python-text");
    $(".python-text").removeClass("tracking-in");
    $(".python-text").addClass("tracking-out");
    $(".python-text").css({
      opacity: 0
    });

  }, 2000);

});


$(".javascript").click(function() {

  $(".javascript-text").removeClass("tracking-out");
  $(".item3").addClass("javascript-text");
  $(".javascript-text").addClass("tracking-in");
  $(".javascript-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item3").removeClass("javascript-text");
    $(".javascript-text").removeClass("tracking-in");
    $(".javascript-text").addClass("tracking-out");
    $(".javascript-text").css({
      opacity: 0
    });

  }, 2000);

});


$(".swift").click(function() {

  $(".swift-text").removeClass("tracking-out");
  $(".item4").addClass("swift-text");
  $(".swift-text").addClass("tracking-in");
  $(".swift-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item4").removeClass("swift-text");
    $(".swift-text").removeClass("tracking-in");
    $(".swift-text").addClass("tracking-out");
    $(".swift-text").css({
      opacity: 0
    });

  }, 2000);

});


$(".css3").click(function() {

  $(".css3-text").removeClass("tracking-out");
  $(".item5").addClass("css3-text");
  $(".css3-text").addClass("tracking-in");
  $(".css3-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item5").removeClass("css3-text");
    $(".css3-text").removeClass("tracking-in");
    $(".css3-text").addClass("tracking-out");
    $(".css3-text").css({
      opacity: 0
    });

  }, 2000);

});


$(".html5").click(function() {

  $(".html5-text").removeClass("tracking-out");
  $(".item6").addClass("html5-text");
  $(".html5-text").addClass("tracking-in");
  $(".html5-text").css({
    opacity: 1
  });

  setTimeout(function() {

    $(".item6").removeClass("html5-text");
    $(".html5-text").removeClass("tracking-in");
    $(".html5-text").addClass("tracking-out");
    $(".html5-text").css({
      opacity: 0
    });

  }, 2000);

});

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

// $(document).ready(function() {
//   $(".divide2").delay(4400).animate({
//     'opacity': '0.5'
//   }, 0);

//   $(".divide2").delay(0).animate({
//     'width': '55%'
//   }, 1500);
// });

// $(document).ready(function() {
//   $(".section-title-proj").delay(5600).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".proj1").delay(6000).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".proj2").delay(6400).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".proj3").delay(6800).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".divide3").delay(7200).animate({
//     'opacity': '0.5'
//   }, 0);
//
//   $(".divide3").delay(0).animate({
//     'width': '55%'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".section-title-skills").delay(8400).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item1").delay(8800).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item2").delay(9000).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item3").delay(9200).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item4").delay(9400).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item5").delay(9600).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".item6").delay(9800).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".divide4").delay(10200).animate({
//     'opacity': '0.5'
//   }, 0);
//
//   $(".divide4").delay(0).animate({
//     'width': '55%'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".contact-me-heading").delay(11400).animate({
//     'opacity': '1'
//   }, 1500);
// });
//
// $(document).ready(function() {
//   $(".contact-button").delay(11400).animate({
//     'opacity': '1'
//   }, 1500);
// });

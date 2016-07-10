window.requestAnimFrame = function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){ callback() }
}();


$(document).ready(() => {
  let moving = false;
  let menu = false;
  $('#fullpage').fullpage({
    verticalCentered: false,
    loopBottom: false,
    scrollingSpeed: 450,
    animateAnchor: false,
    easing: 'linear',
    slidesNavigation: true,
    afterRender: () => {
      renderStars();
    },
    onLeave: function(index, nextIndex, direction) {
      let section = $(this);

      if (direction == 'down' && !moving) {
        if(index >= 4 && menu) {
            return false;
        }
      }

      requestAnimFrame(function(){
        console.log({index, direction, moving, menu});
        if (direction == 'down' && !moving) {

          if (index == 3) {
            let active = $('.header-slide.active')
            console.log({active});
            if (active.hasClass('team')) {
              moving = true;
              $.fn.fullpage.moveTo(4, 0);
            }
            if (active.hasClass('internal')) {
              moving = true;
              $.fn.fullpage.moveTo(5, 0);
            }
            if (active.hasClass('speakers')) {
              moving = true;
              $.fn.fullpage.moveTo(6, 0);
            }
            if (active.hasClass('events')) {
              moving = true;
              $.fn.fullpage.moveTo(7, 0);
            }
            if (active.hasClass('achievements')) {
              moving = true;
              $.fn.fullpage.moveTo(8, 0);
            }
            if (active.hasClass('social')) {
              moving = true;
              $.fn.fullpage.moveTo(9, 0);
            }
          }

      }

      if (direction == 'up' && !moving) {
        if (index == 4) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 0);
        }
        if (index == 5) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 1);
        }

        if (index == 6) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 2);
        }

        if (index == 7) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 3);
        }

        if (index == 8) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 4);
        }

        if (index == 9) {
          moving = true;
          $.fn.fullpage.moveTo('headers', 5);
        }

      }
    });


    },
    afterLoad: function(anchorLink, index) {
      moving = false;
      if (index >= 4) {
        menu = true;
      } else {
        menu = false;
      }
    }
  });



});



function renderStars() {
  let sections = $('.body');
  let width = window.innerWidth;
  let height = window.innerHeight;

  let slices = [{
    width: 0,
    height: 0
  },{
    width: 50,
    height: 0
  },{
    width: 0,
    height: 50
  },{
    width: 50,
    height: 50
  },]

  let screens = {
    small: 600,
    medium: 992,
    large: 1200
  }
  let maxStars = 0;
  if (width > screens.medium) {
    maxStars = 30;
  } else if (width > screens.small) {
    maxStars = 15;
  } else if (width <= screens.small) {
    maxStars = 10;
  }

  sections.each(function() {
    slices.forEach( (slice) => {
      for (let i = 0; i < maxStars; i++) {
        let top = Math.floor(Math.random() * 50) + slice.height;
        let left = Math.floor(Math.random() * 50) + slice.width;
        let delay = i * 1000;
        // let delay = 0;
        $(this).append(`<div class="star" style="top:${top}vh; left: ${left}vw; animation-delay:${delay}ms">`);
      }
    })


  });
}

function disableScroll() {
  $.fn.fullpage.setAutoScrolling(false);
}

function enableScroll() {
  $.fn.fullpage.setAutoScrolling(true);
}

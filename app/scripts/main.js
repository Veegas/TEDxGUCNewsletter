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
    loopBottom: true,
    scrollingSpeed: 400,
    afterRender: () => {
      renderStars();
    },
    onLeave: function(index, nextIndex, direction) {
      let section = $(this);
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
        if(index >= 4 && menu) {
          moving = true;
          $.fn.fullpage.moveTo('menu', 0);
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
  let maxStars = Math.floor((width / 10));
  sections.each(function() {
    for (let i = 0; i < maxStars; i++) {
      let top = Math.floor(Math.random() * 100);
      let left = Math.floor(Math.random() * 100);
      let delay = (i % 100) * 100;
      $(this).append(`<div class="star" style="top:${top}vh; left: ${left}vw; animation-delay:${delay}ms">`);
    }
  });
}

function removeStars() {
  let active = $('.active');
  console.log({
    active
  }, 'REMOVE ACTIVE');
  active.each(function() {
    $(this).remove('.star');
  })
}

function disableScroll() {
  $.fn.fullpage.setAutoScrolling(false);
}

function enableScroll() {
  $.fn.fullpage.setAutoScrolling(true);
}

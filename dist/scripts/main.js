"use strict";function renderStars(){var e=$(".body"),n=window.innerWidth,a=(window.innerHeight,[{width:0,height:0},{width:50,height:0},{width:0,height:50},{width:50,height:50}]),o={small:600,medium:992,large:1200},i=0;n>o.medium?i=30:n>o.small?i=15:n<=o.small&&(i=10),e.each(function(){var e=this;a.forEach(function(n){for(var a=0;i>a;a++){var o=Math.floor(50*Math.random())+n.height,l=Math.floor(50*Math.random())+n.width,t=1e3*a;$(e).append('<div class="star" style="top:'+o+"vh; left: "+l+"vw; animation-delay:"+t+'ms">')}})})}function disableScroll(){$.fn.fullpage.setAutoScrolling(!1)}function enableScroll(){$.fn.fullpage.setAutoScrolling(!0)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){e()}}(),$(document).ready(function(){var e=!1,n=!1;$("#fullpage").fullpage({verticalCentered:!1,loopBottom:!1,scrollingSpeed:450,animateAnchor:!1,easing:"linear",slidesNavigation:!0,afterRender:function(){renderStars()},onLeave:function(a,o,i){$(this);return"down"==i&&!e&&a>=4&&n?!1:void requestAnimFrame(function(){if(console.log({index:a,direction:i,moving:e,menu:n}),"down"==i&&!e&&3==a){var o=$(".header-slide.active");console.log({active:o}),o.hasClass("team")&&(e=!0,$.fn.fullpage.moveTo(4,0)),o.hasClass("internal")&&(e=!0,$.fn.fullpage.moveTo(5,0)),o.hasClass("speakers")&&(e=!0,$.fn.fullpage.moveTo(6,0)),o.hasClass("events")&&(e=!0,$.fn.fullpage.moveTo(7,0)),o.hasClass("achievements")&&(e=!0,$.fn.fullpage.moveTo(8,0)),o.hasClass("social")&&(e=!0,$.fn.fullpage.moveTo(9,0))}"up"!=i||e||(4==a&&(e=!0,$.fn.fullpage.moveTo("headers",0)),5==a&&(e=!0,$.fn.fullpage.moveTo("headers",1)),6==a&&(e=!0,$.fn.fullpage.moveTo("headers",2)),7==a&&(e=!0,$.fn.fullpage.moveTo("headers",3)),8==a&&(e=!0,$.fn.fullpage.moveTo("headers",4)),9==a&&(e=!0,$.fn.fullpage.moveTo("headers",5)))})},afterLoad:function(a,o){e=!1,n=o>=4}})});
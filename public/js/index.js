(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/index"],{

/***/ "./resources/js/frontend/index.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-lazy */ "./node_modules/jquery-lazy/jquery.lazy.js");
/* harmony import */ var jquery_lazy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_lazy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-lazy/jquery.lazy.plugins */ "./node_modules/jquery-lazy/jquery.lazy.plugins.js");
/* harmony import */ var jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_lazy_jquery_lazy_plugins__WEBPACK_IMPORTED_MODULE_1__);


$(window).scroll(function () {
  updateBackground();
});

function updateBackground() {
  if ($(window).scrollTop() >= $('#about').offset().top - $('#nav').outerHeight() && $(window).scrollTop() < $('#career').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('footer').hide();
  } else if ($(window).scrollTop() >= $('#career').offset().top - $('#nav').outerHeight()) {
    $('.fullscreen-bg').hide();
    $('.homeText').hide();
    $('footer').show();
  } else {
    $('.fullscreen-bg').show();
    $('.homeText').show();
    $('footer').hide();
  }
} //made by vipul mirajkar thevipulm.appspot.com


var TxtType = function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

$(document).ready(function () {
  // var pattern = Trianglify({
  //     width: $(window).width(),
  //     height: $(window).height(),
  //     cell_size: 300,
  //     x_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B'],
  //     y_colors: ['#2B2B2B','#303335', '#3B3F41','#303335','#3B3F41','#303335','#2B2B2B']
  // });
  //
  // $('.poly-background').append(pattern.canvas());
  $('.page-content').css('background-color', 'transparent');
  updateBackground();
  $('body').scrollspy();
  var elements = document.getElementsByClassName('typewrite');

  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');

    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  } // INJECT CSS


  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
  $("#nav ul li a[href^='#']").on('click', function (e) {
    // prevent default anchor click behavior
    e.preventDefault(); // store hash

    var hash = this.hash; // animate

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });
});
$(window).ready(function () {
  $('.project-image').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.attr('src', image);
      });
    }
  });
  $('.project-bg-image').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.css('background', 'url("' + image + '") center center');
        imageElement.css('background-size', 'cover');
      });
    }
  });
  $('.about-image').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        imageElement.css('background', 'url("' + image + '") center center');
        imageElement.css('background-size', 'cover');
      });
    }
  });
  $(function () {
    $('.lazy').Lazy({});
  });
});
var $carousel = $('#carouselExampleIndicators');
$carousel.carousel();
var handled = false; //global variable

$carousel.bind('slide.bs.carousel', function (e) {
  var current = $(e.target).find('.carousel-item.active');
  var indx = $(current).index();
  if (indx + 2 > $('.carousel-indicators li').length) indx = -1;

  if (!handled) {
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li:nth-child(' + (indx + 2) + ')').addClass('active');
  } else {
    handled = !handled; //if handled=true make it back to false to work normally.
  }
});
$(".carousel-indicators li").on('click', function () {
  //Click event for indicators
  $(this).addClass('active').siblings().removeClass('active'); //remove siblings active class and add it to current clicked item

  handled = true; //set global variable to true to identify whether indicator changing was handled or not.
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/ModernHobbyist/modern-hobbyist/resources/js/frontend/index.js */"./resources/js/frontend/index.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInVwZGF0ZUJhY2tncm91bmQiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImhpZGUiLCJzaG93IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5IiwiY3NzIiwic2Nyb2xsc3B5IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2giLCJhbmltYXRlIiwibG9jYXRpb24iLCJlYWNoIiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2UiLCJkYXRhIiwiaW1nIiwiYXR0ciIsIkxhenkiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsImhhbmRsZWQiLCJiaW5kIiwiY3VycmVudCIsInRhcmdldCIsImZpbmQiLCJpbmR4IiwiaW5kZXgiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVc7QUFDeEJDLGtCQUFnQjtBQUNuQixDQUZEOztBQUlBLFNBQVNBLGdCQUFULEdBQTJCO0FBQ3ZCLE1B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Q3FCO0FBQ3BCO0FBQ0osQ0FmRDtBQWlCQTFELENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMkMsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBd0MsWUFBVTtBQUM5QztBQUNBM0MsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0UsUUFBUixDQUFpQixRQUFqQixFQUEyQkMsUUFBM0IsR0FBc0NGLFdBQXRDLENBQWtELFFBQWxELEVBRjhDLENBRzlDOztBQUNBUCxTQUFPLEdBQUMsSUFBUixDQUo4QyxDQUloQztBQUNqQixDQUxELEUiLCJmaWxlIjoiL2pzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwianF1ZXJ5LWxhenlcIjtcbmltcG9ydCBcImpxdWVyeS1sYXp5L2pxdWVyeS5sYXp5LnBsdWdpbnNcIjtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICB1cGRhdGVCYWNrZ3JvdW5kKCk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlQmFja2dyb3VuZCgpe1xuICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAoJCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wIC0gJCgnI25hdicpLm91dGVySGVpZ2h0KCkpICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA8ICgkKCcjY2FyZWVyJykub2Zmc2V0KCkudG9wIC0gJCgnI25hdicpLm91dGVySGVpZ2h0KCkpKXtcbiAgICAgICAgJCgnLmZ1bGxzY3JlZW4tYmcnKS5oaWRlKCk7XG4gICAgICAgICQoJy5ob21lVGV4dCcpLmhpZGUoKTtcbiAgICAgICAgJCgnZm9vdGVyJykuaGlkZSgpO1xuICAgIH1lbHNlIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAoJCgnI2NhcmVlcicpLm9mZnNldCgpLnRvcCAtICQoJyNuYXYnKS5vdXRlckhlaWdodCgpKSl7XG4gICAgICAgICQoJy5mdWxsc2NyZWVuLWJnJykuaGlkZSgpO1xuICAgICAgICAkKCcuaG9tZVRleHQnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Zvb3RlcicpLnNob3coKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCgnLmZ1bGxzY3JlZW4tYmcnKS5zaG93KCk7XG4gICAgICAgICQoJy5ob21lVGV4dCcpLnNob3coKTtcbiAgICAgICAgJCgnZm9vdGVyJykuaGlkZSgpO1xuICAgIH1cbn1cblxuLy9tYWRlIGJ5IHZpcHVsIG1pcmFqa2FyIHRoZXZpcHVsbS5hcHBzcG90LmNvbVxudmFyIFR4dFR5cGUgPSBmdW5jdGlvbihlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgdGhpcy50eHQgPSAnJztcbiAgICB0aGlzLnRpY2soKTtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbn07XG5cblR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicrdGhpcy50eHQrJzwvc3Bhbj4nO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgZGVsdGEgPSAxMDAwO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQudGljaygpO1xuICAgIH0sIGRlbHRhKTtcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhciBwYXR0ZXJuID0gVHJpYW5nbGlmeSh7XG4gICAgLy8gICAgIHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAvLyAgICAgaGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgLy8gICAgIGNlbGxfc2l6ZTogMzAwLFxuICAgIC8vICAgICB4X2NvbG9yczogWycjMkIyQjJCJywnIzMwMzMzNScsICcjM0IzRjQxJywnIzMwMzMzNScsJyMzQjNGNDEnLCcjMzAzMzM1JywnIzJCMkIyQiddLFxuICAgIC8vICAgICB5X2NvbG9yczogWycjMkIyQjJCJywnIzMwMzMzNScsICcjM0IzRjQxJywnIzMwMzMzNScsJyMzQjNGNDEnLCcjMzAzMzM1JywnIzJCMkIyQiddXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyAkKCcucG9seS1iYWNrZ3JvdW5kJykuYXBwZW5kKHBhdHRlcm4uY2FudmFzKCkpO1xuICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcblxuICAgIHVwZGF0ZUJhY2tncm91bmQoKTtcblxuICAgICQoJ2JvZHknKS5zY3JvbGxzcHkoKTtcblxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgIGZvciAodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblxuICAgICQoXCIjbmF2IHVsIGxpIGFbaHJlZl49JyMnXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHN0b3JlIGhhc2hcbiAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cbiAgICAgICAgLy8gYW5pbWF0ZVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoaGFzaCkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gZG9uZSwgYWRkIGhhc2ggdG8gdXJsXG4gICAgICAgICAgICAvLyAoZGVmYXVsdCBjbGljayBiZWhhdmlvdXIpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4kKHdpbmRvdykucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcucHJvamVjdC1pbWFnZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbWFnZSA9ICQodGhpcykuZGF0YSgnaW1hZ2UnKTtcblxuICAgICAgICBpZihpbWFnZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICB2YXIgaW1nID0gJCgnPGltZyAvPicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZSxcbiAgICAgICAgICAgIH0pLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmF0dHIoJ3NyYycsIGltYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnByb2plY3QtYmctaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlJyk7XG5cbiAgICAgICAgaWYoaW1hZ2UubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoJzxpbWcgLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2UsXG4gICAgICAgICAgICB9KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiJytpbWFnZSsnXCIpIGNlbnRlciBjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuYWJvdXQtaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlJyk7XG5cbiAgICAgICAgaWYoaW1hZ2UubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoJzxpbWcgLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2UsXG4gICAgICAgICAgICB9KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiJytpbWFnZSsnXCIpIGNlbnRlciBjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5sYXp5JykuTGF6eSh7XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxudmFyICRjYXJvdXNlbCA9ICQoJyNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzJyk7XG4kY2Fyb3VzZWwuY2Fyb3VzZWwoKTtcbnZhciBoYW5kbGVkPWZhbHNlOy8vZ2xvYmFsIHZhcmlhYmxlXG5cbiRjYXJvdXNlbC5iaW5kKCdzbGlkZS5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGN1cnJlbnQ9JChlLnRhcmdldCkuZmluZCgnLmNhcm91c2VsLWl0ZW0uYWN0aXZlJyk7XG4gICAgdmFyIGluZHg9JChjdXJyZW50KS5pbmRleCgpO1xuXG4gICAgaWYoKGluZHgrMik+JCgnLmNhcm91c2VsLWluZGljYXRvcnMgbGknKS5sZW5ndGgpXG4gICAgICAgIGluZHg9LTFcbiAgICBpZighaGFuZGxlZClcbiAgICB7XG4gICAgICAgICQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpOm50aC1jaGlsZCgnKyhpbmR4KzIpKycpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBoYW5kbGVkPSFoYW5kbGVkOy8vaWYgaGFuZGxlZD10cnVlIG1ha2UgaXQgYmFjayB0byBmYWxzZSB0byB3b3JrIG5vcm1hbGx5LlxuICAgIH1cbn0pO1xuXG4kKFwiLmNhcm91c2VsLWluZGljYXRvcnMgbGlcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIC8vQ2xpY2sgZXZlbnQgZm9yIGluZGljYXRvcnNcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvL3JlbW92ZSBzaWJsaW5ncyBhY3RpdmUgY2xhc3MgYW5kIGFkZCBpdCB0byBjdXJyZW50IGNsaWNrZWQgaXRlbVxuICAgIGhhbmRsZWQ9dHJ1ZTsgLy9zZXQgZ2xvYmFsIHZhcmlhYmxlIHRvIHRydWUgdG8gaWRlbnRpZnkgd2hldGhlciBpbmRpY2F0b3IgY2hhbmdpbmcgd2FzIGhhbmRsZWQgb3Igbm90LlxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
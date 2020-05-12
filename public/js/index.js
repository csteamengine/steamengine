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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInVwZGF0ZUJhY2tncm91bmQiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImhpZGUiLCJzaG93IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5IiwiY3NzIiwic2Nyb2xsc3B5IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2giLCJhbmltYXRlIiwibG9jYXRpb24iLCJlYWNoIiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2UiLCJkYXRhIiwiaW1nIiwiYXR0ciIsIkxhenkiLCIkY2Fyb3VzZWwiLCJjYXJvdXNlbCIsImhhbmRsZWQiLCJiaW5kIiwiY3VycmVudCIsInRhcmdldCIsImZpbmQiLCJpbmR4IiwiaW5kZXgiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVc7QUFDeEJDLGtCQUFnQjtBQUNuQixDQUZEOztBQUlBLFNBQVNBLGdCQUFULEdBQTJCO0FBQ3ZCLE1B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Q0FBQyxDQUFDaUIsTUFBSCxDQUFELENBQVlDLElBQVosQ0FBaUIsdUJBQWpCLENBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUMvRCxDQUFDLENBQUM0RCxPQUFELENBQUQsQ0FBV0ksS0FBWCxFQUFUO0FBRUEsTUFBSUQsSUFBSSxHQUFDLENBQU4sR0FBUy9ELENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCcUIsTUFBekMsRUFDSTBDLElBQUksR0FBQyxDQUFDLENBQU47O0FBQ0osTUFBRyxDQUFDTCxPQUFKLEVBQ0E7QUFDSTFELEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUUsV0FBN0IsQ0FBeUMsUUFBekM7QUFDQWpFLEtBQUMsQ0FBQyx3Q0FBc0MrRCxJQUFJLEdBQUMsQ0FBM0MsSUFBOEMsR0FBL0MsQ0FBRCxDQUFxREcsUUFBckQsQ0FBOEQsUUFBOUQ7QUFDSCxHQUpELE1BTUE7QUFDSVIsV0FBTyxHQUFDLENBQUNBLE9BQVQsQ0FESixDQUNxQjtBQUNwQjtBQUNKLENBZkQ7QUFpQkExRCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjJDLEVBQTdCLENBQWdDLE9BQWhDLEVBQXdDLFlBQVU7QUFDOUM7QUFDQTNDLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtFLFFBQVIsQ0FBaUIsUUFBakIsRUFBMkJDLFFBQTNCLEdBQXNDRixXQUF0QyxDQUFrRCxRQUFsRCxFQUY4QyxDQUc5Qzs7QUFDQVAsU0FBTyxHQUFDLElBQVIsQ0FKOEMsQ0FJaEM7QUFDakIsQ0FMRCxFIiwiZmlsZSI6Ii9qcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImpxdWVyeS1sYXp5XCI7XG5pbXBvcnQgXCJqcXVlcnktbGF6eS9qcXVlcnkubGF6eS5wbHVnaW5zXCI7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlQmFja2dyb3VuZCgpO1xufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQoKXtcbiAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gKCQoJyNhYm91dCcpLm9mZnNldCgpLnRvcCAtICQoJyNuYXYnKS5vdXRlckhlaWdodCgpKSAmJiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAoJCgnI2NhcmVlcicpLm9mZnNldCgpLnRvcCAtICQoJyNuYXYnKS5vdXRlckhlaWdodCgpKSl7XG4gICAgICAgICQoJy5mdWxsc2NyZWVuLWJnJykuaGlkZSgpO1xuICAgICAgICAkKCcuaG9tZVRleHQnKS5oaWRlKCk7XG4gICAgICAgICQoJ2Zvb3RlcicpLmhpZGUoKTtcbiAgICB9ZWxzZSBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gKCQoJyNjYXJlZXInKS5vZmZzZXQoKS50b3AgLSAkKCcjbmF2Jykub3V0ZXJIZWlnaHQoKSkpe1xuICAgICAgICAkKCcuZnVsbHNjcmVlbi1iZycpLmhpZGUoKTtcbiAgICAgICAgJCgnLmhvbWVUZXh0JykuaGlkZSgpO1xuICAgICAgICAkKCdmb290ZXInKS5zaG93KCk7XG4gICAgfWVsc2V7XG4gICAgICAgICQoJy5mdWxsc2NyZWVuLWJnJykuc2hvdygpO1xuICAgICAgICAkKCcuaG9tZVRleHQnKS5zaG93KCk7XG4gICAgICAgICQoJ2Zvb3RlcicpLmhpZGUoKTtcbiAgICB9XG59XG5cbi8vbWFkZSBieSB2aXB1bCBtaXJhamthciB0aGV2aXB1bG0uYXBwc3BvdC5jb21cbnZhciBUeHRUeXBlID0gZnVuY3Rpb24oZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMubG9vcE51bSA9IDA7XG4gICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICAgIHRoaXMudHh0ID0gJyc7XG4gICAgdGhpcy50aWNrKCk7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG59O1xuXG5UeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nK3RoaXMudHh0Kyc8L3NwYW4+JztcblxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb29wTnVtKys7XG4gICAgICAgIGRlbHRhID0gMTAwMDtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnRpY2soKTtcbiAgICB9LCBkZWx0YSk7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyB2YXIgcGF0dGVybiA9IFRyaWFuZ2xpZnkoe1xuICAgIC8vICAgICB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksXG4gICAgLy8gICAgIGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgIC8vICAgICBjZWxsX3NpemU6IDMwMCxcbiAgICAvLyAgICAgeF9jb2xvcnM6IFsnIzJCMkIyQicsJyMzMDMzMzUnLCAnIzNCM0Y0MScsJyMzMDMzMzUnLCcjM0IzRjQxJywnIzMwMzMzNScsJyMyQjJCMkInXSxcbiAgICAvLyAgICAgeV9jb2xvcnM6IFsnIzJCMkIyQicsJyMzMDMzMzUnLCAnIzNCM0Y0MScsJyMzMDMzMzUnLCcjM0IzRjQxJywnIzMwMzMzNScsJyMyQjJCMkInXVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gJCgnLnBvbHktYmFja2dyb3VuZCcpLmFwcGVuZChwYXR0ZXJuLmNhbnZhcygpKTtcbiAgICAkKCcucGFnZS1jb250ZW50JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XG5cbiAgICB1cGRhdGVCYWNrZ3JvdW5kKCk7XG5cbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KCk7XG5cbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eXBld3JpdGUnKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcbiAgICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSU5KRUNUIENTU1xuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjA4ZW0gc29saWQgI2ZmZn1cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG5cbiAgICAkKFwiI25hdiB1bCBsaSBhW2hyZWZePScjJ11cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYW5jaG9yIGNsaWNrIGJlaGF2aW9yXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBzdG9yZSBoYXNoXG4gICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuXG4gICAgICAgIC8vIGFuaW1hdGVcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAvLyB3aGVuIGRvbmUsIGFkZCBoYXNoIHRvIHVybFxuICAgICAgICAgICAgLy8gKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3VyKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLnByb2plY3QtaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmRhdGEoJ2ltYWdlJyk7XG5cbiAgICAgICAgaWYoaW1hZ2UubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoJzxpbWcgLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2UsXG4gICAgICAgICAgICB9KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5hdHRyKCdzcmMnLCBpbWFnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5wcm9qZWN0LWJnLWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kJywgJ3VybChcIicraW1hZ2UrJ1wiKSBjZW50ZXIgY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubGF6eScpLkxhenkoe1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbnZhciAkY2Fyb3VzZWwgPSAkKCcjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycycpO1xuJGNhcm91c2VsLmNhcm91c2VsKCk7XG52YXIgaGFuZGxlZD1mYWxzZTsvL2dsb2JhbCB2YXJpYWJsZVxuXG4kY2Fyb3VzZWwuYmluZCgnc2xpZGUuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjdXJyZW50PSQoZS50YXJnZXQpLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpO1xuICAgIHZhciBpbmR4PSQoY3VycmVudCkuaW5kZXgoKTtcblxuICAgIGlmKChpbmR4KzIpPiQoJy5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpJykubGVuZ3RoKVxuICAgICAgICBpbmR4PS0xXG4gICAgaWYoIWhhbmRsZWQpXG4gICAge1xuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAkKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaTpudGgtY2hpbGQoJysoaW5keCsyKSsnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaGFuZGxlZD0haGFuZGxlZDsvL2lmIGhhbmRsZWQ9dHJ1ZSBtYWtlIGl0IGJhY2sgdG8gZmFsc2UgdG8gd29yayBub3JtYWxseS5cbiAgICB9XG59KTtcblxuJChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAvL0NsaWNrIGV2ZW50IGZvciBpbmRpY2F0b3JzXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy9yZW1vdmUgc2libGluZ3MgYWN0aXZlIGNsYXNzIGFuZCBhZGQgaXQgdG8gY3VycmVudCBjbGlja2VkIGl0ZW1cbiAgICBoYW5kbGVkPXRydWU7IC8vc2V0IGdsb2JhbCB2YXJpYWJsZSB0byB0cnVlIHRvIGlkZW50aWZ5IHdoZXRoZXIgaW5kaWNhdG9yIGNoYW5naW5nIHdhcyBoYW5kbGVkIG9yIG5vdC5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
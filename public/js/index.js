(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/index"],{

/***/ "./resources/js/frontend/index.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).scroll(function () {
  if ($(this).scrollTop() < 500) {
    //use `this`, not `document`
    $('footer').hide();
  } else {
    $('footer').show();
  }
}); //made by vipul mirajkar thevipulm.appspot.com

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
  var pattern = Trianglify({
    width: $('.page-content').width(),
    height: $('.page-content').height(),
    cell_size: 300,
    x_colors: ['#2B2B2B', '#303335', '#3B3F41', '#303335', '#3B3F41', '#303335', '#2B2B2B'],
    y_colors: ['#2B2B2B', '#303335', '#3B3F41', '#303335', '#3B3F41', '#303335', '#2B2B2B']
  });
  $('.page-content').append(pattern.canvas());
  $('.page-content').css('background-color', 'transparent');
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
  if ($(this).scrollTop() < 500) {
    //use `this`, not `document`
    $('footer').hide();
  } else {
    $('footer').show();
  }

  $('.project-bg').each(function () {
    var imageElement = $(this);
    var image = $(this).data('image');

    if (image.length != 0) {
      var img = $('<img />').attr({
        'src': image
      }).on('load', function () {
        // imageElement.attr('src', image);
        imageElement.css('background', 'url("' + image + '") center center');
        imageElement.css('background-size', 'cover');
      });
    }
  });
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/frontend/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregorysteenhagen/Desktop/Projects/steamengine/resources/js/frontend/index.js */"./resources/js/frontend/index.js");


/***/ })

},[[1,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvaW5kZXguanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImhpZGUiLCJzaG93IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5IiwicGF0dGVybiIsIlRyaWFuZ2xpZnkiLCJ3aWR0aCIsImhlaWdodCIsImNlbGxfc2l6ZSIsInhfY29sb3JzIiwieV9jb2xvcnMiLCJhcHBlbmQiLCJjYW52YXMiLCJjc3MiLCJzY3JvbGxzcHkiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzaCIsImFuaW1hdGUiLCJvZmZzZXQiLCJ0b3AiLCJsb2NhdGlvbiIsImVhY2giLCJpbWFnZUVsZW1lbnQiLCJpbWFnZSIsImRhdGEiLCJpbWciLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsTUFBVixDQUFpQixZQUFXO0FBQ3hCLE1BQUlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsU0FBUixLQUFzQixHQUExQixFQUErQjtBQUFFO0FBQzdCSCxLQUFDLENBQUMsUUFBRCxDQUFELENBQVlJLElBQVo7QUFDSCxHQUZELE1BRUs7QUFDREosS0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZSyxJQUFaO0FB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OiIvanMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgNTAwKSB7IC8vdXNlIGB0aGlzYCwgbm90IGBkb2N1bWVudGBcbiAgICAgICAgJCgnZm9vdGVyJykuaGlkZSgpO1xuICAgIH1lbHNle1xuICAgICAgICAkKCdmb290ZXInKS5zaG93KCk7XG4gICAgfVxufSk7XG5cbi8vbWFkZSBieSB2aXB1bCBtaXJhamthciB0aGV2aXB1bG0uYXBwc3BvdC5jb21cbnZhciBUeHRUeXBlID0gZnVuY3Rpb24oZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMubG9vcE51bSA9IDA7XG4gICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICAgIHRoaXMudHh0ID0gJyc7XG4gICAgdGhpcy50aWNrKCk7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG59O1xuXG5UeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nK3RoaXMudHh0Kyc8L3NwYW4+JztcblxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb29wTnVtKys7XG4gICAgICAgIGRlbHRhID0gMTAwMDtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnRpY2soKTtcbiAgICB9LCBkZWx0YSk7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgcGF0dGVybiA9IFRyaWFuZ2xpZnkoe1xuICAgICAgICB3aWR0aDogJCgnLnBhZ2UtY29udGVudCcpLndpZHRoKCksXG4gICAgICAgIGhlaWdodDogJCgnLnBhZ2UtY29udGVudCcpLmhlaWdodCgpLFxuICAgICAgICBjZWxsX3NpemU6IDMwMCxcbiAgICAgICAgeF9jb2xvcnM6IFsnIzJCMkIyQicsJyMzMDMzMzUnLCAnIzNCM0Y0MScsJyMzMDMzMzUnLCcjM0IzRjQxJywnIzMwMzMzNScsJyMyQjJCMkInXSxcbiAgICAgICAgeV9jb2xvcnM6IFsnIzJCMkIyQicsJyMzMDMzMzUnLCAnIzNCM0Y0MScsJyMzMDMzMzUnLCcjM0IzRjQxJywnIzMwMzMzNScsJyMyQjJCMkInXVxuICAgIH0pO1xuICAgICQoJy5wYWdlLWNvbnRlbnQnKS5hcHBlbmQocGF0dGVybi5jYW52YXMoKSk7XG4gICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuICAgICQoJ2JvZHknKS5zY3JvbGxzcHkoKTtcblxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgIGZvciAodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblxuICAgICQoXCIjbmF2IHVsIGxpIGFbaHJlZl49JyMnXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHN0b3JlIGhhc2hcbiAgICAgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cbiAgICAgICAgLy8gYW5pbWF0ZVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoaGFzaCkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gZG9uZSwgYWRkIGhhc2ggdG8gdXJsXG4gICAgICAgICAgICAvLyAoZGVmYXVsdCBjbGljayBiZWhhdmlvdXIpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4kKHdpbmRvdykucmVhZHkoZnVuY3Rpb24oKXtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDUwMCkgeyAvL3VzZSBgdGhpc2AsIG5vdCBgZG9jdW1lbnRgXG4gICAgICAgICQoJ2Zvb3RlcicpLmhpZGUoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJCgnZm9vdGVyJykuc2hvdygpO1xuICAgIH1cblxuICAgICQoJy5wcm9qZWN0LWJnJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5kYXRhKCdpbWFnZScpO1xuXG4gICAgICAgIGlmKGltYWdlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKCc8aW1nIC8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyYyc6IGltYWdlLFxuICAgICAgICAgICAgfSkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZUVsZW1lbnQuYXR0cignc3JjJywgaW1hZ2UpO1xuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiJytpbWFnZSsnXCIpIGNlbnRlciBjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);





(function ($) {
  if (!("ontouchstart" in document.documentElement)) {
    $('html').addClass('no-touch');
  }

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    $('body').addClass('ie11');
    $('.hero-plain, .hero').each(function () {
      if ($(this).find('.js-hero-slider').length > 0) return;
      var $container = $(this).find('picture'),
          imgUrl = $container.find('img').prop('src'),
          imgHeight = $container.find('img').height();

      if (imgUrl) {
        $container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('cross-object-fit');
        $container.parent('.hero').css('height', imgHeight + 'px');
      }
    });
    $('.list-grid article, .list--article__image, .list-axis > article').each(function () {
      var image = $(this).find('img').first();
      var href = image.attr('src');
      image.css('opacity', '0').wrap('<div style="height: 100%; background:url(' + href + ') center no-repeat"></div>');
    });
  }

  var droplists = document.querySelectorAll('.droplist');

  if (droplists != null) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var droplist = _step.value;
        droplist.addEventListener('click', function (_) {
          droplist.classList.toggle('droplist--active');
        });
      };

      for (var _iterator = droplists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var menuSwitch = document.querySelector('.js-menu-switch');
  var body = document.querySelector('body');

  if (menuSwitch != null) {
    menuSwitch.addEventListener('click', function (_) {
      body.classList.toggle('menu-open');
      body.classList.remove('search-open');
    });
  }

  $(document).ready(function () {
    //using an instersection observer for storyline effects
    if (document.getElementById('timeline')) {
      var years = document.querySelectorAll('.year-item');

      if (years != null) {
        var timeline = document.getElementById('timeline');
        timeline.classList.add('timeline--inited');
        observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('year-item--active');
            }
          });
        });
        years.forEach(function (anchor) {
          observer.observe(anchor);
        }); //using an instersection observer for storyline effects END
      }
    }

    $(window).on('scroll', function () {
      var scrolled = $(window).scrollTop();
      var windowHeight = $(window).height();
      var btt = $('#back-to-top'); //SCROLL TO TOP

      if (scrolled > windowHeight) $(btt).addClass('active');else $(btt).removeClass('active'); //PROGRAM CONTROLS FIXED

      try {
        if ($('.programs').length > 0) {
          var programTop = $('.program-grid').parent('div:visible').offset().top;
          var programBottom = $('.program-grid').parent('div:visible').offset().top + $('.program-grid').parent('div:visible').height();
          if (scrolled + windowHeight > programTop && scrolled + windowHeight < programBottom) $('.program-controls').addClass('fixit');else $('.program-controls').removeClass('fixit');
        }
      } catch (e) {
        console.log(e);
      }
    });
    $('#back-to-top').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 250);
    }); //MUTE LINKS WITH "#" HREF ATTRIBUTE

    if ($(window).width() <= 768) {
      $('header li.sublisted > a span').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings(".sublist").toggleClass("active");
      });
    }

    var searchSwitch = $('.js-search-switch');
    var searchClose = $('.js-search-close');

    if (searchSwitch != null && searchClose != null) {
      $(searchSwitch).on('click', function (_) {
        body.classList.toggle('search-open');
      });
      $(searchClose).on('click', function (_) {
        body.classList.remove('search-open');
      });
    } //CUSTOM RADIO BUTTONS


    customRadioButtons(); //FIXES

    try {
      if ($(".program-grid").length > 1) {
        $(".program-controls__more").removeClass("hidden");
      }

      $(".grid-table-window").each(function () {
        var t = $(this);

        if (t.find(".grid-table-column").length > 3) {
          $(".program-controls__left").removeClass("hidden");
          $(".program-controls__right").removeClass("hidden");
        }
      });

      if ($(".coverages")) {
        if ($(".coverage__yes > ul").children("li").length <= 3) {
          $(".coverage__area").addClass("coverage__area--expanded");
          $(".js-coverage__expander").remove();
        }
      }
    } catch (e) {
      console.log(e);
    }

    if ($('select').length) {
      $('select').select2({
        minimumResultsForSearch: -1
      });
    }

    if ($('.form').length) {
      highLightLabel();
    }

    var horScrollItems = document.querySelector("js-scroll-items");
    if (horScrollItems != null) horScroll();
    var ww = window.innerWidth; //gallery carousel start

    if ($('.js-gallery').length) {
      /*gallery slick*/
      $('.js-gallery').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        mobileFirst: false,
        preventCaptionOverlap: false,
        dots: true,
        responsive: [{
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            respondTo: 'min',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
        variableWidth: true,
        prevArrow: $('.gallery-prev'),
        nextArrow: $('.gallery-next')
      });
      $('[data-fancybox="gallery"]').fancybox({
        thumbs: {
          autoStart: false
        }
      });
    }

    if ($('.js-simple-slider').length) {
      $('.js-simple-slider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
      });
    }

    if ($('.js-hero-slider').length) {
      var $pager = $('.js-custom-dots span');
      $('.js-hero-slider').slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        ease: 'Pow4.easeIn',
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: $('.grouping-dots'),
        customPaging: function customPaging(slider, i) {
          var item = $pager[i].innerHTML;
          return '<a>' + item + '</a>';
        }
      });
    } //leadership carousel start


    if ($('.js-leadership-slider-image').length) {
      $('.js-leadership-slider-image').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        rtl: true,
        fade: false,
        asNavFor: '.js-leadership-slider-text',
        mobileFirst: false,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 1020,
          settings: {
            slidesToShow: 1
          }
        }]
      });
      $('.js-leadership-slider-text').slick({
        mobileFirst: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.js-leadership-slider-image',
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
      });
    }
  });
  $(window).on("load", function () {
    //CALL TABLE EQUALIZER
    try {
      if ($('.programs').length > 0) tableHeightEqualizer();
    } catch (e) {
      console.log(e);
    }
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {//esc
    }
  });
  $('.programs__tabs__title').click(function () {
    var programid = $(this).attr('data-id');
    $('.programs__tabs__title').removeClass('programs__tabs__title--active');
    $('.program-wrap').removeClass('program-wrap--active');
    $(this).addClass('programs__tabs__title--active');
    $('#' + programid).addClass('program-wrap--active');
    tableHeightEqualizer();
  }); //expand vocabulary

  $('.vocabulary__expander').click(function () {
    $('.vocabulary').toggleClass('vocabulary--visible');
  }); //submenu

  $(".nav-product__trigger").click(function () {
    //MOBILE OR NOT
    if ($(window).width() <= 1024) {
      //IS OPEN OR NOT
      if ($('.menu-expanded').hasClass('menu-expanded--yes')) {
        $('.menu-expanded').toggleClass('menu-expanded--yes');
        setTimeout(function () {
          $('.nav-main__in, .nav-product__wrap').toggleClass('--retract');
        }, 500);
      } else {
        $('.nav-main__in, .nav-product__wrap').toggleClass('--retract');
        setTimeout(function () {
          $('.menu-expanded').toggleClass('menu-expanded--yes');
        }, 1000);
      }
    } else {
      $(window).off("scroll");
      $("body").off("click");
      $('.menu-expanded').toggleClass('menu-expanded--yes');
      setTimeout(function () {
        $("body").one("click", function () {
          $('.menu-expanded').removeClass("menu-expanded--yes");
          $(window).off("scroll");
        });
        $(window).one("scroll", function () {
          $('.menu-expanded').removeClass("menu-expanded--yes");
          $("body").off("click");
        });
        $('.menu-expanded').click(function (e) {
          e.stopPropagation();
        });
      }, 100);
    }
  }); //expand program START

  $(".program-controls__more").click(function () {
    var t = $(this);

    if (!t.parent().prev().find('.program-expander').hasClass('program-expander--visible')) {
      t.text('Δείτε λιγότερα');
      $(".program-controls").addClass('fixit');
    } else {
      t.text('Δείτε περισσότερα');
      $(".program-controls").removeClass('fixit');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $("section.programs").offset().top
        }, 250);
      }, 500);
    }

    t.parent().prev().find('.program-expander').toggleClass('program-expander--visible');
  }); //expand program END
  //expand program START

  var coverageExpandTrigger = document.querySelector('.js-coverage__expander');
  var coverageExpander = document.querySelector('.coverage__area');

  if (coverageExpander != null && coverageExpandTrigger != null) {
    coverageExpandTrigger.addEventListener('click', function (_) {
      coverageExpander.classList.toggle("coverage__area--expanded");
      if (coverageExpander.classList.contains('coverage__area--expanded')) coverageExpandTrigger.innerHTML = 'ΔΕΙΤΕ ΛΙΓΟΤΕΡΑ';else coverageExpandTrigger.innerHTML = 'ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ';
      coverageExpandTrigger.classList.toggle('open');
    });
  } //expand coverages END


  var programExpandTriggerMobile = document.querySelectorAll('.js-grid-table-cell--expander');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = programExpandTriggerMobile[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var programTrigger = _step2.value;
      programTrigger.addEventListener('click', function (_) {
        programExpander.classList.toggle("program-expander--visible");
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var header = document.getElementById("fix-1"); //blog article header sticky

  if ($('.article_content').length > 0 && header != null) {
    //make sticky only if header has intro or cta
    var makeSticky = false;

    if ($('.intro-text').children().length > 0 || $('.intro-cta').length > 0) {
      makeSticky = true;
    }

    if (makeSticky) {
      // When the user scrolls the page, execute myFunction
      window.onscroll = function () {
        stickyFirst();
      }; // Get the header


      var headerHeight = 0;
      if (window.innerWidth > 780) headerHeight = document.getElementById('fix-1').clientHeight;
      var stick1 = document.getElementById("after-sticky-1");
      stick1.style.setProperty('--p1', headerHeight + "px"); // Get the offset position of the navbar

      var elementFirstFromTop = header.offsetTop;

      function stickyFirst() {
        if (window.pageYOffset > elementFirstFromTop) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    }
  }

  var menu = document.getElementById("fix-2"); //product sticky

  if (header != null && menu != null) {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      stickyFirst();
      stickySecond();
    }; // Get the header


    var headerHeight = 0;
    if (window.innerWidth > 780) headerHeight = document.getElementById('fix-1').clientHeight;
    var stick1 = document.getElementById("after-sticky-1");
    stick1.style.setProperty('--p1', headerHeight + "px");
    var menuHeight = document.getElementById('fix-2').clientHeight;
    var stick2 = document.getElementById("after-sticky-2");
    menu.style.setProperty('--h2', menuHeight + "px");
    menu.style.setProperty('--top', headerHeight - $("#fix-1 .intro__text").height() - 38 + "px");
    stick2.style.setProperty('--p2', menuHeight + "px"); // Get the offset position of the navbar

    var elementFirstFromTop = header.offsetTop;
    var elementSecondFromTop = menu.offsetTop;

    function stickyFirst() {
      if (window.pageYOffset > elementFirstFromTop) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    function stickySecond() {
      if (window.pageYOffset > elementSecondFromTop - headerHeight) {
        menu.classList.add("sticky-second");
      } else {
        menu.classList.remove("sticky-second");
      }
    }
  } //grid carousel start


  var carousels = document.querySelectorAll(".js-grid-table");
  var leftButton = document.querySelector(".js-program-left");
  var rightButton = document.querySelector(".js-program-right");
  var order = 0; //  if(document.getElementById("programs-table") != null)
  // var programNumber = document.getElementById("programs-table").childElementCount;

  if (leftButton != null && rightButton != null) {
    var limit = $('.js-grid-table').first().find('.program.program--visible').length - 3;
    prepareButtons(); //RIGHT CLICK

    $(rightButton).unbind().on('click', function (_) {
      limit = $('.js-grid-table').first().find('.program.program--visible').length - 3;

      if (order < limit) {
        order++;
        $(carousels).each(function () {
          $(this).css('transform', 'translateX(' + order * -296 + 'px)');
        });
      }

      prepareButtons();
    });
    $(leftButton).unbind().on('click', function (_) {
      limit = $('.js-grid-table').first().find('.program.program--visible').length - 3;

      if (order > 0) {
        --order;
        $(carousels).each(function () {
          $(this).css('transform', 'translateX(' + order * -296 + 'px)');
        });
      }

      prepareButtons();
    });

    function prepareButtons() {
      order < limit ? $(rightButton).removeClass("no") : $(rightButton).addClass("no");
      order > 0 ? $(leftButton).removeClass("no") : $(leftButton).addClass("no");
    }
  } //grid carousel end
  //sync scroll of windows START


  var scrollers = document.getElementsByClassName('grid-table-window');
  var scrollerDivs = Array.prototype.filter.call(scrollers, function (testElement) {
    return testElement.nodeName === 'DIV';
  });

  function scrollAll(scrollLeft) {
    scrollerDivs.forEach(function (element, index, array) {
      element.scrollLeft = scrollLeft;
    });
  }

  scrollerDivs.forEach(function (element, index, array) {
    element.addEventListener('scroll', function (e) {
      scrollAll(e.target.scrollLeft);
    });
  }); //sync scroll of windows END
  //filtering in products

  var filterTrigger = document.querySelector(".filter__trigger");
  var filterResults = document.querySelector(".filter__results");

  if (filterTrigger != null && filterResults != null) {
    $(".filter__trigger").on('click', function (_) {
      $(".filter__results").toggleClass("filter__results--active");
      $(window).off("scroll");
      $("body").off("click");
      setTimeout(function () {
        $("body").one("click", function () {
          $('.filter__results').removeClass("filter__results--active");
          $(window).off("scroll");
        });
        $(window).one("scroll", function () {
          $('.filter__results').removeClass("filter__results--active");
          $("body").off("click");
        });
        $('.filter__results').click(function (e) {
          e.stopPropagation();
        });
      }, 100);
    });
    /*const filterClicks = document.querySelectorAll(".filter__item input");
    for (const filterClick of filterClicks) {
        filterClick.addEventListener('click', _ => {
            $('.program').removeClass("program--visible");
              const checkboxes = document.querySelectorAll(".filter__item input");
            var datas = [];
            //looping checked values and adding to array
            for (const checkbox of checkboxes) {
                if (checkbox.checked == true) {
                    const dataAttr = checkbox.dataset.index;
                    datas.push(dataAttr);
                }
            }
              console.log(datas);
              if (datas.length > 0) {
                $('.program').removeClass("program--visible");
                const programs = document.querySelectorAll('.program');
                for (const program of programs) {
                    var programActive = new Boolean(false);
                    var programDatas = program.dataset.characteristics;
                    for (const datum of datas) {
                          if (programDatas.includes(datum)) {
                            programActive = true;
                        }
                          if (programActive == true) {
                            program.classList.add('program--visible');
                            console.log(programActive)
                        }
                        else program.classList.remove('program--visible');
                    }
                }
            }
            else $('.program').addClass("program--visible");
          });
    }*/
  } //EMPAND PROGRAMS STARTS
  //js drop item start


  var dropItems = document.querySelectorAll(".js-selected-item");

  if (dropItems != null) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop2 = function _loop2() {
        var dropItem = _step3.value;
        dropItem.addEventListener('click', function (_) {
          _removeClasses();

          document.getElementById(dropItem.dataset.value).classList.add('selected-content--visible');
        });
      };

      for (var _iterator3 = dropItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop2();
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  var els = document.querySelectorAll('.selected-content--visible');

  function _removeClasses() {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('selected-content--visible');
    }
  } //js drop item end


  function horScroll() {
    var slider = document.querySelector('.js-scroll-items');
    var isDown = false;
    var startX;
    var scrollLeft;
    slider.addEventListener('mousedown', function (e) {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', function () {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', function () {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk; //   console.log(walk);
    });
  }

  function customRadioButtons() {
    if ($(".js-custom-radio").length || $(".js-custom-checkbox").length) {
      var $target = $(".js-custom-radio input[type=radio], .js-custom-checkbox input[type=checkbox]");
      $target.each(function () {
        if (!$(this).parent().parent().hasClass('accordion')) {
          $(this).after("<label></label>");
        }
      });
    }
  }

  function highLightLabel() {
    if ($('.form').length > 0) {
      var $target = $(".form input[type='text'], .form input[type='email'], .form input[type='tel'], .form textarea");
      $target.each(function () {
        var text_value = $(this).val();

        if (text_value != '') {
          $(this).parents('.form__item').addClass('filled');
          $(this).parents('.form__item-static').removeClass('filled');
        }
      });
      $target.bind('blur', function () {
        if (!$(this).val() || $(this).hasClass('error')) {
          if (!$(this).val()) $(this).parents('.form__item').removeClass('filled');
          $(this).parents('.form__item-static').removeClass('filled');
        }
      });
      $target.bind('focus', function () {
        if (!$(this).val() || $(this).hasClass('error')) {
          $(this).parents('.form__item').addClass('filled');
          $(this).parents('.form__item-static').removeClass('filled');
        }
      });
    }
  } //using an instersection observer for product START


  if (!$('.js-stop-observer')) {
    $('section[id]').each(function () {
      var thisID = $(this).attr("id");
      $(this).addClass('relator').attr("id", "").prepend("<div class='signpost anchor-200' id=" + thisID + "></div>");
    });
    setTimeout(function () {
      // init the observer
      var options = {
        threshold: 0.15
      }; // simple function to use for callback in the intersection observer

      var changeNav = function changeNav(entries) {
        entries.forEach(function (entry) {
          // verify the element is intersecting
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // remove old active class
            $('.achorlist__active').removeClass('achorlist__active'); // get id of the intersecting section

            var id = $(entry.target).find('.signpost').attr('id'); // find matching link & add appropriate class

            $('[href="#' + id + '"]').addClass('achorlist__active');
          }
        });
      };

      var observer = new IntersectionObserver(changeNav, options); // target the elements to be observed

      var sections = document.querySelectorAll('.signpost');
      sections.forEach(function (section) {
        observer.observe(section.parentElement);
      });
    }, 200);
  } //using an instersection observer for product END
  //TABLE HEIGHT EQUALIZER


  function tableHeightEqualizer() {
    $(".grid-table-cell").attr("style", "");
    setTimeout(function () {
      $(".program-grid").each(function () {
        var grid = $(this);
        var howmany = $(this).find(".program-attributes .grid-table-cell").length; //CUT EXPANDED TABLE WIDTH IN CASE OF 2 COLUMNS

        if ($(window).width() >= 1024) if ($(grid).hasClass("program-grid-2")) $(grid).parent().css({
          "width": "800px",
          "overflow": "hidden"
        });else if ($(grid).hasClass("program-grid-1")) $(grid).parent().css({
          "width": "520px",
          "overflow": "hidden"
        });

        var _loop3 = function _loop3(i) {
          var max = 0; //FIND THE MAX PER ROW

          $(grid).find(".grid-table-column").each(function () {
            var _this = this;

            $(this).find(".grid-table-cell").eq(i).each(function () {
              if ($(this).height() > max) max = $(this).outerHeight();
            }); //SET FIXED HEIGHT

            setTimeout(function () {
              $(_this).find(".grid-table-cell").eq(i).height(max + "px");
            }, 500);
          });
        };

        for (var i = 0; i < howmany; i++) {
          _loop3(i);
        }
      });
    }, 500);
  } //range


  var sheet = document.createElement('style'),
      $rangeInput = $('.range input'),
      prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
  document.body.appendChild(sheet);

  var getTrackStyle = function getTrackStyle(el) {
    console.log(el.getAttribute('data-index'));
    var curVal = el.value,
        val = (el.getAttribute('data-index') - 1) * 25,
        style = ''; // Set active label

    $('.range-labels li').removeClass('active selected');
    console.log(curVal);
    var curLabel = $('.range-labels').find('[data-value="' + curVal + '"]');
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected'); // Change background gradient

    for (var i = 0; i < prefs.length; i++) {
      style += '.range {background: linear-gradient(to right, #383B38 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
      style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #383B38 0%, #383B38 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

    return style;
  };

  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  }); // Change input value on label click

  $('.range-labels li').on('click', function () {
    var index = $(this).index(); // console.log($(this).attr('data-value'))

    $rangeInput.attr('data-index', $(this).attr('data-liindex'));
    $rangeInput.val($(this).attr('data-value')).trigger('input');
  });
})(jQuery);

function SelectProgram(e) {
  //leave one program selected
  var items = document.querySelectorAll(".pick__item");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.classList.remove("pick__item--selected");
  }

  e.closest('.pick__item').classList.add('pick__item--selected');
}

function ExpandProgram(e) {
  //expand program
  e.parentElement.parentElement.classList.toggle('pick-on');
}

function ActivateExtras(e) {
  //activate extras
  var items = document.querySelectorAll(".product-extra-radio");
  var extras = document.getElementsByClassName("pick--extras");
  console.log(extras);
  if (extras.length > 0) extras[0].classList.toggle('pick--extras__deactive');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (e.checked == true) {
      item.removeAttribute("disabled");
    } else {
      item.setAttribute("disabled", "disabled");
      item.checked = false;
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** multi ./assets/js/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wedia\source\repos\EurolifeSitecore91\src\Project\Common\code\assets\js\main.js */"./assets/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkQ2xhc3MiLCJpc0lFMTEiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsImVhY2giLCJmaW5kIiwibGVuZ3RoIiwiJGNvbnRhaW5lciIsImltZ1VybCIsInByb3AiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjc3MiLCJwYXJlbnQiLCJpbWFnZSIsImZpcnN0IiwiaHJlZiIsImF0dHIiLCJ3cmFwIiwiZHJvcGxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3BsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJtZW51U3dpdGNoIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJyZW1vdmUiLCJyZWFkeSIsImdldEVsZW1lbnRCeUlkIiwieWVhcnMiLCJ0aW1lbGluZSIsImFkZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJhbmNob3IiLCJvYnNlcnZlIiwib24iLCJzY3JvbGxlZCIsInNjcm9sbFRvcCIsIndpbmRvd0hlaWdodCIsImJ0dCIsInJlbW92ZUNsYXNzIiwicHJvZ3JhbVRvcCIsIm9mZnNldCIsInRvcCIsInByb2dyYW1Cb3R0b20iLCJlIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGUiLCJ3aWR0aCIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzaWJsaW5ncyIsInRvZ2dsZUNsYXNzIiwic2VhcmNoU3dpdGNoIiwic2VhcmNoQ2xvc2UiLCJjdXN0b21SYWRpb0J1dHRvbnMiLCJ0IiwiY2hpbGRyZW4iLCJzZWxlY3QyIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJoaWdoTGlnaHRMYWJlbCIsImhvclNjcm9sbEl0ZW1zIiwiaG9yU2Nyb2xsIiwid3ciLCJpbm5lcldpZHRoIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwibW9iaWxlRmlyc3QiLCJwcmV2ZW50Q2FwdGlvbk92ZXJsYXAiLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uZFRvIiwidmFyaWFibGVXaWR0aCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImZhbmN5Ym94IiwidGh1bWJzIiwiYXV0b1N0YXJ0IiwiYXJyb3dzIiwiZmFkZSIsIiRwYWdlciIsImVhc2UiLCJsYXp5TG9hZCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImFwcGVuZERvdHMiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwiaXRlbSIsImlubmVySFRNTCIsInJ0bCIsImFzTmF2Rm9yIiwidGFibGVIZWlnaHRFcXVhbGl6ZXIiLCJrZXlkb3duIiwia2V5Q29kZSIsInByb2dyYW1pZCIsImhhc0NsYXNzIiwic2V0VGltZW91dCIsIm9mZiIsIm9uZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXYiLCJ0ZXh0IiwiY292ZXJhZ2VFeHBhbmRUcmlnZ2VyIiwiY292ZXJhZ2VFeHBhbmRlciIsImNvbnRhaW5zIiwicHJvZ3JhbUV4cGFuZFRyaWdnZXJNb2JpbGUiLCJwcm9ncmFtVHJpZ2dlciIsInByb2dyYW1FeHBhbmRlciIsImhlYWRlciIsIm1ha2VTdGlja3kiLCJvbnNjcm9sbCIsInN0aWNreUZpcnN0IiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RpY2sxIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImVsZW1lbnRGaXJzdEZyb21Ub3AiLCJvZmZzZXRUb3AiLCJwYWdlWU9mZnNldCIsIm1lbnUiLCJzdGlja3lTZWNvbmQiLCJtZW51SGVpZ2h0Iiwic3RpY2syIiwiZWxlbWVudFNlY29uZEZyb21Ub3AiLCJjYXJvdXNlbHMiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJvcmRlciIsImxpbWl0IiwicHJlcGFyZUJ1dHRvbnMiLCJ1bmJpbmQiLCJzY3JvbGxlcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsZXJEaXZzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGVzdEVsZW1lbnQiLCJub2RlTmFtZSIsInNjcm9sbEFsbCIsInNjcm9sbExlZnQiLCJlbGVtZW50IiwiaW5kZXgiLCJhcnJheSIsImZpbHRlclRyaWdnZXIiLCJmaWx0ZXJSZXN1bHRzIiwiZHJvcEl0ZW1zIiwiZHJvcEl0ZW0iLCJfcmVtb3ZlQ2xhc3NlcyIsImRhdGFzZXQiLCJ2YWx1ZSIsImVscyIsImlzRG93biIsInN0YXJ0WCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsIngiLCJ3YWxrIiwiJHRhcmdldCIsImFmdGVyIiwidGV4dF92YWx1ZSIsInZhbCIsInBhcmVudHMiLCJiaW5kIiwidGhpc0lEIiwicHJlcGVuZCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJjaGFuZ2VOYXYiLCJpc0ludGVyc2VjdGluZyIsImlkIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwicGFyZW50RWxlbWVudCIsImdyaWQiLCJob3dtYW55IiwibWF4IiwiZXEiLCJvdXRlckhlaWdodCIsInNoZWV0IiwiY3JlYXRlRWxlbWVudCIsIiRyYW5nZUlucHV0IiwicHJlZnMiLCJhcHBlbmRDaGlsZCIsImdldFRyYWNrU3R5bGUiLCJlbCIsImdldEF0dHJpYnV0ZSIsImN1clZhbCIsImN1ckxhYmVsIiwicHJldkFsbCIsInRleHRDb250ZW50IiwidHJpZ2dlciIsImpRdWVyeSIsIlNlbGVjdFByb2dyYW0iLCJpdGVtcyIsImNsb3Nlc3QiLCJFeHBhbmRQcm9ncmFtIiwiQWN0aXZhdGVFeHRyYXMiLCJleHRyYXMiLCJjaGVja2VkIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFFVCxNQUFJLEVBQUUsa0JBQWtCQyxRQUFRLENBQUNDLGVBQTdCLENBQUosRUFBbUQ7QUFDL0NGLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUcsUUFBVixDQUFtQixVQUFuQjtBQUNIOztBQUVILE1BQUlDLE1BQU0sR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0Msb0JBQVQsSUFBaUMsQ0FBQyxDQUFDTCxRQUFRLENBQUNNLFlBQXpEOztBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNWSixLQUFDLENB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCx3QkFBd0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgXHJcbiAgICBpZiAoIShcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpIHtcclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25vLXRvdWNoJyk7XHJcbiAgICB9XHJcblxyXG4gIHZhciBpc0lFMTEgPSAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuICBpZiAoaXNJRTExKSB7XHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTEnKTtcclxuXHJcbiAgICAkKCcuaGVyby1wbGFpbiwgLmhlcm8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykuZmluZCgnLmpzLWhlcm8tc2xpZGVyJykubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgJGNvbnRhaW5lciA9ICQodGhpcykuZmluZCgncGljdHVyZScpLFxyXG4gICAgICAgIGltZ1VybCA9ICRjb250YWluZXIuZmluZCgnaW1nJykucHJvcCgnc3JjJyksXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gJGNvbnRhaW5lci5maW5kKCdpbWcnKS5oZWlnaHQoKTtcclxuICAgIFxyXG4gICAgICBpZiAoaW1nVXJsKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lclxyXG4gICAgICAgICAgLmNzcygnYmFja2dyb3VuZEltYWdlJywgJ3VybCgnICsgaW1nVXJsICsgJyknKVxyXG4gICAgICAgICAgLmFkZENsYXNzKCdjcm9zcy1vYmplY3QtZml0Jyk7XHJcblxyXG4gICAgICAgICRjb250YWluZXIucGFyZW50KCcuaGVybycpLmNzcygnaGVpZ2h0JywgaW1nSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5saXN0LWdyaWQgYXJ0aWNsZSwgLmxpc3QtLWFydGljbGVfX2ltYWdlLCAubGlzdC1heGlzID4gYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmZpcnN0KCk7XHJcbiAgICAgIHZhciBocmVmID0gaW1hZ2UuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICBpbWFnZS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgICAgLndyYXAoJzxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6dXJsKCcgKyBocmVmICsgJykgY2VudGVyIG5vLXJlcGVhdFwiPjwvZGl2PicpO1xyXG4gICAgfSk7XHJcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgY29uc3QgZHJvcGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3BsaXN0Jyk7XHJcbiAgICBpZihkcm9wbGlzdHMgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGRyb3BsaXN0IG9mIGRyb3BsaXN0cykge1xyXG4gICAgICAgICAgICBkcm9wbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGxpc3QtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVudVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXN3aXRjaCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBpZihtZW51U3dpdGNoICE9IG51bGwpIHtcclxuICAgICAgICBtZW51U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vdXNpbmcgYW4gaW5zdGVyc2VjdGlvbiBvYnNlcnZlciBmb3Igc3RvcnlsaW5lIGVmZmVjdHNcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJykpIHtcclxuICAgICAgICAgIGNvbnN0IHllYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXItaXRlbScpO1xyXG4gICAgICAgICAgaWYgKHllYXJzICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJyk7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lLmNsYXNzTGlzdC5hZGQoJ3RpbWVsaW5lLS1pbml0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd5ZWFyLWl0ZW0tLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaChhbmNob3IgPT4ge1xyXG4gICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoYW5jaG9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vdXNpbmcgYW4gaW5zdGVyc2VjdGlvbiBvYnNlcnZlciBmb3Igc3RvcnlsaW5lIGVmZmVjdHMgRU5EXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgY29uc3QgYnR0ID0gJCgnI2JhY2stdG8tdG9wJyk7XHJcblxyXG4gICAgICAgICAgLy9TQ1JPTEwgVE8gVE9QXHJcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPiB3aW5kb3dIZWlnaHQpXHJcbiAgICAgICAgICAgICQoYnR0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQoYnR0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgLy9QUk9HUkFNIENPTlRST0xTIEZJWEVEXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLnByb2dyYW1zJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1Ub3AgPSAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICBjb25zdCBwcm9ncmFtQm90dG9tID0gJCgnLnByb2dyYW0tZ3JpZCcpLnBhcmVudCgnZGl2OnZpc2libGUnKS5vZmZzZXQoKS50b3AgKyAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2Nyb2xsZWQgKyB3aW5kb3dIZWlnaHQgPiBwcm9ncmFtVG9wICYmIHNjcm9sbGVkICsgd2luZG93SGVpZ2h0IDwgcHJvZ3JhbUJvdHRvbSlcclxuICAgICAgICAgICAgICAgICQoJy5wcm9ncmFtLWNvbnRyb2xzJykuYWRkQ2xhc3MoJ2ZpeGl0Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJCgnLnByb2dyYW0tY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZml4aXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2JhY2stdG8tdG9wJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vTVVURSBMSU5LUyBXSVRIIFwiI1wiIEhSRUYgQVRUUklCVVRFXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xyXG4gICAgICAgICAgJCgnaGVhZGVyIGxpLnN1Ymxpc3RlZCA+IGEgc3BhbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncyhcIi5zdWJsaXN0XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hTd2l0Y2ggPSAkKCcuanMtc2VhcmNoLXN3aXRjaCcpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaENsb3NlID0gJCgnLmpzLXNlYXJjaC1jbG9zZScpO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoU3dpdGNoICE9IG51bGwgJiYgc2VhcmNoQ2xvc2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgJChzZWFyY2hTd2l0Y2gpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoc2VhcmNoQ2xvc2UpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9DVVNUT00gUkFESU8gQlVUVE9OU1xyXG4gICAgICBjdXN0b21SYWRpb0J1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgLy9GSVhFU1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoJChcIi5wcm9ncmFtLWdyaWRcIikubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX21vcmVcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcIi5ncmlkLXRhYmxlLXdpbmRvd1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5maW5kKFwiLmdyaWQtdGFibGUtY29sdW1uXCIpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX2xlZnRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzX19yaWdodFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKCQoXCIuY292ZXJhZ2VzXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLmNvdmVyYWdlX195ZXMgPiB1bFwiKS5jaGlsZHJlbihcImxpXCIpLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5jb3ZlcmFnZV9fYXJlYVwiKS5hZGRDbGFzcyhcImNvdmVyYWdlX19hcmVhLS1leHBhbmRlZFwiKTtcclxuICAgICAgICAgICAgICAkKFwiLmpzLWNvdmVyYWdlX19leHBhbmRlclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigkKCdzZWxlY3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYoJCgnLmZvcm0nKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBoaWdoTGlnaHRMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaG9yU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwianMtc2Nyb2xsLWl0ZW1zXCIpO1xyXG4gICAgICAgIGlmKGhvclNjcm9sbEl0ZW1zICE9IG51bGwpIGhvclNjcm9sbCgpO1xyXG5cclxuICAgICAgICBjb25zdCB3dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHJcbiAgICAgICAgLy9nYWxsZXJ5IGNhcm91c2VsIHN0YXJ0XHJcbiAgICAgICAgaWYgKCQoJy5qcy1nYWxsZXJ5JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8qZ2FsbGVyeSBzbGljayovXHJcbiAgICAgICAgICAgICQoJy5qcy1nYWxsZXJ5Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50Q2FwdGlvbk92ZXJsYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnbWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLmdhbGxlcnktcHJldicpLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKCcuZ2FsbGVyeS1uZXh0JylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1mYW5jeWJveD1cImdhbGxlcnlcIl0nKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICB0aHVtYnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0IDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoJCgnLmpzLXNpbXBsZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmpzLXNpbXBsZS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAkKCcuc2xpY2stcHJldicpLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKCcuc2xpY2stbmV4dCcpXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgaWYgKCQoJy5qcy1oZXJvLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgJHBhZ2VyID0gJCgnLmpzLWN1c3RvbS1kb3RzIHNwYW4nKTtcclxuICAgICAgICAgICAgJCgnLmpzLWhlcm8tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlYXNlIDogJ1BvdzQuZWFzZUluJyxcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJCgnLmdyb3VwaW5nLWRvdHMnKSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJHBhZ2VyW2ldLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxhPicgKyBpdGVtICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL2xlYWRlcnNoaXAgY2Fyb3VzZWwgc3RhcnRcclxuICAgICAgICBpZiAoJCgnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLWltYWdlJykubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItaW1hZ2UnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLXRleHQnLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItdGV4dCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogJy5qcy1sZWFkZXJzaGlwLXNsaWRlci1pbWFnZScsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQoJy5zbGljay1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5zbGljay1uZXh0JylcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy9DQUxMIFRBQkxFIEVRVUFMSVpFUlxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCQoJy5wcm9ncmFtcycpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgdGFibGVIZWlnaHRFcXVhbGl6ZXIoKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNykgey8vZXNjXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvZ3JhbXNfX3RhYnNfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBwcm9ncmFtaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICAkKCcucHJvZ3JhbXNfX3RhYnNfX3RpdGxlJykucmVtb3ZlQ2xhc3MoJ3Byb2dyYW1zX190YWJzX190aXRsZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnByb2dyYW0td3JhcCcpLnJlbW92ZUNsYXNzKCdwcm9ncmFtLXdyYXAtLWFjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Byb2dyYW1zX190YWJzX190aXRsZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnIycrIHByb2dyYW1pZCkuYWRkQ2xhc3MoJ3Byb2dyYW0td3JhcC0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGFibGVIZWlnaHRFcXVhbGl6ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZXhwYW5kIHZvY2FidWxhcnlcclxuICAgICQoJy52b2NhYnVsYXJ5X19leHBhbmRlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnZvY2FidWxhcnknKS50b2dnbGVDbGFzcygndm9jYWJ1bGFyeS0tdmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zdWJtZW51XHJcbiAgICAkKFwiLm5hdi1wcm9kdWN0X190cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vTU9CSUxFIE9SIE5PVFxyXG4gICAgICAgIGlmKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgLy9JUyBPUEVOIE9SIE5PVFxyXG4gICAgICAgICAgICBpZigkKCcubWVudS1leHBhbmRlZCcpLmhhc0NsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnRvZ2dsZUNsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LW1haW5fX2luLCAubmF2LXByb2R1Y3RfX3dyYXAnKS50b2dnbGVDbGFzcygnLS1yZXRyYWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1tYWluX19pbiwgLm5hdi1wcm9kdWN0X193cmFwJykudG9nZ2xlQ2xhc3MoJy0tcmV0cmFjdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykudG9nZ2xlQ2xhc3MoJ21lbnUtZXhwYW5kZWQtLXllcycpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgJChcImJvZHlcIikub2ZmKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnRvZ2dsZUNsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikub25lKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykucmVtb3ZlQ2xhc3MoXCJtZW51LWV4cGFuZGVkLS15ZXNcIik7XHJcbiAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub25lKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnJlbW92ZUNsYXNzKFwibWVudS1leHBhbmRlZC0teWVzXCIpO1xyXG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9leHBhbmQgcHJvZ3JhbSBTVEFSVFxyXG4gICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzX19tb3JlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgdCA9ICQodGhpcyk7XHJcblxyXG4gICAgICBpZiAoIXQucGFyZW50KCkucHJldigpLmZpbmQoJy5wcm9ncmFtLWV4cGFuZGVyJykuaGFzQ2xhc3MoJ3Byb2dyYW0tZXhwYW5kZXItLXZpc2libGUnKSkge1xyXG4gICAgICAgIHQudGV4dCgnzpTOtc6vz4TOtSDOu865zrPPjM+EzrXPgc6xJyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzXCIpLmFkZENsYXNzKCdmaXhpdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHQudGV4dCgnzpTOtc6vz4TOtSDPgM61z4HOuc+Dz4PPjM+EzrXPgc6xJyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzXCIpLnJlbW92ZUNsYXNzKCdmaXhpdCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwic2VjdGlvbi5wcm9ncmFtc1wiKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICB0LnBhcmVudCgpLnByZXYoKS5maW5kKCcucHJvZ3JhbS1leHBhbmRlcicpLnRvZ2dsZUNsYXNzKCdwcm9ncmFtLWV4cGFuZGVyLS12aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuICAgIC8vZXhwYW5kIHByb2dyYW0gRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9leHBhbmQgcHJvZ3JhbSBTVEFSVFxyXG4gICAgY29uc3QgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvdmVyYWdlX19leHBhbmRlcicpO1xyXG4gICAgY29uc3QgY292ZXJhZ2VFeHBhbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcmFnZV9fYXJlYScpO1xyXG4gICAgaWYoY292ZXJhZ2VFeHBhbmRlciAhPSBudWxsICYmIGNvdmVyYWdlRXhwYW5kVHJpZ2dlciAhPSBudWxsKSB7XHJcbiAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGNvdmVyYWdlRXhwYW5kZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvdmVyYWdlX19hcmVhLS1leHBhbmRlZFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoY292ZXJhZ2VFeHBhbmRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdmVyYWdlX19hcmVhLS1leHBhbmRlZCcpKSBcclxuICAgICAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmlubmVySFRNTCA9ICfOlM6VzpnOpM6VIM6bzpnOk86fzqTOlc6hzpEnO1xyXG4gICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmlubmVySFRNTCA9ICfOlM6VzpnOpM6VIM6gzpXOoc6ZzqPOo86fzqTOlc6hzpEnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGNvdmVyYWdlRXhwYW5kVHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2V4cGFuZCBjb3ZlcmFnZXMgRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcHJvZ3JhbUV4cGFuZFRyaWdnZXJNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZ3JpZC10YWJsZS1jZWxsLS1leHBhbmRlcicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9ncmFtVHJpZ2dlciBvZiBwcm9ncmFtRXhwYW5kVHJpZ2dlck1vYmlsZSkge1xyXG5cclxuICAgICAgICBwcm9ncmFtVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtRXhwYW5kZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2dyYW0tZXhwYW5kZXItLXZpc2libGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXgtMVwiKTtcclxuXHJcbiAgLy9ibG9nIGFydGljbGUgaGVhZGVyIHN0aWNreVxyXG4gIGlmICgkKCcuYXJ0aWNsZV9jb250ZW50JykubGVuZ3RoID4gMCAmJiBoZWFkZXIgIT0gbnVsbCkge1xyXG4gICAgLy9tYWtlIHN0aWNreSBvbmx5IGlmIGhlYWRlciBoYXMgaW50cm8gb3IgY3RhXHJcblxyXG4gICAgdmFyIG1ha2VTdGlja3kgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoJCgnLmludHJvLXRleHQnKS5jaGlsZHJlbigpLmxlbmd0aCA+IDAgfHwgJCgnLmludHJvLWN0YScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWFrZVN0aWNreSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1ha2VTdGlja3kpIHtcclxuICAgICAgLy8gV2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSBwYWdlLCBleGVjdXRlIG15RnVuY3Rpb25cclxuICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN0aWNreUZpcnN0KCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBHZXQgdGhlIGhlYWRlclxyXG4gICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gMDtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzgwKVxyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXgtMScpLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIHZhciBzdGljazEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyLXN0aWNreS0xXCIpO1xyXG4gICAgICBzdGljazEuc3R5bGUuc2V0UHJvcGVydHkoJy0tcDEnLCBoZWFkZXJIZWlnaHQgKyBcInB4XCIpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSBvZmZzZXQgcG9zaXRpb24gb2YgdGhlIG5hdmJhclxyXG4gICAgICB2YXIgZWxlbWVudEZpcnN0RnJvbVRvcCA9IGhlYWRlci5vZmZzZXRUb3A7IFxyXG5cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHN0aWNreUZpcnN0KCkge1xyXG4gICAgICAgIGlmICgod2luZG93LnBhZ2VZT2Zmc2V0ID4gZWxlbWVudEZpcnN0RnJvbVRvcCkpIHtcclxuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuXHJcbiAgICB9IFxyXG4gIH1cclxuXHJcblxyXG4gIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXgtMlwiKTtcclxuICAvL3Byb2R1Y3Qgc3RpY2t5XHJcbiAgaWYgKGhlYWRlciAhPSBudWxsICYmIG1lbnUgIT0gbnVsbCkge1xyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSBwYWdlLCBleGVjdXRlIG15RnVuY3Rpb25cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RpY2t5Rmlyc3QoKTtcclxuICAgICAgc3RpY2t5U2Vjb25kKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEdldCB0aGUgaGVhZGVyXHJcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gMDtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc4MClcclxuICAgICAgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpeC0xJykuY2xpZW50SGVpZ2h0O1xyXG4gICBcclxuICAgIHZhciBzdGljazEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyLXN0aWNreS0xXCIpO1xyXG4gICAgc3RpY2sxLnN0eWxlLnNldFByb3BlcnR5KCctLXAxJywgaGVhZGVySGVpZ2h0ICsgXCJweFwiKTtcclxuXHJcbiAgICB2YXIgbWVudUhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXgtMicpLmNsaWVudEhlaWdodDtcclxuICAgIHZhciBzdGljazIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyLXN0aWNreS0yXCIpO1xyXG4gICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oMicsIG1lbnVIZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3AnLCAoaGVhZGVySGVpZ2h0IC0gJChcIiNmaXgtMSAuaW50cm9fX3RleHRcIikuaGVpZ2h0KCkgLSAzOCkgKyBcInB4XCIpO1xyXG4gICAgc3RpY2syLnN0eWxlLnNldFByb3BlcnR5KCctLXAyJywgbWVudUhlaWdodCArIFwicHhcIik7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBvZmZzZXQgcG9zaXRpb24gb2YgdGhlIG5hdmJhclxyXG4gICAgdmFyIGVsZW1lbnRGaXJzdEZyb21Ub3AgPSBoZWFkZXIub2Zmc2V0VG9wO1xyXG4gICAgdmFyIGVsZW1lbnRTZWNvbmRGcm9tVG9wID0gbWVudS5vZmZzZXRUb3A7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RpY2t5Rmlyc3QoKSB7XHJcbiAgICAgIGlmICgod2luZG93LnBhZ2VZT2Zmc2V0ID4gZWxlbWVudEZpcnN0RnJvbVRvcCkpIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGlja3lTZWNvbmQoKSB7XHJcblxyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gKGVsZW1lbnRTZWNvbmRGcm9tVG9wIC0gaGVhZGVySGVpZ2h0KSkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInN0aWNreS1zZWNvbmRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXNlY29uZFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC8vZ3JpZCBjYXJvdXNlbCBzdGFydFxyXG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1ncmlkLXRhYmxlXCIpO1xyXG4gICAgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvZ3JhbS1sZWZ0XCIpO1xyXG4gICAgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXByb2dyYW0tcmlnaHRcIik7XHJcbiAgICB2YXIgb3JkZXIgPSAwO1xyXG4gICAgLy8gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3JhbXMtdGFibGVcIikgIT0gbnVsbClcclxuICAgICAgIC8vIHZhciBwcm9ncmFtTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmFtcy10YWJsZVwiKS5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIGlmIChsZWZ0QnV0dG9uICE9IG51bGwgJiYgcmlnaHRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgbGltaXQgPSAkKCcuanMtZ3JpZC10YWJsZScpLmZpcnN0KCkuZmluZCgnLnByb2dyYW0ucHJvZ3JhbS0tdmlzaWJsZScpLmxlbmd0aCAtIDM7XHJcbiAgICAgIHByZXBhcmVCdXR0b25zKCk7XHJcblxyXG4gICAgICAvL1JJR0hUIENMSUNLXHJcbiAgICAgICQocmlnaHRCdXR0b24pLnVuYmluZCgpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgIGxpbWl0ID0gJCgnLmpzLWdyaWQtdGFibGUnKS5maXJzdCgpLmZpbmQoJy5wcm9ncmFtLnByb2dyYW0tLXZpc2libGUnKS5sZW5ndGggLSAzO1xyXG4gICAgICAgIGlmIChvcmRlciA8IGxpbWl0KSB7XHJcbiAgICAgICAgICBvcmRlcisrO1xyXG5cclxuICAgICAgICAgICQoY2Fyb3VzZWxzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAob3JkZXIgKiAoLTI5NikpICsgJ3B4KScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBwcmVwYXJlQnV0dG9ucygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQobGVmdEJ1dHRvbikudW5iaW5kKCkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgbGltaXQgPSAkKCcuanMtZ3JpZC10YWJsZScpLmZpcnN0KCkuZmluZCgnLnByb2dyYW0ucHJvZ3JhbS0tdmlzaWJsZScpLmxlbmd0aCAtIDM7XHJcbiAgICAgICAgaWYgKG9yZGVyID4gMCkge1xyXG4gICAgICAgICAgLS1vcmRlcjtcclxuXHJcbiAgICAgICAgICAkKGNhcm91c2VscykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKG9yZGVyICogKC0yOTYpKSArICdweCknKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVwYXJlQnV0dG9ucygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHByZXBhcmVCdXR0b25zKCkge1xyXG4gICAgICAgIChvcmRlciA8IGxpbWl0KSA/ICQocmlnaHRCdXR0b24pLnJlbW92ZUNsYXNzKFwibm9cIikgOiAkKHJpZ2h0QnV0dG9uKS5hZGRDbGFzcyhcIm5vXCIpO1xyXG4gICAgICAgIChvcmRlciA+IDApID8gJChsZWZ0QnV0dG9uKS5yZW1vdmVDbGFzcyhcIm5vXCIpIDogJChsZWZ0QnV0dG9uKS5hZGRDbGFzcyhcIm5vXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2dyaWQgY2Fyb3VzZWwgZW5kXHJcblxyXG4gICAgLy9zeW5jIHNjcm9sbCBvZiB3aW5kb3dzIFNUQVJUXHJcbiAgICB2YXIgc2Nyb2xsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3JpZC10YWJsZS13aW5kb3cnKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsZXJEaXZzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHNjcm9sbGVycywgZnVuY3Rpb24odGVzdEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGVzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdESVYnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsQWxsKHNjcm9sbExlZnQpIHtcclxuICAgICAgICBzY3JvbGxlckRpdnMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxlckRpdnMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2Nyb2xsQWxsKGUudGFyZ2V0LnNjcm9sbExlZnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvL3N5bmMgc2Nyb2xsIG9mIHdpbmRvd3MgRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9maWx0ZXJpbmcgaW4gcHJvZHVjdHNcclxuICAgIGNvbnN0IGZpbHRlclRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fdHJpZ2dlclwiKTtcclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fcmVzdWx0c1wiKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyVHJpZ2dlciAhPSBudWxsICYmIGZpbHRlclJlc3VsdHMgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgJChcIi5maWx0ZXJfX3RyaWdnZXJcIikub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAkKFwiLmZpbHRlcl9fcmVzdWx0c1wiKS50b2dnbGVDbGFzcyhcImZpbHRlcl9fcmVzdWx0cy0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5vbmUoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLmZpbHRlcl9fcmVzdWx0cycpLnJlbW92ZUNsYXNzKFwiZmlsdGVyX19yZXN1bHRzLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub25lKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcuZmlsdGVyX19yZXN1bHRzJykucmVtb3ZlQ2xhc3MoXCJmaWx0ZXJfX3Jlc3VsdHMtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuZmlsdGVyX19yZXN1bHRzJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvKmNvbnN0IGZpbHRlckNsaWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19pdGVtIGlucHV0XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmlsdGVyQ2xpY2sgb2YgZmlsdGVyQ2xpY2tzKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZ3JhbScpLnJlbW92ZUNsYXNzKFwicHJvZ3JhbS0tdmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2l0ZW0gaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vbG9vcGluZyBjaGVja2VkIHZhbHVlcyBhbmQgYWRkaW5nIHRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gY2hlY2tib3guZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaChkYXRhQXR0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5wcm9ncmFtJykucmVtb3ZlQ2xhc3MoXCJwcm9ncmFtLS12aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyYW0nKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2dyYW0gb2YgcHJvZ3JhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyYW1BY3RpdmUgPSBuZXcgQm9vbGVhbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmFtRGF0YXMgPSBwcm9ncmFtLmRhdGFzZXQuY2hhcmFjdGVyaXN0aWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdHVtIG9mIGRhdGFzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhcy5pbmNsdWRlcyhkYXR1bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3JhbUFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5jbGFzc0xpc3QuYWRkKCdwcm9ncmFtLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3JhbUFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcHJvZ3JhbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9ncmFtLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlICQoJy5wcm9ncmFtJykuYWRkQ2xhc3MoXCJwcm9ncmFtLS12aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgLy9FTVBBTkQgUFJPR1JBTVMgU1RBUlRTXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9qcyBkcm9wIGl0ZW0gc3RhcnRcclxuICAgIGNvbnN0IGRyb3BJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc2VsZWN0ZWQtaXRlbVwiKTtcclxuXHJcbiAgICBpZiAoZHJvcEl0ZW1zICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBkcm9wSXRlbSBvZiBkcm9wSXRlbXMpIHtcclxuXHJcbiAgICAgICAgICAgIGRyb3BJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgX3JlbW92ZUNsYXNzZXMoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyb3BJdGVtLmRhdGFzZXQudmFsdWUpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWNvbnRlbnQtLXZpc2libGUnKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkLWNvbnRlbnQtLXZpc2libGUnKTtcclxuICAgIGZ1bmN0aW9uIF9yZW1vdmVDbGFzc2VzKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1jb250ZW50LS12aXNpYmxlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2pzIGRyb3AgaXRlbSBlbmRcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhvclNjcm9sbCgpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2Nyb2xsLWl0ZW1zJyk7XHJcbiAgICAgICAgbGV0IGlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGFydFg7XHJcbiAgICAgICAgbGV0IHNjcm9sbExlZnQ7XHJcblxyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHNsaWRlci5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZighaXNEb3duKSByZXR1cm47XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDM7IC8vc2Nyb2xsLWZhc3RcclxuICAgICAgICAgICAgc2xpZGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gd2FsaztcclxuICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh3YWxrKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBmdW5jdGlvbiBjdXN0b21SYWRpb0J1dHRvbnMoKSB7XHJcbiAgICBpZiAoJChcIi5qcy1jdXN0b20tcmFkaW9cIikubGVuZ3RoIHx8ICQoXCIuanMtY3VzdG9tLWNoZWNrYm94XCIpLmxlbmd0aCkge1xyXG5cclxuICAgICAgdmFyICR0YXJnZXQgPSAkKFwiLmpzLWN1c3RvbS1yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwgLmpzLWN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuXHJcbiAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5hZnRlcihcIjxsYWJlbD48L2xhYmVsPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlnaExpZ2h0TGFiZWwoKSB7XHJcbiAgICAgIGlmICgkKCcuZm9ybScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoXCIuZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sIC5mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sIC5mb3JtIGlucHV0W3R5cGU9J3RlbCddLCAuZm9ybSB0ZXh0YXJlYVwiKTtcclxuICAgICAgICAkdGFyZ2V0LmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIHRleHRfdmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgaWYgKHRleHRfdmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbScpLmFkZENsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbS1zdGF0aWMnKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR0YXJnZXQuYmluZCgnYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghJCh0aGlzKS52YWwoKSB8fCAkKHRoaXMpLmhhc0NsYXNzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS52YWwoKSlcclxuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtLXN0YXRpYycpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkdGFyZ2V0LmJpbmQoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCEkKHRoaXMpLnZhbCgpIHx8ICQodGhpcykuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbScpLmFkZENsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbS1zdGF0aWMnKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3VzaW5nIGFuIGluc3RlcnNlY3Rpb24gb2JzZXJ2ZXIgZm9yIHByb2R1Y3QgU1RBUlRcclxuXHJcbiAgICBpZiAoISQoJy5qcy1zdG9wLW9ic2VydmVyJykpIHtcclxuICAgICAgJCgnc2VjdGlvbltpZF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB0aGlzSUQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdyZWxhdG9yJykuYXR0cihcImlkXCIsIFwiXCIpLnByZXBlbmQoXCI8ZGl2IGNsYXNzPSdzaWducG9zdCBhbmNob3ItMjAwJyBpZD1cIiArIHRoaXNJRCArIFwiPjwvZGl2PlwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBpbml0IHRoZSBvYnNlcnZlclxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuMTVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNpbXBsZSBmdW5jdGlvbiB0byB1c2UgZm9yIGNhbGxiYWNrIGluIHRoZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXJcclxuICAgICAgICBjb25zdCBjaGFuZ2VOYXYgPSAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAvLyB2ZXJpZnkgdGhlIGVsZW1lbnQgaXMgaW50ZXJzZWN0aW5nXHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgb2xkIGFjdGl2ZSBjbGFzc1xyXG4gICAgICAgICAgICAgICQoJy5hY2hvcmxpc3RfX2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY2hvcmxpc3RfX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIC8vIGdldCBpZCBvZiB0aGUgaW50ZXJzZWN0aW5nIHNlY3Rpb25cclxuICAgICAgICAgICAgICB2YXIgaWQgPSAkKGVudHJ5LnRhcmdldCkuZmluZCgnLnNpZ25wb3N0JykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGxpbmsgJiBhZGQgYXBwcm9wcmlhdGUgY2xhc3NcclxuICAgICAgICAgICAgICAkKCdbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjaG9ybGlzdF9fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2hhbmdlTmF2LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gdGFyZ2V0IHRoZSBlbGVtZW50cyB0byBiZSBvYnNlcnZlZFxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZ25wb3N0Jyk7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXNpbmcgYW4gaW5zdGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgcHJvZHVjdCBFTkRcclxuXHJcbiAgICAvL1RBQkxFIEhFSUdIVCBFUVVBTElaRVJcclxuICAgIGZ1bmN0aW9uIHRhYmxlSGVpZ2h0RXF1YWxpemVyKCkge1xyXG4gICAgICAkKFwiLmdyaWQtdGFibGUtY2VsbFwiKS5hdHRyKFwic3R5bGVcIiwgXCJcIik7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLnByb2dyYW0tZ3JpZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNvbnN0IGdyaWQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgY29uc3QgaG93bWFueSA9ICQodGhpcykuZmluZChcIi5wcm9ncmFtLWF0dHJpYnV0ZXMgLmdyaWQtdGFibGUtY2VsbFwiKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgLy9DVVQgRVhQQU5ERUQgVEFCTEUgV0lEVEggSU4gQ0FTRSBPRiAyIENPTFVNTlNcclxuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMDI0KVxyXG4gICAgICAgICAgICBpZiAoJChncmlkKS5oYXNDbGFzcyhcInByb2dyYW0tZ3JpZC0yXCIpKVxyXG4gICAgICAgICAgICAgICQoZ3JpZCkucGFyZW50KCkuY3NzKHsgXCJ3aWR0aFwiOiBcIjgwMHB4XCIsIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGlmICgkKGdyaWQpLmhhc0NsYXNzKFwicHJvZ3JhbS1ncmlkLTFcIikpXHJcbiAgICAgICAgICAgICAgICAkKGdyaWQpLnBhcmVudCgpLmNzcyh7IFwid2lkdGhcIjogXCI1MjBweFwiLCBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSk7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3dtYW55OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL0ZJTkQgVEhFIE1BWCBQRVIgUk9XXHJcbiAgICAgICAgICAgICQoZ3JpZCkuZmluZChcIi5ncmlkLXRhYmxlLWNvbHVtblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuZ3JpZC10YWJsZS1jZWxsXCIpLmVxKGkpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGVpZ2h0KCkgPiBtYXgpXHJcbiAgICAgICAgICAgICAgICAgIG1heCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgLy9TRVQgRklYRUQgSEVJR0hUXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQodGhpcykuZmluZChcIi5ncmlkLXRhYmxlLWNlbGxcIikuZXEoaSkuaGVpZ2h0KG1heCArIFwicHhcIik7IH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL3JhbmdlXHJcbiAgdmFyIHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcclxuICAgICRyYW5nZUlucHV0ID0gJCgnLnJhbmdlIGlucHV0JyksXHJcbiAgICBwcmVmcyA9IFsnd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaycsICdtb3otcmFuZ2UtdHJhY2snLCAnbXMtdHJhY2snXTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGVldCk7XHJcblxyXG4gIHZhciBnZXRUcmFja1N0eWxlID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcclxuICAgIHZhciBjdXJWYWwgPSBlbC52YWx1ZSxcclxuICAgICAgdmFsID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpIC0gMSkgKiAyNSxcclxuICAgICAgc3R5bGUgPSAnJztcclxuXHJcbiAgICAvLyBTZXQgYWN0aXZlIGxhYmVsXHJcbiAgICAkKCcucmFuZ2UtbGFiZWxzIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzZWxlY3RlZCcpO1xyXG4gICAgY29uc29sZS5sb2coY3VyVmFsKVxyXG4gICAgdmFyIGN1ckxhYmVsID0gJCgnLnJhbmdlLWxhYmVscycpLmZpbmQoJ1tkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIl0nKTtcclxuXHJcbiAgICBjdXJMYWJlbC5hZGRDbGFzcygnYWN0aXZlIHNlbGVjdGVkJyk7XHJcbiAgICBjdXJMYWJlbC5wcmV2QWxsKCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgZ3JhZGllbnRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3R5bGUgKz0gJy5yYW5nZSB7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzgzQjM4IDAlLCAjMzdhZGJmICcgKyB2YWwgKyAnJSwgI2ZmZiAnICsgdmFsICsgJyUsICNmZmYgMTAwJSl9JztcclxuICAgICAgc3R5bGUgKz0gJy5yYW5nZSBpbnB1dDo6LScgKyBwcmVmc1tpXSArICd7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzgzQjM4IDAlLCAjMzgzQjM4ICcgKyB2YWwgKyAnJSwgI2IyYjJiMiAnICsgdmFsICsgJyUsICNiMmIyYjIgMTAwJSl9JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG5cclxuICAkcmFuZ2VJbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzaGVldC50ZXh0Q29udGVudCA9IGdldFRyYWNrU3R5bGUodGhpcyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENoYW5nZSBpbnB1dCB2YWx1ZSBvbiBsYWJlbCBjbGlja1xyXG4gICQoJy5yYW5nZS1sYWJlbHMgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKSlcclxuICAgICRyYW5nZUlucHV0LmF0dHIoJ2RhdGEtaW5kZXgnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtbGlpbmRleCcpKTtcclxuICAgICRyYW5nZUlucHV0LnZhbCgkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKSkudHJpZ2dlcignaW5wdXQnKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU2VsZWN0UHJvZ3JhbShlKSB7XHJcbiAgLy9sZWF2ZSBvbmUgcHJvZ3JhbSBzZWxlY3RlZFxyXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waWNrX19pdGVtXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInBpY2tfX2l0ZW0tLXNlbGVjdGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgZS5jbG9zZXN0KCcucGlja19faXRlbScpLmNsYXNzTGlzdC5hZGQoJ3BpY2tfX2l0ZW0tLXNlbGVjdGVkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEV4cGFuZFByb2dyYW0oZSkge1xyXG4gIC8vZXhwYW5kIHByb2dyYW1cclxuICBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdwaWNrLW9uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjdGl2YXRlRXh0cmFzKGUpIHtcclxuICAvL2FjdGl2YXRlIGV4dHJhc1xyXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LWV4dHJhLXJhZGlvXCIpO1xyXG4gIGNvbnN0IGV4dHJhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrLS1leHRyYXNcIik7XHJcbiAgY29uc29sZS5sb2coZXh0cmFzKVxyXG4gIGlmIChleHRyYXMubGVuZ3RoID4gMCkgZXh0cmFzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3BpY2stLWV4dHJhc19fZGVhY3RpdmUnKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG5cclxuICAgIGlmIChlLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjExJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
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

  var header = document.getElementById("fix-1");
  var menu = document.getElementById("fix-2");

  if (header != null && menu != null) {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      stickyFirst();
      stickySecond();
    }; // Get the header


    var headerHeight = 0;
    if (window.innerWidth > 780) headerHeight = document.getElementById('fix-1').clientHeight; //header.style.setProperty('--h1', headerHeight + "px");

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
    if ($("input[type=radio]").length || $("input[type=checkbox]").length) {
      var $target = $("input[type=radio], input[type=checkbox]");
      $target.each(function () {
        if (!$(this).parent().parent().hasClass('accordion')) {
          $(this).after("<label></label>");
          $(this).parent().addClass("cursor-pointer");
        }
      });
    }
  }

  function highLightLabel() {
    $target = $(".form input[type='text'], .form input[type='email'], .form input[type='tel'], .form textarea");
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
  }
})(jQuery);

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

module.exports = __webpack_require__(/*! C:\projects\Eurolife\src\Project\Common\code\assets\js\main.js */"./assets/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkQ2xhc3MiLCJpc0lFMTEiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsImVhY2giLCJmaW5kIiwibGVuZ3RoIiwiJGNvbnRhaW5lciIsImltZ1VybCIsInByb3AiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjc3MiLCJwYXJlbnQiLCJpbWFnZSIsImZpcnN0IiwiaHJlZiIsImF0dHIiLCJ3cmFwIiwiZHJvcGxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3BsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJtZW51U3dpdGNoIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJyZW1vdmUiLCJyZWFkeSIsIm9uIiwic2Nyb2xsZWQiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJidHQiLCJyZW1vdmVDbGFzcyIsInByb2dyYW1Ub3AiLCJvZmZzZXQiLCJ0b3AiLCJwcm9ncmFtQm90dG9tIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlIiwid2lkdGgiLCJjbGljayIsInByZXZlbnREZWZhdWx0Iiwic2libGluZ3MiLCJ0b2dnbGVDbGFzcyIsInNlYXJjaFN3aXRjaCIsInNlYXJjaENsb3NlIiwiY3VzdG9tUmFkaW9CdXR0b25zIiwidCIsImNoaWxkcmVuIiwic2VsZWN0MiIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiaGlnaExpZ2h0TGFiZWwiLCJob3JTY3JvbGxJdGVtcyIsImhvclNjcm9sbCIsInd3IiwiaW5uZXJXaWR0aCIsInNsaWNrIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsIm1vYmlsZUZpcnN0IiwicHJldmVudENhcHRpb25PdmVybGFwIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbmRUbyIsInZhcmlhYmxlV2lkdGgiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJmYW5jeWJveCIsInRodW1icyIsImF1dG9TdGFydCIsImFycm93cyIsImZhZGUiLCIkcGFnZXIiLCJlYXNlIiwibGF6eUxvYWQiLCJhcHBlbmREb3RzIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiaSIsIml0ZW0iLCJpbm5lckhUTUwiLCJydGwiLCJhc05hdkZvciIsInRhYmxlSGVpZ2h0RXF1YWxpemVyIiwia2V5ZG93biIsImtleUNvZGUiLCJwcm9ncmFtaWQiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJvZmYiLCJvbmUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2IiwidGV4dCIsImNvdmVyYWdlRXhwYW5kVHJpZ2dlciIsImNvdmVyYWdlRXhwYW5kZXIiLCJjb250YWlucyIsInByb2dyYW1FeHBhbmRUcmlnZ2VyTW9iaWxlIiwicHJvZ3JhbVRyaWdnZXIiLCJwcm9ncmFtRXhwYW5kZXIiLCJoZWFkZXIiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnUiLCJvbnNjcm9sbCIsInN0aWNreUZpcnN0Iiwic3RpY2t5U2Vjb25kIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RpY2sxIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIm1lbnVIZWlnaHQiLCJzdGljazIiLCJlbGVtZW50Rmlyc3RGcm9tVG9wIiwib2Zmc2V0VG9wIiwiZWxlbWVudFNlY29uZEZyb21Ub3AiLCJwYWdlWU9mZnNldCIsImFkZCIsImNhcm91c2VscyIsImxlZnRCdXR0b24iLCJyaWdodEJ1dHRvbiIsIm9yZGVyIiwibGltaXQiLCJwcmVwYXJlQnV0dG9ucyIsInVuYmluZCIsInNjcm9sbGVycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxlckRpdnMiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJ0ZXN0RWxlbWVudCIsIm5vZGVOYW1lIiwic2Nyb2xsQWxsIiwic2Nyb2xsTGVmdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJhcnJheSIsInRhcmdldCIsImZpbHRlclRyaWdnZXIiLCJmaWx0ZXJSZXN1bHRzIiwiZHJvcEl0ZW1zIiwiZHJvcEl0ZW0iLCJfcmVtb3ZlQ2xhc3NlcyIsImRhdGFzZXQiLCJ2YWx1ZSIsImVscyIsImlzRG93biIsInN0YXJ0WCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsIngiLCJ3YWxrIiwiJHRhcmdldCIsImFmdGVyIiwidGV4dF92YWx1ZSIsInZhbCIsInBhcmVudHMiLCJiaW5kIiwidGhpc0lEIiwicHJlcGVuZCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJjaGFuZ2VOYXYiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiaWQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsInBhcmVudEVsZW1lbnQiLCJncmlkIiwiaG93bWFueSIsIm1heCIsImVxIiwib3V0ZXJIZWlnaHQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgXHJcbiAgICBpZiAoIShcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpIHtcclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25vLXRvdWNoJyk7XHJcbiAgICB9XHJcblxyXG4gIHZhciBpc0lFMTEgPSAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuICBpZiAoaXNJRTExKSB7XHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTEnKTtcclxuXHJcbiAgICAkKCcuaGVyby1wbGFpbiwgLmhlcm8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykuZmluZCgnLmpzLWhlcm8tc2xpZGVyJykubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgJGNvbnRhaW5lciA9ICQodGhpcykuZmluZCgncGljdHVyZScpLFxyXG4gICAgICAgIGltZ1VybCA9ICRjb250YWluZXIuZmluZCgnaW1nJykucHJvcCgnc3JjJyksXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gJGNvbnRhaW5lci5maW5kKCdpbWcnKS5oZWlnaHQoKTtcclxuICAgIFxyXG4gICAgICBpZiAoaW1nVXJsKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lclxyXG4gICAgICAgICAgLmNzcygnYmFja2dyb3VuZEltYWdlJywgJ3VybCgnICsgaW1nVXJsICsgJyknKVxyXG4gICAgICAgICAgLmFkZENsYXNzKCdjcm9zcy1vYmplY3QtZml0Jyk7XHJcblxyXG4gICAgICAgICRjb250YWluZXIucGFyZW50KCcuaGVybycpLmNzcygnaGVpZ2h0JywgaW1nSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5saXN0LWdyaWQgYXJ0aWNsZSwgLmxpc3QtLWFydGljbGVfX2ltYWdlLCAubGlzdC1heGlzID4gYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmZpcnN0KCk7XHJcbiAgICAgIHZhciBocmVmID0gaW1hZ2UuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICBpbWFnZS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgICAgLndyYXAoJzxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6dXJsKCcgKyBocmVmICsgJykgY2VudGVyIG5vLXJlcGVhdFwiPjwvZGl2PicpO1xyXG4gICAgfSk7XHJcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgY29uc3QgZHJvcGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3BsaXN0Jyk7XHJcbiAgICBpZihkcm9wbGlzdHMgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGRyb3BsaXN0IG9mIGRyb3BsaXN0cykge1xyXG4gICAgICAgICAgICBkcm9wbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGxpc3QtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVudVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXN3aXRjaCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBpZihtZW51U3dpdGNoICE9IG51bGwpIHtcclxuICAgICAgICBtZW51U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICBjb25zdCBidHQgPSAkKCcjYmFjay10by10b3AnKTtcclxuXHJcbiAgICAgICAgICAvL1NDUk9MTCBUTyBUT1BcclxuICAgICAgICAgIGlmIChzY3JvbGxlZCA+IHdpbmRvd0hlaWdodClcclxuICAgICAgICAgICAgJChidHQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJChidHQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAvL1BST0dSQU0gQ09OVFJPTFMgRklYRURcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZ3JhbXMnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcHJvZ3JhbVRvcCA9ICQoJy5wcm9ncmFtLWdyaWQnKS5wYXJlbnQoJ2Rpdjp2aXNpYmxlJykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1Cb3R0b20gPSAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLm9mZnNldCgpLnRvcCArICQoJy5wcm9ncmFtLWdyaWQnKS5wYXJlbnQoJ2Rpdjp2aXNpYmxlJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzY3JvbGxlZCArIHdpbmRvd0hlaWdodCA+IHByb2dyYW1Ub3AgJiYgc2Nyb2xsZWQgKyB3aW5kb3dIZWlnaHQgPCBwcm9ncmFtQm90dG9tKVxyXG4gICAgICAgICAgICAgICAgJCgnLnByb2dyYW0tY29udHJvbHMnKS5hZGRDbGFzcygnZml4aXQnKTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZ3JhbS1jb250cm9scycpLnJlbW92ZUNsYXNzKCdmaXhpdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjYmFjay10by10b3AnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9NVVRFIExJTktTIFdJVEggXCIjXCIgSFJFRiBBVFRSSUJVVEVcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XHJcbiAgICAgICAgICAkKCdoZWFkZXIgbGkuc3VibGlzdGVkID4gYSBzcGFuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKFwiLnN1Ymxpc3RcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFN3aXRjaCA9ICQoJy5qcy1zZWFyY2gtc3dpdGNoJyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQ2xvc2UgPSAkKCcuanMtc2VhcmNoLWNsb3NlJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hTd2l0Y2ggIT0gbnVsbCAmJiBzZWFyY2hDbG9zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAkKHNlYXJjaFN3aXRjaCkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChzZWFyY2hDbG9zZSkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0NVU1RPTSBSQURJTyBCVVRUT05TXHJcbiAgICAgIGN1c3RvbVJhZGlvQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAvL0ZJWEVTXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICgkKFwiLnByb2dyYW0tZ3JpZFwiKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc19fbW9yZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKFwiLmdyaWQtdGFibGUtd2luZG93XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0LmZpbmQoXCIuZ3JpZC10YWJsZS1jb2x1bW5cIikubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc19fbGVmdFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX3JpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoJChcIi5jb3ZlcmFnZXNcIikpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuY292ZXJhZ2VfX3llcyA+IHVsXCIpLmNoaWxkcmVuKFwibGlcIikubGVuZ3RoIDw9IDMpIHtcclxuICAgICAgICAgICAgICAkKFwiLmNvdmVyYWdlX19hcmVhXCIpLmFkZENsYXNzKFwiY292ZXJhZ2VfX2FyZWEtLWV4cGFuZGVkXCIpO1xyXG4gICAgICAgICAgICAgICQoXCIuanMtY292ZXJhZ2VfX2V4cGFuZGVyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJ3NlbGVjdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZigkKCcuZm9ybScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBob3JTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJqcy1zY3JvbGwtaXRlbXNcIik7XHJcbiAgICAgICAgaWYoaG9yU2Nyb2xsSXRlbXMgIT0gbnVsbCkgaG9yU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHd3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cclxuICAgICAgICAvL2dhbGxlcnkgY2Fyb3VzZWwgc3RhcnRcclxuICAgICAgICBpZiAoJCgnLmpzLWdhbGxlcnknKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLypnYWxsZXJ5IHNsaWNrKi9cclxuICAgICAgICAgICAgJCgnLmpzLWdhbGxlcnknKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByZXZlbnRDYXB0aW9uT3ZlcmxhcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25kVG86ICdtaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAkKCcuZ2FsbGVyeS1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5nYWxsZXJ5LW5leHQnKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWZhbmN5Ym94PVwiZ2FsbGVyeVwiXScpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgICAgIHRodW1icyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvU3RhcnQgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICgkKCcuanMtc2ltcGxlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcuanMtc2ltcGxlLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQoJy5zbGljay1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5zbGljay1uZXh0JylcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICBpZiAoJCgnLmpzLWhlcm8tc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFnZXIgPSAkKCcuanMtY3VzdG9tLWRvdHMgc3BhbicpO1xyXG4gICAgICAgICAgICAkKCcuanMtaGVyby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVhc2UgOiAnUG93NC5lYXNlSW4nLFxyXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKCcuZ3JvdXBpbmctZG90cycpLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkcGFnZXJbaV0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGE+JyArIGl0ZW0gKyAnPC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vbGVhZGVyc2hpcCBjYXJvdXNlbCBzdGFydFxyXG4gICAgICAgIGlmICgkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItaW1hZ2UnKS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5qcy1sZWFkZXJzaGlwLXNsaWRlci1pbWFnZScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6ICcuanMtbGVhZGVyc2hpcC1zbGlkZXItdGV4dCcsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5qcy1sZWFkZXJzaGlwLXNsaWRlci10ZXh0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLWltYWdlJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLnNsaWNrLXByZXYnKSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJCgnLnNsaWNrLW5leHQnKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvL0NBTEwgVEFCTEUgRVFVQUxJWkVSXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoJCgnLnByb2dyYW1zJykubGVuZ3RoID4gMClcclxuICAgICAgICB0YWJsZUhlaWdodEVxdWFsaXplcigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7Ly9lc2NcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9ncmFtc19fdGFic19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHByb2dyYW1pZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgICQoJy5wcm9ncmFtc19fdGFic19fdGl0bGUnKS5yZW1vdmVDbGFzcygncHJvZ3JhbXNfX3RhYnNfX3RpdGxlLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCcucHJvZ3JhbS13cmFwJykucmVtb3ZlQ2xhc3MoJ3Byb2dyYW0td3JhcC0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncHJvZ3JhbXNfX3RhYnNfX3RpdGxlLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCcjJysgcHJvZ3JhbWlkKS5hZGRDbGFzcygncHJvZ3JhbS13cmFwLS1hY3RpdmUnKTtcclxuICAgICAgICB0YWJsZUhlaWdodEVxdWFsaXplcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9leHBhbmQgdm9jYWJ1bGFyeVxyXG4gICAgJCgnLnZvY2FidWxhcnlfX2V4cGFuZGVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcudm9jYWJ1bGFyeScpLnRvZ2dsZUNsYXNzKCd2b2NhYnVsYXJ5LS12aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3N1Ym1lbnVcclxuICAgICQoXCIubmF2LXByb2R1Y3RfX3RyaWdnZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy9NT0JJTEUgT1IgTk9UXHJcbiAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICAvL0lTIE9QRU4gT1IgTk9UXHJcbiAgICAgICAgICAgIGlmKCQoJy5tZW51LWV4cGFuZGVkJykuaGFzQ2xhc3MoJ21lbnUtZXhwYW5kZWQtLXllcycpKXtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykudG9nZ2xlQ2xhc3MoJ21lbnUtZXhwYW5kZWQtLXllcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbWFpbl9faW4sIC5uYXYtcHJvZHVjdF9fd3JhcCcpLnRvZ2dsZUNsYXNzKCctLXJldHJhY3QnKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2LW1haW5fX2luLCAubmF2LXByb2R1Y3RfX3dyYXAnKS50b2dnbGVDbGFzcygnLS1yZXRyYWN0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS50b2dnbGVDbGFzcygnbWVudS1leHBhbmRlZC0teWVzJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICQod2luZG93KS5vZmYoXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAkKFwiYm9keVwiKS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykudG9nZ2xlQ2xhc3MoJ21lbnUtZXhwYW5kZWQtLXllcycpO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5vbmUoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS5yZW1vdmVDbGFzcyhcIm1lbnUtZXhwYW5kZWQtLXllc1wiKTtcclxuICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbmUoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykucmVtb3ZlQ2xhc3MoXCJtZW51LWV4cGFuZGVkLS15ZXNcIik7XHJcbiAgICAgICAgICAgICAgJChcImJvZHlcIikub2ZmKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2V4cGFuZCBwcm9ncmFtIFNUQVJUXHJcbiAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX21vcmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCB0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICghdC5wYXJlbnQoKS5wcmV2KCkuZmluZCgnLnByb2dyYW0tZXhwYW5kZXInKS5oYXNDbGFzcygncHJvZ3JhbS1leHBhbmRlci0tdmlzaWJsZScpKSB7XHJcbiAgICAgICAgdC50ZXh0KCfOlM61zq/PhM61IM67zrnOs8+Mz4TOtc+BzrEnKTtcclxuICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNcIikuYWRkQ2xhc3MoJ2ZpeGl0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdC50ZXh0KCfOlM61zq/PhM61IM+AzrXPgc65z4PPg8+Mz4TOtc+BzrEnKTtcclxuICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNcIikucmVtb3ZlQ2xhc3MoJ2ZpeGl0Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCJzZWN0aW9uLnByb2dyYW1zXCIpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIHQucGFyZW50KCkucHJldigpLmZpbmQoJy5wcm9ncmFtLWV4cGFuZGVyJykudG9nZ2xlQ2xhc3MoJ3Byb2dyYW0tZXhwYW5kZXItLXZpc2libGUnKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBhbmQgcHJvZ3JhbSBFTkRcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2V4cGFuZCBwcm9ncmFtIFNUQVJUXHJcbiAgICBjb25zdCBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY292ZXJhZ2VfX2V4cGFuZGVyJyk7XHJcbiAgICBjb25zdCBjb3ZlcmFnZUV4cGFuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyYWdlX19hcmVhJyk7XHJcbiAgICBpZihjb3ZlcmFnZUV4cGFuZGVyICE9IG51bGwgJiYgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyICE9IG51bGwpIHtcclxuICAgICAgICBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcclxuICAgICAgICAgICAgY292ZXJhZ2VFeHBhbmRlci5jbGFzc0xpc3QudG9nZ2xlKFwiY292ZXJhZ2VfX2FyZWEtLWV4cGFuZGVkXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChjb3ZlcmFnZUV4cGFuZGVyLmNsYXNzTGlzdC5jb250YWlucygnY292ZXJhZ2VfX2FyZWEtLWV4cGFuZGVkJykpIFxyXG4gICAgICAgICAgICBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIuaW5uZXJIVE1MID0gJ86UzpXOmc6kzpUgzpvOmc6Tzp/OpM6VzqHOkSc7XHJcbiAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIuaW5uZXJIVE1MID0gJ86UzpXOmc6kzpUgzqDOlc6hzpnOo86jzp/OpM6VzqHOkSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vZXhwYW5kIGNvdmVyYWdlcyBFTkRcclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9ncmFtRXhwYW5kVHJpZ2dlck1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1ncmlkLXRhYmxlLWNlbGwtLWV4cGFuZGVyJyk7XHJcbiAgICBmb3IgKGNvbnN0IHByb2dyYW1UcmlnZ2VyIG9mIHByb2dyYW1FeHBhbmRUcmlnZ2VyTW9iaWxlKSB7XHJcblxyXG4gICAgICAgIHByb2dyYW1UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1FeHBhbmRlci5jbGFzc0xpc3QudG9nZ2xlKFwicHJvZ3JhbS1leHBhbmRlci0tdmlzaWJsZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpeC0xXCIpO1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpeC0yXCIpO1xyXG4gICAgaWYoaGVhZGVyICE9IG51bGwgJiYgbWVudSAhPSBudWxsKXtcclxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMgdGhlIHBhZ2UsIGV4ZWN1dGUgbXlGdW5jdGlvblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RpY2t5Rmlyc3QoKTtcclxuICAgICAgICAgICAgc3RpY2t5U2Vjb25kKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBoZWFkZXJcclxuICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gMDtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3ODApXHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXgtMScpLmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgIC8vaGVhZGVyLnN0eWxlLnNldFByb3BlcnR5KCctLWgxJywgaGVhZGVySGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICB2YXIgc3RpY2sxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZnRlci1zdGlja3ktMVwiKTtcclxuICAgICAgICBzdGljazEuc3R5bGUuc2V0UHJvcGVydHkoJy0tcDEnLCBoZWFkZXJIZWlnaHQgKyBcInB4XCIpO1xyXG5cclxuICAgICAgICB2YXIgbWVudUhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXgtMicpLmNsaWVudEhlaWdodDtcclxuICAgICAgICB2YXIgc3RpY2syID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZnRlci1zdGlja3ktMlwiKTtcclxuICAgICAgICBtZW51LnN0eWxlLnNldFByb3BlcnR5KCctLWgyJywgbWVudUhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3AnLCAoaGVhZGVySGVpZ2h0IC0gJChcIiNmaXgtMSAuaW50cm9fX3RleHRcIikuaGVpZ2h0KCkgLTM4KSArIFwicHhcIik7XHJcbiAgICAgICAgc3RpY2syLnN0eWxlLnNldFByb3BlcnR5KCctLXAyJywgbWVudUhlaWdodCArIFwicHhcIik7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHRoZSBuYXZiYXJcclxuICAgICAgICB2YXIgZWxlbWVudEZpcnN0RnJvbVRvcCA9IGhlYWRlci5vZmZzZXRUb3A7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRTZWNvbmRGcm9tVG9wID0gbWVudS5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0aWNreUZpcnN0KCkge1xyXG4gICAgICAgICAgICBpZiAoKHdpbmRvdy5wYWdlWU9mZnNldCA+IGVsZW1lbnRGaXJzdEZyb21Ub3ApKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RpY2t5U2Vjb25kKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IChlbGVtZW50U2Vjb25kRnJvbVRvcCAtIGhlYWRlckhlaWdodCkpIHtcclxuICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktc2Vjb25kXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1zZWNvbmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9ncmlkIGNhcm91c2VsIHN0YXJ0XHJcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWdyaWQtdGFibGVcIik7XHJcbiAgICBjb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1wcm9ncmFtLWxlZnRcIik7XHJcbiAgICBjb25zdCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvZ3JhbS1yaWdodFwiKTtcclxuICAgIHZhciBvcmRlciA9IDA7XHJcbiAgICAvLyAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmFtcy10YWJsZVwiKSAhPSBudWxsKVxyXG4gICAgICAgLy8gdmFyIHByb2dyYW1OdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyYW1zLXRhYmxlXCIpLmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgaWYgKGxlZnRCdXR0b24gIT0gbnVsbCAmJiByaWdodEJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBsaW1pdCA9ICQoJy5qcy1ncmlkLXRhYmxlJykuZmlyc3QoKS5maW5kKCcucHJvZ3JhbS5wcm9ncmFtLS12aXNpYmxlJykubGVuZ3RoIC0gMztcclxuICAgICAgcHJlcGFyZUJ1dHRvbnMoKTtcclxuXHJcbiAgICAgIC8vUklHSFQgQ0xJQ0tcclxuICAgICAgJChyaWdodEJ1dHRvbikudW5iaW5kKCkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgbGltaXQgPSAkKCcuanMtZ3JpZC10YWJsZScpLmZpcnN0KCkuZmluZCgnLnByb2dyYW0ucHJvZ3JhbS0tdmlzaWJsZScpLmxlbmd0aCAtIDM7XHJcbiAgICAgICAgaWYgKG9yZGVyIDwgbGltaXQpIHtcclxuICAgICAgICAgIG9yZGVyKys7XHJcblxyXG4gICAgICAgICAgJChjYXJvdXNlbHMpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIChvcmRlciAqICgtMjk2KSkgKyAncHgpJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHByZXBhcmVCdXR0b25zKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChsZWZ0QnV0dG9uKS51bmJpbmQoKS5vbignY2xpY2snLCBfID0+IHtcclxuICAgICAgICBsaW1pdCA9ICQoJy5qcy1ncmlkLXRhYmxlJykuZmlyc3QoKS5maW5kKCcucHJvZ3JhbS5wcm9ncmFtLS12aXNpYmxlJykubGVuZ3RoIC0gMztcclxuICAgICAgICBpZiAob3JkZXIgPiAwKSB7XHJcbiAgICAgICAgICAtLW9yZGVyO1xyXG5cclxuICAgICAgICAgICQoY2Fyb3VzZWxzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAob3JkZXIgKiAoLTI5NikpICsgJ3B4KScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXBhcmVCdXR0b25zKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcHJlcGFyZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgKG9yZGVyIDwgbGltaXQpID8gJChyaWdodEJ1dHRvbikucmVtb3ZlQ2xhc3MoXCJub1wiKSA6ICQocmlnaHRCdXR0b24pLmFkZENsYXNzKFwibm9cIik7XHJcbiAgICAgICAgKG9yZGVyID4gMCkgPyAkKGxlZnRCdXR0b24pLnJlbW92ZUNsYXNzKFwibm9cIikgOiAkKGxlZnRCdXR0b24pLmFkZENsYXNzKFwibm9cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZ3JpZCBjYXJvdXNlbCBlbmRcclxuXHJcbiAgICAvL3N5bmMgc2Nyb2xsIG9mIHdpbmRvd3MgU1RBUlRcclxuICAgIHZhciBzY3JvbGxlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdncmlkLXRhYmxlLXdpbmRvdycpO1xyXG5cclxuICAgIHZhciBzY3JvbGxlckRpdnMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoc2Nyb2xsZXJzLCBmdW5jdGlvbih0ZXN0RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0ZXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ0RJVic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxBbGwoc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgIHNjcm9sbGVyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbGVyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzY3JvbGxBbGwoZS50YXJnZXQuc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vc3luYyBzY3JvbGwgb2Ygd2luZG93cyBFTkRcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2ZpbHRlcmluZyBpbiBwcm9kdWN0c1xyXG4gICAgY29uc3QgZmlsdGVyVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX190cmlnZ2VyXCIpO1xyXG4gICAgY29uc3QgZmlsdGVyUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19yZXN1bHRzXCIpO1xyXG5cclxuICAgIGlmIChmaWx0ZXJUcmlnZ2VyICE9IG51bGwgJiYgZmlsdGVyUmVzdWx0cyAhPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAkKFwiLmZpbHRlcl9fdHJpZ2dlclwiKS5vbignY2xpY2snLCBfID0+IHtcclxuICAgICAgICAgICQoXCIuZmlsdGVyX19yZXN1bHRzXCIpLnRvZ2dsZUNsYXNzKFwiZmlsdGVyX19yZXN1bHRzLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgJChcImJvZHlcIikub2ZmKFwiY2xpY2tcIik7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLm9uZShcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcuZmlsdGVyX19yZXN1bHRzJykucmVtb3ZlQ2xhc3MoXCJmaWx0ZXJfX3Jlc3VsdHMtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbmUoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQoJy5maWx0ZXJfX3Jlc3VsdHMnKS5yZW1vdmVDbGFzcyhcImZpbHRlcl9fcmVzdWx0cy0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5maWx0ZXJfX3Jlc3VsdHMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8qY29uc3QgZmlsdGVyQ2xpY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2l0ZW0gaW5wdXRcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXJDbGljayBvZiBmaWx0ZXJDbGlja3MpIHtcclxuICAgICAgICAgICAgZmlsdGVyQ2xpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5wcm9ncmFtJykucmVtb3ZlQ2xhc3MoXCJwcm9ncmFtLS12aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlcl9faXRlbSBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy9sb29waW5nIGNoZWNrZWQgdmFsdWVzIGFuZCBhZGRpbmcgdG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUF0dHIgPSBjaGVja2JveC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKGRhdGFBdHRyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2dyYW0nKS5yZW1vdmVDbGFzcyhcInByb2dyYW0tLXZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3JhbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3JhbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZ3JhbSBvZiBwcm9ncmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3JhbUFjdGl2ZSA9IG5ldyBCb29sZWFuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyYW1EYXRhcyA9IHByb2dyYW0uZGF0YXNldC5jaGFyYWN0ZXJpc3RpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0dW0gb2YgZGF0YXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3JhbURhdGFzLmluY2x1ZGVzKGRhdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW1BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmFtQWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNsYXNzTGlzdC5hZGQoJ3Byb2dyYW0tLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmFtQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBwcm9ncmFtLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2dyYW0tLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgJCgnLnByb2dyYW0nKS5hZGRDbGFzcyhcInByb2dyYW0tLXZpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuXHJcbiAgICAvL0VNUEFORCBQUk9HUkFNUyBTVEFSVFNcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2pzIGRyb3AgaXRlbSBzdGFydFxyXG4gICAgY29uc3QgZHJvcEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zZWxlY3RlZC1pdGVtXCIpO1xyXG5cclxuICAgIGlmIChkcm9wSXRlbXMgIT0gbnVsbCkge1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGRyb3BJdGVtIG9mIGRyb3BJdGVtcykge1xyXG5cclxuICAgICAgICAgICAgZHJvcEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQ2xhc3NlcygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcEl0ZW0uZGF0YXNldC52YWx1ZSkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtY29udGVudC0tdmlzaWJsZScpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQtY29udGVudC0tdmlzaWJsZScpO1xyXG4gICAgZnVuY3Rpb24gX3JlbW92ZUNsYXNzZXMoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWNvbnRlbnQtLXZpc2libGUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vanMgZHJvcCBpdGVtIGVuZFxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaG9yU2Nyb2xsKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zY3JvbGwtaXRlbXMnKTtcclxuICAgICAgICBsZXQgaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHN0YXJ0WDtcclxuICAgICAgICBsZXQgc2Nyb2xsTGVmdDtcclxuXHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlzRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgc3RhcnRYID0gZS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2xpZGVyLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFpc0Rvd24pIHJldHVybjtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB3YWxrID0gKHggLSBzdGFydFgpICogMzsgLy9zY3JvbGwtZmFzdFxyXG4gICAgICAgICAgICBzbGlkZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xyXG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHdhbGspO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIGZ1bmN0aW9uIGN1c3RvbVJhZGlvQnV0dG9ucygpIHtcclxuICAgIGlmICgkKFwiaW5wdXRbdHlwZT1yYWRpb11cIikubGVuZ3RoIHx8ICQoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5sZW5ndGgpIHtcclxuXHJcbiAgICAgIHZhciAkdGFyZ2V0ID0gJChcImlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuXHJcbiAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKCdhY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5hZnRlcihcIjxsYWJlbD48L2xhYmVsPlwiKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJjdXJzb3ItcG9pbnRlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWdoTGlnaHRMYWJlbCgpe1xyXG4gICAgICAgICR0YXJnZXQgPSAkKCBcIi5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgLmZvcm0gaW5wdXRbdHlwZT0nZW1haWwnXSwgLmZvcm0gaW5wdXRbdHlwZT0ndGVsJ10sIC5mb3JtIHRleHRhcmVhXCIgKTtcclxuICAgICAgICAkdGFyZ2V0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRleHRfdmFsdWU9JCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgaWYodGV4dF92YWx1ZSAhPSAnJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0nKS5hZGRDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbS1zdGF0aWMnKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHRhcmdldC5iaW5kKCdibHVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoICEkKHRoaXMpLnZhbCgpIHx8ICQodGhpcykuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS52YWwoKSlcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0nKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtLXN0YXRpYycpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICR0YXJnZXQuYmluZCgnZm9jdXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiggISQodGhpcykudmFsKCkgfHwgJCh0aGlzKS5oYXNDbGFzcygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0nKS5hZGRDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbS1zdGF0aWMnKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VzaW5nIGFuIGluc3RlcnNlY3Rpb24gb2JzZXJ2ZXIgZm9yIHByb2R1Y3QgU1RBUlRcclxuXHJcbiAgICBpZiAoISQoJy5qcy1zdG9wLW9ic2VydmVyJykpIHtcclxuICAgICAgJCgnc2VjdGlvbltpZF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB0aGlzSUQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdyZWxhdG9yJykuYXR0cihcImlkXCIsIFwiXCIpLnByZXBlbmQoXCI8ZGl2IGNsYXNzPSdzaWducG9zdCBhbmNob3ItMjAwJyBpZD1cIiArIHRoaXNJRCArIFwiPjwvZGl2PlwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBpbml0IHRoZSBvYnNlcnZlclxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuMTVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNpbXBsZSBmdW5jdGlvbiB0byB1c2UgZm9yIGNhbGxiYWNrIGluIHRoZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXJcclxuICAgICAgICBjb25zdCBjaGFuZ2VOYXYgPSAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAvLyB2ZXJpZnkgdGhlIGVsZW1lbnQgaXMgaW50ZXJzZWN0aW5nXHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgb2xkIGFjdGl2ZSBjbGFzc1xyXG4gICAgICAgICAgICAgICQoJy5hY2hvcmxpc3RfX2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY2hvcmxpc3RfX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIC8vIGdldCBpZCBvZiB0aGUgaW50ZXJzZWN0aW5nIHNlY3Rpb25cclxuICAgICAgICAgICAgICB2YXIgaWQgPSAkKGVudHJ5LnRhcmdldCkuZmluZCgnLnNpZ25wb3N0JykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGxpbmsgJiBhZGQgYXBwcm9wcmlhdGUgY2xhc3NcclxuICAgICAgICAgICAgICAkKCdbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjaG9ybGlzdF9fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2hhbmdlTmF2LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gdGFyZ2V0IHRoZSBlbGVtZW50cyB0byBiZSBvYnNlcnZlZFxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZ25wb3N0Jyk7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXNpbmcgYW4gaW5zdGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgcHJvZHVjdCBFTkRcclxuXHJcbiAgICAvL1RBQkxFIEhFSUdIVCBFUVVBTElaRVJcclxuICAgIGZ1bmN0aW9uIHRhYmxlSGVpZ2h0RXF1YWxpemVyKCkge1xyXG4gICAgICAkKFwiLmdyaWQtdGFibGUtY2VsbFwiKS5hdHRyKFwic3R5bGVcIiwgXCJcIik7XHJcblxyXG4gICAgICAkKFwiLnByb2dyYW0tZ3JpZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gJCh0aGlzKTtcclxuICAgICAgICBjb25zdCBob3dtYW55ID0gJCh0aGlzKS5maW5kKFwiLnByb2dyYW0tYXR0cmlidXRlcyAuZ3JpZC10YWJsZS1jZWxsXCIpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy9DVVQgRVhQQU5ERUQgVEFCTEUgV0lEVEggSU4gQ0FTRSBPRiAyIENPTFVNTlNcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTAyNClcclxuICAgICAgICAgIGlmICgkKGdyaWQpLmhhc0NsYXNzKFwicHJvZ3JhbS1ncmlkLTJcIikpXHJcbiAgICAgICAgICAgICQoZ3JpZCkucGFyZW50KCkuY3NzKHsgXCJ3aWR0aFwiIDogXCI4MDBweFwiLCBcIm92ZXJmbG93XCIgOiBcImhpZGRlblwiIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGlmICgkKGdyaWQpLmhhc0NsYXNzKFwicHJvZ3JhbS1ncmlkLTFcIikpIFxyXG4gICAgICAgICAgICAkKGdyaWQpLnBhcmVudCgpLmNzcyh7IFwid2lkdGhcIjogXCI1MjBweFwiLCBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG93bWFueTsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICAgICAgICAvL0ZJTkQgVEhFIE1BWCBQRVIgUk9XXHJcbiAgICAgICAgICAkKGdyaWQpLmZpbmQoXCIuZ3JpZC10YWJsZS1jb2x1bW5cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZChcIi5ncmlkLXRhYmxlLWNlbGxcIikuZXEoaSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGVpZ2h0KCkgPiBtYXgpXHJcbiAgICAgICAgICAgICAgICBtYXggPSAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9TRVQgRklYRUQgSEVJR0hUXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAkKHRoaXMpLmZpbmQoXCIuZ3JpZC10YWJsZS1jZWxsXCIpLmVxKGkpLmhlaWdodChtYXggKyBcInB4XCIpOyB9LCA1MDApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxufSkoalF1ZXJ5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMTEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
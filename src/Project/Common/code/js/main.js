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
    $programid = $(this).attr('data-id');
    $('.programs__tabs__title').removeClass('programs__tabs__title--active');
    $('.program-wrap').removeClass('program-wrap--active');
    $(this).addClass('programs__tabs__title--active');
    $('#' + $programid).addClass('program-wrap--active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkQ2xhc3MiLCJpc0lFMTEiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsImVhY2giLCJmaW5kIiwibGVuZ3RoIiwiJGNvbnRhaW5lciIsImltZ1VybCIsInByb3AiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjc3MiLCJwYXJlbnQiLCJpbWFnZSIsImZpcnN0IiwiaHJlZiIsImF0dHIiLCJ3cmFwIiwiZHJvcGxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3BsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJtZW51U3dpdGNoIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJyZW1vdmUiLCJyZWFkeSIsIm9uIiwic2Nyb2xsZWQiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJidHQiLCJyZW1vdmVDbGFzcyIsInByb2dyYW1Ub3AiLCJvZmZzZXQiLCJ0b3AiLCJwcm9ncmFtQm90dG9tIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlIiwid2lkdGgiLCJjbGljayIsInByZXZlbnREZWZhdWx0Iiwic2libGluZ3MiLCJ0b2dnbGVDbGFzcyIsInNlYXJjaFN3aXRjaCIsInNlYXJjaENsb3NlIiwiY3VzdG9tUmFkaW9CdXR0b25zIiwidCIsImNoaWxkcmVuIiwic2VsZWN0MiIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiaGlnaExpZ2h0TGFiZWwiLCJob3JTY3JvbGxJdGVtcyIsImhvclNjcm9sbCIsInd3IiwiaW5uZXJXaWR0aCIsInNsaWNrIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsIm1vYmlsZUZpcnN0IiwicHJldmVudENhcHRpb25PdmVybGFwIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbmRUbyIsInZhcmlhYmxlV2lkdGgiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJmYW5jeWJveCIsInRodW1icyIsImF1dG9TdGFydCIsImFycm93cyIsImZhZGUiLCIkcGFnZXIiLCJlYXNlIiwibGF6eUxvYWQiLCJhcHBlbmREb3RzIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiaSIsIml0ZW0iLCJpbm5lckhUTUwiLCJydGwiLCJhc05hdkZvciIsInRhYmxlSGVpZ2h0RXF1YWxpemVyIiwia2V5ZG93biIsImtleUNvZGUiLCIkcHJvZ3JhbWlkIiwiaGFzQ2xhc3MiLCJzZXRUaW1lb3V0Iiwib2ZmIiwib25lIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldiIsInRleHQiLCJjb3ZlcmFnZUV4cGFuZFRyaWdnZXIiLCJjb3ZlcmFnZUV4cGFuZGVyIiwiY29udGFpbnMiLCJwcm9ncmFtRXhwYW5kVHJpZ2dlck1vYmlsZSIsInByb2dyYW1UcmlnZ2VyIiwicHJvZ3JhbUV4cGFuZGVyIiwiaGVhZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Iiwib25zY3JvbGwiLCJzdGlja3lGaXJzdCIsInN0aWNreVNlY29uZCIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0aWNrMSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJtZW51SGVpZ2h0Iiwic3RpY2syIiwiZWxlbWVudEZpcnN0RnJvbVRvcCIsIm9mZnNldFRvcCIsImVsZW1lbnRTZWNvbmRGcm9tVG9wIiwicGFnZVlPZmZzZXQiLCJhZGQiLCJjYXJvdXNlbHMiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJvcmRlciIsImxpbWl0IiwicHJlcGFyZUJ1dHRvbnMiLCJ1bmJpbmQiLCJzY3JvbGxlcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsZXJEaXZzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGVzdEVsZW1lbnQiLCJub2RlTmFtZSIsInNjcm9sbEFsbCIsInNjcm9sbExlZnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYXJyYXkiLCJ0YXJnZXQiLCJmaWx0ZXJUcmlnZ2VyIiwiZmlsdGVyUmVzdWx0cyIsImRyb3BJdGVtcyIsImRyb3BJdGVtIiwiX3JlbW92ZUNsYXNzZXMiLCJkYXRhc2V0IiwidmFsdWUiLCJlbHMiLCJpc0Rvd24iLCJzdGFydFgiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJ4Iiwid2FsayIsIiR0YXJnZXQiLCJhZnRlciIsInRleHRfdmFsdWUiLCJ2YWwiLCJwYXJlbnRzIiwiYmluZCIsInRoaXNJRCIsInByZXBlbmQiLCJvcHRpb25zIiwidGhyZXNob2xkIiwiY2hhbmdlTmF2IiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9ic2VydmUiLCJwYXJlbnRFbGVtZW50IiwiZ3JpZCIsImhvd21hbnkiLCJtYXgiLCJlcSIsIm91dGVySGVpZ2h0IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gIFxyXG4gICAgaWYgKCEoXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby10b3VjaCcpO1xyXG4gICAgfVxyXG5cclxuICB2YXIgaXNJRTExID0gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcbiAgaWYgKGlzSUUxMSkge1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XHJcblxyXG4gICAgJCgnLmhlcm8tcGxhaW4sIC5oZXJvJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5qcy1oZXJvLXNsaWRlcicpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyICRjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJ3BpY3R1cmUnKSxcclxuICAgICAgICBpbWdVcmwgPSAkY29udGFpbmVyLmZpbmQoJ2ltZycpLnByb3AoJ3NyYycpLFxyXG4gICAgICAgIGltZ0hlaWdodCA9ICRjb250YWluZXIuZmluZCgnaW1nJykuaGVpZ2h0KCk7XHJcbiAgICBcclxuICAgICAgaWYgKGltZ1VybCkge1xyXG4gICAgICAgICRjb250YWluZXJcclxuICAgICAgICAgIC5jc3MoJ2JhY2tncm91bmRJbWFnZScsICd1cmwoJyArIGltZ1VybCArICcpJylcclxuICAgICAgICAgIC5hZGRDbGFzcygnY3Jvc3Mtb2JqZWN0LWZpdCcpO1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLnBhcmVudCgnLmhlcm8nKS5jc3MoJ2hlaWdodCcsIGltZ0hlaWdodCArICdweCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubGlzdC1ncmlkIGFydGljbGUsIC5saXN0LS1hcnRpY2xlX19pbWFnZSwgLmxpc3QtYXhpcyA+IGFydGljbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5maW5kKCdpbWcnKS5maXJzdCgpO1xyXG4gICAgICB2YXIgaHJlZiA9IGltYWdlLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgaW1hZ2UuY3NzKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgICAgIC53cmFwKCc8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOnVybCgnICsgaHJlZiArICcpIGNlbnRlciBuby1yZXBlYXRcIj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG4gIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIGNvbnN0IGRyb3BsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wbGlzdCcpO1xyXG4gICAgaWYoZHJvcGxpc3RzICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBkcm9wbGlzdCBvZiBkcm9wbGlzdHMpIHtcclxuICAgICAgICAgICAgZHJvcGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcclxuICAgICAgICAgICAgICAgIGRyb3BsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3BsaXN0LS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lbnVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWVudS1zd2l0Y2gnKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgaWYobWVudVN3aXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgbWVudVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgY29uc3QgYnR0ID0gJCgnI2JhY2stdG8tdG9wJyk7XHJcblxyXG4gICAgICAgICAgLy9TQ1JPTEwgVE8gVE9QXHJcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPiB3aW5kb3dIZWlnaHQpXHJcbiAgICAgICAgICAgICQoYnR0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQoYnR0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgLy9QUk9HUkFNIENPTlRST0xTIEZJWEVEXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLnByb2dyYW1zJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1Ub3AgPSAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICBjb25zdCBwcm9ncmFtQm90dG9tID0gJCgnLnByb2dyYW0tZ3JpZCcpLnBhcmVudCgnZGl2OnZpc2libGUnKS5vZmZzZXQoKS50b3AgKyAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc2Nyb2xsZWQgKyB3aW5kb3dIZWlnaHQgPiBwcm9ncmFtVG9wICYmIHNjcm9sbGVkICsgd2luZG93SGVpZ2h0IDwgcHJvZ3JhbUJvdHRvbSlcclxuICAgICAgICAgICAgICAgICQoJy5wcm9ncmFtLWNvbnRyb2xzJykuYWRkQ2xhc3MoJ2ZpeGl0Jyk7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJCgnLnByb2dyYW0tY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZml4aXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2JhY2stdG8tdG9wJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vTVVURSBMSU5LUyBXSVRIIFwiI1wiIEhSRUYgQVRUUklCVVRFXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xyXG4gICAgICAgICAgJCgnaGVhZGVyIGxpLnN1Ymxpc3RlZCA+IGEgc3BhbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncyhcIi5zdWJsaXN0XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hTd2l0Y2ggPSAkKCcuanMtc2VhcmNoLXN3aXRjaCcpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaENsb3NlID0gJCgnLmpzLXNlYXJjaC1jbG9zZScpO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoU3dpdGNoICE9IG51bGwgJiYgc2VhcmNoQ2xvc2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgJChzZWFyY2hTd2l0Y2gpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoc2VhcmNoQ2xvc2UpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9DVVNUT00gUkFESU8gQlVUVE9OU1xyXG4gICAgICBjdXN0b21SYWRpb0J1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgLy9GSVhFU1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoJChcIi5wcm9ncmFtLWdyaWRcIikubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX21vcmVcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcIi5ncmlkLXRhYmxlLXdpbmRvd1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5maW5kKFwiLmdyaWQtdGFibGUtY29sdW1uXCIpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX2xlZnRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzX19yaWdodFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKCQoXCIuY292ZXJhZ2VzXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLmNvdmVyYWdlX195ZXMgPiB1bFwiKS5jaGlsZHJlbihcImxpXCIpLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgJChcIi5jb3ZlcmFnZV9fYXJlYVwiKS5hZGRDbGFzcyhcImNvdmVyYWdlX19hcmVhLS1leHBhbmRlZFwiKTtcclxuICAgICAgICAgICAgICAkKFwiLmpzLWNvdmVyYWdlX19leHBhbmRlclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigkKCdzZWxlY3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYoJCgnLmZvcm0nKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBoaWdoTGlnaHRMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaG9yU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwianMtc2Nyb2xsLWl0ZW1zXCIpO1xyXG4gICAgICAgIGlmKGhvclNjcm9sbEl0ZW1zICE9IG51bGwpIGhvclNjcm9sbCgpO1xyXG5cclxuICAgICAgICBjb25zdCB3dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHJcbiAgICAgICAgLy9nYWxsZXJ5IGNhcm91c2VsIHN0YXJ0XHJcbiAgICAgICAgaWYgKCQoJy5qcy1nYWxsZXJ5JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8qZ2FsbGVyeSBzbGljayovXHJcbiAgICAgICAgICAgICQoJy5qcy1nYWxsZXJ5Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50Q2FwdGlvbk92ZXJsYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnbWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLmdhbGxlcnktcHJldicpLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKCcuZ2FsbGVyeS1uZXh0JylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1mYW5jeWJveD1cImdhbGxlcnlcIl0nKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICB0aHVtYnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0IDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoJCgnLmpzLXNpbXBsZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLmpzLXNpbXBsZS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAkKCcuc2xpY2stcHJldicpLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKCcuc2xpY2stbmV4dCcpXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgaWYgKCQoJy5qcy1oZXJvLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgJHBhZ2VyID0gJCgnLmpzLWN1c3RvbS1kb3RzIHNwYW4nKTtcclxuICAgICAgICAgICAgJCgnLmpzLWhlcm8tc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlYXNlIDogJ1BvdzQuZWFzZUluJyxcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJCgnLmdyb3VwaW5nLWRvdHMnKSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJHBhZ2VyW2ldLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxhPicgKyBpdGVtICsgJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL2xlYWRlcnNoaXAgY2Fyb3VzZWwgc3RhcnRcclxuICAgICAgICBpZiAoJCgnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLWltYWdlJykubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItaW1hZ2UnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBydGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLXRleHQnLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItdGV4dCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogJy5qcy1sZWFkZXJzaGlwLXNsaWRlci1pbWFnZScsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQoJy5zbGljay1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5zbGljay1uZXh0JylcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy9DQUxMIFRBQkxFIEVRVUFMSVpFUlxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCQoJy5wcm9ncmFtcycpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgdGFibGVIZWlnaHRFcXVhbGl6ZXIoKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNykgey8vZXNjXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvZ3JhbXNfX3RhYnNfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkcHJvZ3JhbWlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgJCgnLnByb2dyYW1zX190YWJzX190aXRsZScpLnJlbW92ZUNsYXNzKCdwcm9ncmFtc19fdGFic19fdGl0bGUtLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5wcm9ncmFtLXdyYXAnKS5yZW1vdmVDbGFzcygncHJvZ3JhbS13cmFwLS1hY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwcm9ncmFtc19fdGFic19fdGl0bGUtLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJyMnKyRwcm9ncmFtaWQpLmFkZENsYXNzKCdwcm9ncmFtLXdyYXAtLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhYmxlSGVpZ2h0RXF1YWxpemVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2V4cGFuZCB2b2NhYnVsYXJ5XHJcbiAgICAkKCcudm9jYWJ1bGFyeV9fZXhwYW5kZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy52b2NhYnVsYXJ5JykudG9nZ2xlQ2xhc3MoJ3ZvY2FidWxhcnktLXZpc2libGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc3VibWVudVxyXG4gICAgJChcIi5uYXYtcHJvZHVjdF9fdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAvL01PQklMRSBPUiBOT1RcclxuICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIC8vSVMgT1BFTiBPUiBOT1RcclxuICAgICAgICAgICAgaWYoJCgnLm1lbnUtZXhwYW5kZWQnKS5oYXNDbGFzcygnbWVudS1leHBhbmRlZC0teWVzJykpe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS50b2dnbGVDbGFzcygnbWVudS1leHBhbmRlZC0teWVzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1tYWluX19pbiwgLm5hdi1wcm9kdWN0X193cmFwJykudG9nZ2xlQ2xhc3MoJy0tcmV0cmFjdCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYtbWFpbl9faW4sIC5uYXYtcHJvZHVjdF9fd3JhcCcpLnRvZ2dsZUNsYXNzKCctLXJldHJhY3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnRvZ2dsZUNsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS50b2dnbGVDbGFzcygnbWVudS1leHBhbmRlZC0teWVzJyk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLm9uZShcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnJlbW92ZUNsYXNzKFwibWVudS1leHBhbmRlZC0teWVzXCIpO1xyXG4gICAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uZShcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLm1lbnUtZXhwYW5kZWQnKS5yZW1vdmVDbGFzcyhcIm1lbnUtZXhwYW5kZWQtLXllc1wiKTtcclxuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vZXhwYW5kIHByb2dyYW0gU1RBUlRcclxuICAgICQoXCIucHJvZ3JhbS1jb250cm9sc19fbW9yZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHQgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgaWYgKCF0LnBhcmVudCgpLnByZXYoKS5maW5kKCcucHJvZ3JhbS1leHBhbmRlcicpLmhhc0NsYXNzKCdwcm9ncmFtLWV4cGFuZGVyLS12aXNpYmxlJykpIHtcclxuICAgICAgICB0LnRleHQoJ86UzrXOr8+EzrUgzrvOuc6zz4zPhM61z4HOsScpO1xyXG4gICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc1wiKS5hZGRDbGFzcygnZml4aXQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0LnRleHQoJ86UzrXOr8+EzrUgz4DOtc+BzrnPg8+Dz4zPhM61z4HOsScpO1xyXG4gICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc1wiKS5yZW1vdmVDbGFzcygnZml4aXQnKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcInNlY3Rpb24ucHJvZ3JhbXNcIikub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgdC5wYXJlbnQoKS5wcmV2KCkuZmluZCgnLnByb2dyYW0tZXhwYW5kZXInKS50b2dnbGVDbGFzcygncHJvZ3JhbS1leHBhbmRlci0tdmlzaWJsZScpO1xyXG4gICAgfSk7XHJcbiAgICAvL2V4cGFuZCBwcm9ncmFtIEVORFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vZXhwYW5kIHByb2dyYW0gU1RBUlRcclxuICAgIGNvbnN0IGNvdmVyYWdlRXhwYW5kVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3ZlcmFnZV9fZXhwYW5kZXInKTtcclxuICAgIGNvbnN0IGNvdmVyYWdlRXhwYW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXJhZ2VfX2FyZWEnKTtcclxuICAgIGlmKGNvdmVyYWdlRXhwYW5kZXIgIT0gbnVsbCAmJiBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvdmVyYWdlRXhwYW5kVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBjb3ZlcmFnZUV4cGFuZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb3ZlcmFnZV9fYXJlYS0tZXhwYW5kZWRcIik7XHJcblxyXG4gICAgICAgICAgaWYgKGNvdmVyYWdlRXhwYW5kZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3ZlcmFnZV9fYXJlYS0tZXhwYW5kZWQnKSkgXHJcbiAgICAgICAgICAgIGNvdmVyYWdlRXhwYW5kVHJpZ2dlci5pbm5lckhUTUwgPSAnzpTOlc6ZzqTOlSDOm86ZzpPOn86kzpXOoc6RJztcclxuICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIGNvdmVyYWdlRXhwYW5kVHJpZ2dlci5pbm5lckhUTUwgPSAnzpTOlc6ZzqTOlSDOoM6VzqHOmc6jzqPOn86kzpXOoc6RJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBjb3ZlcmFnZUV4cGFuZFRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9leHBhbmQgY292ZXJhZ2VzIEVORFxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHByb2dyYW1FeHBhbmRUcmlnZ2VyTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWdyaWQtdGFibGUtY2VsbC0tZXhwYW5kZXInKTtcclxuICAgIGZvciAoY29uc3QgcHJvZ3JhbVRyaWdnZXIgb2YgcHJvZ3JhbUV4cGFuZFRyaWdnZXJNb2JpbGUpIHtcclxuXHJcbiAgICAgICAgcHJvZ3JhbVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcclxuICAgICAgICAgICAgcHJvZ3JhbUV4cGFuZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9ncmFtLWV4cGFuZGVyLS12aXNpYmxlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml4LTFcIik7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml4LTJcIik7XHJcbiAgICBpZihoZWFkZXIgIT0gbnVsbCAmJiBtZW51ICE9IG51bGwpe1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0aGUgcGFnZSwgZXhlY3V0ZSBteUZ1bmN0aW9uXHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGlja3lGaXJzdCgpO1xyXG4gICAgICAgICAgICBzdGlja3lTZWNvbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGhlYWRlclxyXG4gICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAwO1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc4MClcclxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpeC0xJykuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgLy9oZWFkZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0taDEnLCBoZWFkZXJIZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgICAgIHZhciBzdGljazEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyLXN0aWNreS0xXCIpO1xyXG4gICAgICAgIHN0aWNrMS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wMScsIGhlYWRlckhlaWdodCArIFwicHhcIik7XHJcblxyXG4gICAgICAgIHZhciBtZW51SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpeC0yJykuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBzdGljazIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyLXN0aWNreS0yXCIpO1xyXG4gICAgICAgIG1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJy0taDInLCBtZW51SGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICBtZW51LnN0eWxlLnNldFByb3BlcnR5KCctLXRvcCcsIChoZWFkZXJIZWlnaHQgLSAkKFwiI2ZpeC0xIC5pbnRyb19fdGV4dFwiKS5oZWlnaHQoKSAtMzgpICsgXCJweFwiKTtcclxuICAgICAgICBzdGljazIuc3R5bGUuc2V0UHJvcGVydHkoJy0tcDInLCBtZW51SGVpZ2h0ICsgXCJweFwiKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBvZmZzZXQgcG9zaXRpb24gb2YgdGhlIG5hdmJhclxyXG4gICAgICAgIHZhciBlbGVtZW50Rmlyc3RGcm9tVG9wID0gaGVhZGVyLm9mZnNldFRvcDtcclxuICAgICAgICB2YXIgZWxlbWVudFNlY29uZEZyb21Ub3AgPSBtZW51Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RpY2t5Rmlyc3QoKSB7XHJcbiAgICAgICAgICAgIGlmICgod2luZG93LnBhZ2VZT2Zmc2V0ID4gZWxlbWVudEZpcnN0RnJvbVRvcCkpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGlja3lTZWNvbmQoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gKGVsZW1lbnRTZWNvbmRGcm9tVG9wIC0gaGVhZGVySGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInN0aWNreS1zZWNvbmRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXNlY29uZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2dyaWQgY2Fyb3VzZWwgc3RhcnRcclxuICAgIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtZ3JpZC10YWJsZVwiKTtcclxuICAgIGNvbnN0IGxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXByb2dyYW0tbGVmdFwiKTtcclxuICAgIGNvbnN0IHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1wcm9ncmFtLXJpZ2h0XCIpO1xyXG4gICAgdmFyIG9yZGVyID0gMDtcclxuICAgIC8vICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyYW1zLXRhYmxlXCIpICE9IG51bGwpXHJcbiAgICAgICAvLyB2YXIgcHJvZ3JhbU51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3JhbXMtdGFibGVcIikuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICBpZiAobGVmdEJ1dHRvbiAhPSBudWxsICYmIHJpZ2h0QnV0dG9uICE9IG51bGwpIHtcclxuICAgICAgbGV0IGxpbWl0ID0gJCgnLmpzLWdyaWQtdGFibGUnKS5maXJzdCgpLmZpbmQoJy5wcm9ncmFtLnByb2dyYW0tLXZpc2libGUnKS5sZW5ndGggLSAzO1xyXG4gICAgICBwcmVwYXJlQnV0dG9ucygpO1xyXG5cclxuICAgICAgLy9SSUdIVCBDTElDS1xyXG4gICAgICAkKHJpZ2h0QnV0dG9uKS51bmJpbmQoKS5vbignY2xpY2snLCBfID0+IHtcclxuICAgICAgICBsaW1pdCA9ICQoJy5qcy1ncmlkLXRhYmxlJykuZmlyc3QoKS5maW5kKCcucHJvZ3JhbS5wcm9ncmFtLS12aXNpYmxlJykubGVuZ3RoIC0gMztcclxuICAgICAgICBpZiAob3JkZXIgPCBsaW1pdCkge1xyXG4gICAgICAgICAgb3JkZXIrKztcclxuXHJcbiAgICAgICAgICAkKGNhcm91c2VscykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKG9yZGVyICogKC0yOTYpKSArICdweCknKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcHJlcGFyZUJ1dHRvbnMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKGxlZnRCdXR0b24pLnVuYmluZCgpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgIGxpbWl0ID0gJCgnLmpzLWdyaWQtdGFibGUnKS5maXJzdCgpLmZpbmQoJy5wcm9ncmFtLnByb2dyYW0tLXZpc2libGUnKS5sZW5ndGggLSAzO1xyXG4gICAgICAgIGlmIChvcmRlciA+IDApIHtcclxuICAgICAgICAgIC0tb3JkZXI7XHJcblxyXG4gICAgICAgICAgJChjYXJvdXNlbHMpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIChvcmRlciAqICgtMjk2KSkgKyAncHgpJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlcGFyZUJ1dHRvbnMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBwcmVwYXJlQnV0dG9ucygpIHtcclxuICAgICAgICAob3JkZXIgPCBsaW1pdCkgPyAkKHJpZ2h0QnV0dG9uKS5yZW1vdmVDbGFzcyhcIm5vXCIpIDogJChyaWdodEJ1dHRvbikuYWRkQ2xhc3MoXCJub1wiKTtcclxuICAgICAgICAob3JkZXIgPiAwKSA/ICQobGVmdEJ1dHRvbikucmVtb3ZlQ2xhc3MoXCJub1wiKSA6ICQobGVmdEJ1dHRvbikuYWRkQ2xhc3MoXCJub1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9ncmlkIGNhcm91c2VsIGVuZFxyXG5cclxuICAgIC8vc3luYyBzY3JvbGwgb2Ygd2luZG93cyBTVEFSVFxyXG4gICAgdmFyIHNjcm9sbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyaWQtdGFibGUtd2luZG93Jyk7XHJcblxyXG4gICAgdmFyIHNjcm9sbGVyRGl2cyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChzY3JvbGxlcnMsIGZ1bmN0aW9uKHRlc3RFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRlc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnRElWJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEFsbChzY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgc2Nyb2xsZXJEaXZzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsZXJEaXZzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEFsbChlLnRhcmdldC5zY3JvbGxMZWZ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy9zeW5jIHNjcm9sbCBvZiB3aW5kb3dzIEVORFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vZmlsdGVyaW5nIGluIHByb2R1Y3RzXHJcbiAgICBjb25zdCBmaWx0ZXJUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3RyaWdnZXJcIik7XHJcbiAgICBjb25zdCBmaWx0ZXJSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3Jlc3VsdHNcIik7XHJcblxyXG4gICAgaWYgKGZpbHRlclRyaWdnZXIgIT0gbnVsbCAmJiBmaWx0ZXJSZXN1bHRzICE9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICQoXCIuZmlsdGVyX190cmlnZ2VyXCIpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgJChcIi5maWx0ZXJfX3Jlc3VsdHNcIikudG9nZ2xlQ2xhc3MoXCJmaWx0ZXJfX3Jlc3VsdHMtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICQod2luZG93KS5vZmYoXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAkKFwiYm9keVwiKS5vZmYoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikub25lKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQoJy5maWx0ZXJfX3Jlc3VsdHMnKS5yZW1vdmVDbGFzcyhcImZpbHRlcl9fcmVzdWx0cy0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uZShcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLmZpbHRlcl9fcmVzdWx0cycpLnJlbW92ZUNsYXNzKFwiZmlsdGVyX19yZXN1bHRzLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgJChcImJvZHlcIikub2ZmKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLmZpbHRlcl9fcmVzdWx0cycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLypjb25zdCBmaWx0ZXJDbGlja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlcl9faXRlbSBpbnB1dFwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpbHRlckNsaWNrIG9mIGZpbHRlckNsaWNrcykge1xyXG4gICAgICAgICAgICBmaWx0ZXJDbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2dyYW0nKS5yZW1vdmVDbGFzcyhcInByb2dyYW0tLXZpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19pdGVtIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gW107XHJcbiAgICAgICAgICAgICAgICAvL2xvb3BpbmcgY2hlY2tlZCB2YWx1ZXMgYW5kIGFkZGluZyB0byBhcnJheVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiBjaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQXR0ciA9IGNoZWNrYm94LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goZGF0YUF0dHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcucHJvZ3JhbScpLnJlbW92ZUNsYXNzKFwicHJvZ3JhbS0tdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmFtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9ncmFtIG9mIHByb2dyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmFtQWN0aXZlID0gbmV3IEJvb2xlYW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3JhbURhdGFzID0gcHJvZ3JhbS5kYXRhc2V0LmNoYXJhY3RlcmlzdGljcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkYXR1bSBvZiBkYXRhcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmFtRGF0YXMuaW5jbHVkZXMoZGF0dW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyYW1BY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0uY2xhc3NMaXN0LmFkZCgncHJvZ3JhbS0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2dyYW1BY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHByb2dyYW0uY2xhc3NMaXN0LnJlbW92ZSgncHJvZ3JhbS0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSAkKCcucHJvZ3JhbScpLmFkZENsYXNzKFwicHJvZ3JhbS0tdmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC8vRU1QQU5EIFBST0dSQU1TIFNUQVJUU1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vanMgZHJvcCBpdGVtIHN0YXJ0XHJcbiAgICBjb25zdCBkcm9wSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXNlbGVjdGVkLWl0ZW1cIik7XHJcblxyXG4gICAgaWYgKGRyb3BJdGVtcyAhPSBudWxsKSB7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZHJvcEl0ZW0gb2YgZHJvcEl0ZW1zKSB7XHJcblxyXG4gICAgICAgICAgICBkcm9wSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIF9yZW1vdmVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcm9wSXRlbS5kYXRhc2V0LnZhbHVlKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1jb250ZW50LS12aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZC1jb250ZW50LS12aXNpYmxlJyk7XHJcbiAgICBmdW5jdGlvbiBfcmVtb3ZlQ2xhc3NlcygpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBlbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtY29udGVudC0tdmlzaWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9qcyBkcm9wIGl0ZW0gZW5kXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBob3JTY3JvbGwoKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNjcm9sbC1pdGVtcycpO1xyXG4gICAgICAgIGxldCBpc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICBsZXQgc3RhcnRYO1xyXG4gICAgICAgIGxldCBzY3JvbGxMZWZ0O1xyXG5cclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBzdGFydFggPSBlLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYoIWlzRG93bikgcmV0dXJuO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhbGsgPSAoeCAtIHN0YXJ0WCkgKiAzOyAvL3Njcm9sbC1mYXN0XHJcbiAgICAgICAgICAgIHNsaWRlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHdhbGs7XHJcbiAgICAgICAgIC8vICAgY29uc29sZS5sb2cod2Fsayk7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgZnVuY3Rpb24gY3VzdG9tUmFkaW9CdXR0b25zKCkge1xyXG4gICAgaWYgKCQoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKS5sZW5ndGggfHwgJChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpLmxlbmd0aCkge1xyXG5cclxuICAgICAgdmFyICR0YXJnZXQgPSAkKFwiaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG5cclxuICAgICAgJHRhcmdldC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoISQodGhpcykucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoJ2FjY29yZGlvbicpKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLmFmdGVyKFwiPGxhYmVsPjwvbGFiZWw+XCIpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImN1cnNvci1wb2ludGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZ2hMaWdodExhYmVsKCl7XHJcbiAgICAgICAgJHRhcmdldCA9ICQoIFwiLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLCAuZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLCAuZm9ybSBpbnB1dFt0eXBlPSd0ZWwnXSwgLmZvcm0gdGV4dGFyZWFcIiApO1xyXG4gICAgICAgICR0YXJnZXQuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGV4dF92YWx1ZT0kKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZih0ZXh0X3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbScpLmFkZENsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtLXN0YXRpYycpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkdGFyZ2V0LmJpbmQoJ2JsdXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiggISQodGhpcykudmFsKCkgfHwgJCh0aGlzKS5oYXNDbGFzcygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbScpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0tc3RhdGljJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJHRhcmdldC5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCAhJCh0aGlzKS52YWwoKSB8fCAkKHRoaXMpLmhhc0NsYXNzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbScpLmFkZENsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtLXN0YXRpYycpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXNpbmcgYW4gaW5zdGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgcHJvZHVjdCBTVEFSVFxyXG5cclxuICAgIGlmICghJCgnLmpzLXN0b3Atb2JzZXJ2ZXInKSkge1xyXG4gICAgICAkKCdzZWN0aW9uW2lkXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3JlbGF0b3InKS5hdHRyKFwiaWRcIiwgXCJcIikucHJlcGVuZChcIjxkaXYgY2xhc3M9J3NpZ25wb3N0IGFuY2hvci0yMDAnIGlkPVwiICsgdGhpc0lEICsgXCI+PC9kaXY+XCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGluaXQgdGhlIG9ic2VydmVyXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHRocmVzaG9sZDogMC4xNVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2ltcGxlIGZ1bmN0aW9uIHRvIHVzZSBmb3IgY2FsbGJhY2sgaW4gdGhlIGludGVyc2VjdGlvbiBvYnNlcnZlclxyXG4gICAgICAgIGNvbnN0IGNoYW5nZU5hdiA9IChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHZlcmlmeSB0aGUgZWxlbWVudCBpcyBpbnRlcnNlY3RpbmdcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xyXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYWN0aXZlIGNsYXNzXHJcbiAgICAgICAgICAgICAgJCgnLmFjaG9ybGlzdF9fYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjaG9ybGlzdF9fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgLy8gZ2V0IGlkIG9mIHRoZSBpbnRlcnNlY3Rpbmcgc2VjdGlvblxyXG4gICAgICAgICAgICAgIHZhciBpZCA9ICQoZW50cnkudGFyZ2V0KS5maW5kKCcuc2lnbnBvc3QnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgIC8vIGZpbmQgbWF0Y2hpbmcgbGluayAmIGFkZCBhcHByb3ByaWF0ZSBjbGFzc1xyXG4gICAgICAgICAgICAgICQoJ1tocmVmPVwiIycgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnYWNob3JsaXN0X19hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjaGFuZ2VOYXYsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyB0YXJnZXQgdGhlIGVsZW1lbnRzIHRvIGJlIG9ic2VydmVkXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lnbnBvc3QnKTtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24ucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy91c2luZyBhbiBpbnN0ZXJzZWN0aW9uIG9ic2VydmVyIGZvciBwcm9kdWN0IEVORFxyXG5cclxuICAgIC8vVEFCTEUgSEVJR0hUIEVRVUFMSVpFUlxyXG4gICAgZnVuY3Rpb24gdGFibGVIZWlnaHRFcXVhbGl6ZXIoKSB7XHJcbiAgICAgICQoXCIuZ3JpZC10YWJsZS1jZWxsXCIpLmF0dHIoXCJzdHlsZVwiLCBcIlwiKTtcclxuXHJcbiAgICAgICQoXCIucHJvZ3JhbS1ncmlkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGhvd21hbnkgPSAkKHRoaXMpLmZpbmQoXCIucHJvZ3JhbS1hdHRyaWJ1dGVzIC5ncmlkLXRhYmxlLWNlbGxcIikubGVuZ3RoO1xyXG5cclxuICAgICAgICAvL0NVVCBFWFBBTkRFRCBUQUJMRSBXSURUSCBJTiBDQVNFIE9GIDIgQ09MVU1OU1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMDI0KVxyXG4gICAgICAgICAgaWYgKCQoZ3JpZCkuaGFzQ2xhc3MoXCJwcm9ncmFtLWdyaWQtMlwiKSlcclxuICAgICAgICAgICAgJChncmlkKS5wYXJlbnQoKS5jc3MoeyBcIndpZHRoXCIgOiBcIjgwMHB4XCIsIFwib3ZlcmZsb3dcIiA6IFwiaGlkZGVuXCIgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgaWYgKCQoZ3JpZCkuaGFzQ2xhc3MoXCJwcm9ncmFtLWdyaWQtMVwiKSkgXHJcbiAgICAgICAgICAgICQoZ3JpZCkucGFyZW50KCkuY3NzKHsgXCJ3aWR0aFwiOiBcIjUyMHB4XCIsIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIiB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3dtYW55OyBpKyspIHtcclxuICAgICAgICAgIGxldCBtYXggPSAwO1xyXG5cclxuICAgICAgICAgIC8vRklORCBUSEUgTUFYIFBFUiBST1dcclxuICAgICAgICAgICQoZ3JpZCkuZmluZChcIi5ncmlkLXRhYmxlLWNvbHVtblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmdyaWQtdGFibGUtY2VsbFwiKS5lcShpKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oZWlnaHQoKSA+IG1heClcclxuICAgICAgICAgICAgICAgIG1heCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1NFVCBGSVhFRCBIRUlHSFRcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQodGhpcykuZmluZChcIi5ncmlkLXRhYmxlLWNlbGxcIikuZXEoaSkuaGVpZ2h0KG1heCArIFwicHhcIik7IH0sIDUwMCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
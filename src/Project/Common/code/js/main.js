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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkQ2xhc3MiLCJpc0lFMTEiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsImVhY2giLCJmaW5kIiwibGVuZ3RoIiwiJGNvbnRhaW5lciIsImltZ1VybCIsInByb3AiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJjc3MiLCJwYXJlbnQiLCJpbWFnZSIsImZpcnN0IiwiaHJlZiIsImF0dHIiLCJ3cmFwIiwiZHJvcGxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3BsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl8iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJtZW51U3dpdGNoIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJyZW1vdmUiLCJyZWFkeSIsIm9uIiwic2Nyb2xsZWQiLCJzY3JvbGxUb3AiLCJ3aW5kb3dIZWlnaHQiLCJidHQiLCJyZW1vdmVDbGFzcyIsInByb2dyYW1Ub3AiLCJvZmZzZXQiLCJ0b3AiLCJwcm9ncmFtQm90dG9tIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlIiwid2lkdGgiLCJjbGljayIsInByZXZlbnREZWZhdWx0Iiwic2libGluZ3MiLCJ0b2dnbGVDbGFzcyIsInNlYXJjaFN3aXRjaCIsInNlYXJjaENsb3NlIiwiY3VzdG9tUmFkaW9CdXR0b25zIiwidCIsImNoaWxkcmVuIiwic2VsZWN0MiIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiaGlnaExpZ2h0TGFiZWwiLCJob3JTY3JvbGxJdGVtcyIsImhvclNjcm9sbCIsInd3IiwiaW5uZXJXaWR0aCIsInNsaWNrIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsIm1vYmlsZUZpcnN0IiwicHJldmVudENhcHRpb25PdmVybGFwIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbmRUbyIsInZhcmlhYmxlV2lkdGgiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJmYW5jeWJveCIsInRodW1icyIsImF1dG9TdGFydCIsImFycm93cyIsImZhZGUiLCIkcGFnZXIiLCJlYXNlIiwibGF6eUxvYWQiLCJhcHBlbmREb3RzIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiaSIsIml0ZW0iLCJpbm5lckhUTUwiLCJydGwiLCJhc05hdkZvciIsInRhYmxlSGVpZ2h0RXF1YWxpemVyIiwia2V5ZG93biIsImtleUNvZGUiLCIkcHJvZ3JhbWlkIiwiaGFzQ2xhc3MiLCJzZXRUaW1lb3V0Iiwib2ZmIiwib25lIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldiIsInRleHQiLCJjb3ZlcmFnZUV4cGFuZFRyaWdnZXIiLCJjb3ZlcmFnZUV4cGFuZGVyIiwiY29udGFpbnMiLCJwcm9ncmFtRXhwYW5kVHJpZ2dlck1vYmlsZSIsInByb2dyYW1UcmlnZ2VyIiwicHJvZ3JhbUV4cGFuZGVyIiwiaGVhZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51Iiwib25zY3JvbGwiLCJzdGlja3lGaXJzdCIsInN0aWNreVNlY29uZCIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0aWNrMSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJtZW51SGVpZ2h0Iiwic3RpY2syIiwiZWxlbWVudEZpcnN0RnJvbVRvcCIsIm9mZnNldFRvcCIsImVsZW1lbnRTZWNvbmRGcm9tVG9wIiwicGFnZVlPZmZzZXQiLCJhZGQiLCJjYXJvdXNlbHMiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJvcmRlciIsImxpbWl0IiwicHJlcGFyZUJ1dHRvbnMiLCJ1bmJpbmQiLCJzY3JvbGxlcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsZXJEaXZzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGVzdEVsZW1lbnQiLCJub2RlTmFtZSIsInNjcm9sbEFsbCIsInNjcm9sbExlZnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYXJyYXkiLCJ0YXJnZXQiLCJmaWx0ZXJUcmlnZ2VyIiwiZmlsdGVyUmVzdWx0cyIsImRyb3BJdGVtcyIsImRyb3BJdGVtIiwiX3JlbW92ZUNsYXNzZXMiLCJkYXRhc2V0IiwidmFsdWUiLCJlbHMiLCJpc0Rvd24iLCJzdGFydFgiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJ4Iiwid2FsayIsIiR0YXJnZXQiLCJhZnRlciIsInRleHRfdmFsdWUiLCJ2YWwiLCJwYXJlbnRzIiwiYmluZCIsInRoaXNJRCIsInByZXBlbmQiLCJvcHRpb25zIiwidGhyZXNob2xkIiwiY2hhbmdlTmF2IiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9ic2VydmUiLCJwYXJlbnRFbGVtZW50IiwiZ3JpZCIsImhvd21hbnkiLCJtYXgiLCJlcSIsIm91dGVySGVpZ2h0IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gIFxyXG4gICAgaWYgKCEoXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby10b3VjaCcpO1xyXG4gICAgfVxyXG5cclxuICB2YXIgaXNJRTExID0gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcbiAgaWYgKGlzSUUxMSkge1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XHJcblxyXG4gICAgJCgnLmhlcm8tcGxhaW4sIC5oZXJvJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5qcy1oZXJvLXNsaWRlcicpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyICRjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJ3BpY3R1cmUnKSxcclxuICAgICAgICBpbWdVcmwgPSAkY29udGFpbmVyLmZpbmQoJ2ltZycpLnByb3AoJ3NyYycpLFxyXG4gICAgICAgIGltZ0hlaWdodCA9ICRjb250YWluZXIuZmluZCgnaW1nJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICBpZiAoaW1nVXJsKSB7XHJcbiAgICAgICAgJGNvbnRhaW5lclxyXG4gICAgICAgICAgLmNzcygnYmFja2dyb3VuZEltYWdlJywgJ3VybCgnICsgaW1nVXJsICsgJyknKVxyXG4gICAgICAgICAgLmFkZENsYXNzKCdjcm9zcy1vYmplY3QtZml0Jyk7XHJcblxyXG4gICAgICAgICRjb250YWluZXIucGFyZW50KCcuaGVybycpLmNzcygnaGVpZ2h0JywgaW1nSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5saXN0LWdyaWQgYXJ0aWNsZSwgLmxpc3QtLWFydGljbGVfX2ltYWdlLCAubGlzdC1heGlzID4gYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmZpcnN0KCk7XHJcbiAgICAgIHZhciBocmVmID0gaW1hZ2UuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICBpbWFnZS5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgICAgLndyYXAoJzxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6dXJsKCcgKyBocmVmICsgJykgY2VudGVyIG5vLXJlcGVhdFwiPjwvZGl2PicpO1xyXG4gICAgfSk7XHJcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgY29uc3QgZHJvcGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3BsaXN0Jyk7XHJcbiAgICBpZihkcm9wbGlzdHMgIT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGRyb3BsaXN0IG9mIGRyb3BsaXN0cykge1xyXG4gICAgICAgICAgICBkcm9wbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGxpc3QtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVudVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXN3aXRjaCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBpZihtZW51U3dpdGNoICE9IG51bGwpIHtcclxuICAgICAgICBtZW51U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICBjb25zdCBidHQgPSAkKCcjYmFjay10by10b3AnKTtcclxuXHJcbiAgICAgICAgICAvL1NDUk9MTCBUTyBUT1BcclxuICAgICAgICAgIGlmIChzY3JvbGxlZCA+IHdpbmRvd0hlaWdodClcclxuICAgICAgICAgICAgJChidHQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJChidHQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAvL1BST0dSQU0gQ09OVFJPTFMgRklYRURcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZ3JhbXMnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcHJvZ3JhbVRvcCA9ICQoJy5wcm9ncmFtLWdyaWQnKS5wYXJlbnQoJ2Rpdjp2aXNpYmxlJykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1Cb3R0b20gPSAkKCcucHJvZ3JhbS1ncmlkJykucGFyZW50KCdkaXY6dmlzaWJsZScpLm9mZnNldCgpLnRvcCArICQoJy5wcm9ncmFtLWdyaWQnKS5wYXJlbnQoJ2Rpdjp2aXNpYmxlJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzY3JvbGxlZCArIHdpbmRvd0hlaWdodCA+IHByb2dyYW1Ub3AgJiYgc2Nyb2xsZWQgKyB3aW5kb3dIZWlnaHQgPCBwcm9ncmFtQm90dG9tKVxyXG4gICAgICAgICAgICAgICAgJCgnLnByb2dyYW0tY29udHJvbHMnKS5hZGRDbGFzcygnZml4aXQnKTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZ3JhbS1jb250cm9scycpLnJlbW92ZUNsYXNzKCdmaXhpdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjYmFjay10by10b3AnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9NVVRFIExJTktTIFdJVEggXCIjXCIgSFJFRiBBVFRSSUJVVEVcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XHJcbiAgICAgICAgICAkKCdoZWFkZXIgbGkuc3VibGlzdGVkID4gYSBzcGFuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKFwiLnN1Ymxpc3RcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFN3aXRjaCA9ICQoJy5qcy1zZWFyY2gtc3dpdGNoJyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQ2xvc2UgPSAkKCcuanMtc2VhcmNoLWNsb3NlJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2hTd2l0Y2ggIT0gbnVsbCAmJiBzZWFyY2hDbG9zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAkKHNlYXJjaFN3aXRjaCkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChzZWFyY2hDbG9zZSkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW9wZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0NVU1RPTSBSQURJTyBCVVRUT05TXHJcbiAgICAgIGN1c3RvbVJhZGlvQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAvL0ZJWEVTXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICgkKFwiLnByb2dyYW0tZ3JpZFwiKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc19fbW9yZVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKFwiLmdyaWQtdGFibGUtd2luZG93XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0LmZpbmQoXCIuZ3JpZC10YWJsZS1jb2x1bW5cIikubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICQoXCIucHJvZ3JhbS1jb250cm9sc19fbGVmdFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAkKFwiLnByb2dyYW0tY29udHJvbHNfX3JpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoJChcIi5jb3ZlcmFnZXNcIikpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuY292ZXJhZ2VfX3llcyA+IHVsXCIpLmNoaWxkcmVuKFwibGlcIikubGVuZ3RoIDw9IDMpIHtcclxuICAgICAgICAgICAgICAkKFwiLmNvdmVyYWdlX19hcmVhXCIpLmFkZENsYXNzKFwiY292ZXJhZ2VfX2FyZWEtLWV4cGFuZGVkXCIpO1xyXG4gICAgICAgICAgICAgICQoXCIuanMtY292ZXJhZ2VfX2V4cGFuZGVyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJ3NlbGVjdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZigkKCcuZm9ybScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBob3JTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJqcy1zY3JvbGwtaXRlbXNcIik7XHJcbiAgICAgICAgaWYoaG9yU2Nyb2xsSXRlbXMgIT0gbnVsbCkgaG9yU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHd3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cclxuICAgICAgICAvL2dhbGxlcnkgY2Fyb3VzZWwgc3RhcnRcclxuICAgICAgICBpZiAoJCgnLmpzLWdhbGxlcnknKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLypnYWxsZXJ5IHNsaWNrKi9cclxuICAgICAgICAgICAgJCgnLmpzLWdhbGxlcnknKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByZXZlbnRDYXB0aW9uT3ZlcmxhcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25kVG86ICdtaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAkKCcuZ2FsbGVyeS1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5nYWxsZXJ5LW5leHQnKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWZhbmN5Ym94PVwiZ2FsbGVyeVwiXScpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgICAgIHRodW1icyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvU3RhcnQgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICgkKCcuanMtc2ltcGxlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcuanMtc2ltcGxlLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQoJy5zbGljay1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQoJy5zbGljay1uZXh0JylcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICBpZiAoJCgnLmpzLWhlcm8tc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciAkcGFnZXIgPSAkKCcuanMtY3VzdG9tLWRvdHMgc3BhbicpO1xyXG4gICAgICAgICAgICAkKCcuanMtaGVyby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVhc2UgOiAnUG93NC5lYXNlSW4nLFxyXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKCcuZ3JvdXBpbmctZG90cycpLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkcGFnZXJbaV0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGE+JyArIGl0ZW0gKyAnPC9hPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vbGVhZGVyc2hpcCBjYXJvdXNlbCBzdGFydFxyXG4gICAgICAgIGlmICgkKCcuanMtbGVhZGVyc2hpcC1zbGlkZXItaW1hZ2UnKS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5qcy1sZWFkZXJzaGlwLXNsaWRlci1pbWFnZScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6ICcuanMtbGVhZGVyc2hpcC1zbGlkZXItdGV4dCcsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5qcy1sZWFkZXJzaGlwLXNsaWRlci10ZXh0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLmpzLWxlYWRlcnNoaXAtc2xpZGVyLWltYWdlJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCgnLnNsaWNrLXByZXYnKSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJCgnLnNsaWNrLW5leHQnKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvL0NBTEwgVEFCTEUgRVFVQUxJWkVSXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoJCgnLnByb2dyYW1zJykubGVuZ3RoID4gMClcclxuICAgICAgICB0YWJsZUhlaWdodEVxdWFsaXplcigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7Ly9lc2NcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9ncmFtc19fdGFic19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICRwcm9ncmFtaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICAkKCcucHJvZ3JhbXNfX3RhYnNfX3RpdGxlJykucmVtb3ZlQ2xhc3MoJ3Byb2dyYW1zX190YWJzX190aXRsZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnByb2dyYW0td3JhcCcpLnJlbW92ZUNsYXNzKCdwcm9ncmFtLXdyYXAtLWFjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Byb2dyYW1zX190YWJzX190aXRsZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnIycrJHByb2dyYW1pZCkuYWRkQ2xhc3MoJ3Byb2dyYW0td3JhcC0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGFibGVIZWlnaHRFcXVhbGl6ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZXhwYW5kIHZvY2FidWxhcnlcclxuICAgICQoJy52b2NhYnVsYXJ5X19leHBhbmRlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnZvY2FidWxhcnknKS50b2dnbGVDbGFzcygndm9jYWJ1bGFyeS0tdmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zdWJtZW51XHJcbiAgICAkKFwiLm5hdi1wcm9kdWN0X190cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vTU9CSUxFIE9SIE5PVFxyXG4gICAgICAgIGlmKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgLy9JUyBPUEVOIE9SIE5PVFxyXG4gICAgICAgICAgICBpZigkKCcubWVudS1leHBhbmRlZCcpLmhhc0NsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnRvZ2dsZUNsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LW1haW5fX2luLCAubmF2LXByb2R1Y3RfX3dyYXAnKS50b2dnbGVDbGFzcygnLS1yZXRyYWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1tYWluX19pbiwgLm5hdi1wcm9kdWN0X193cmFwJykudG9nZ2xlQ2xhc3MoJy0tcmV0cmFjdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykudG9nZ2xlQ2xhc3MoJ21lbnUtZXhwYW5kZWQtLXllcycpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgJChcImJvZHlcIikub2ZmKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnRvZ2dsZUNsYXNzKCdtZW51LWV4cGFuZGVkLS15ZXMnKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikub25lKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykucmVtb3ZlQ2xhc3MoXCJtZW51LWV4cGFuZGVkLS15ZXNcIik7XHJcbiAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub25lKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcubWVudS1leHBhbmRlZCcpLnJlbW92ZUNsYXNzKFwibWVudS1leHBhbmRlZC0teWVzXCIpO1xyXG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5tZW51LWV4cGFuZGVkJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9leHBhbmQgcHJvZ3JhbSBTVEFSVFxyXG4gICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzX19tb3JlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgdCA9ICQodGhpcyk7XHJcblxyXG4gICAgICBpZiAoIXQucGFyZW50KCkucHJldigpLmZpbmQoJy5wcm9ncmFtLWV4cGFuZGVyJykuaGFzQ2xhc3MoJ3Byb2dyYW0tZXhwYW5kZXItLXZpc2libGUnKSkge1xyXG4gICAgICAgIHQudGV4dCgnzpTOtc6vz4TOtSDOu865zrPPjM+EzrXPgc6xJyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzXCIpLmFkZENsYXNzKCdmaXhpdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHQudGV4dCgnzpTOtc6vz4TOtSDPgM61z4HOuc+Dz4PPjM+EzrXPgc6xJyk7XHJcbiAgICAgICAgJChcIi5wcm9ncmFtLWNvbnRyb2xzXCIpLnJlbW92ZUNsYXNzKCdmaXhpdCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwic2VjdGlvbi5wcm9ncmFtc1wiKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICB0LnBhcmVudCgpLnByZXYoKS5maW5kKCcucHJvZ3JhbS1leHBhbmRlcicpLnRvZ2dsZUNsYXNzKCdwcm9ncmFtLWV4cGFuZGVyLS12aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuICAgIC8vZXhwYW5kIHByb2dyYW0gRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9leHBhbmQgcHJvZ3JhbSBTVEFSVFxyXG4gICAgY29uc3QgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvdmVyYWdlX19leHBhbmRlcicpO1xyXG4gICAgY29uc3QgY292ZXJhZ2VFeHBhbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcmFnZV9fYXJlYScpO1xyXG4gICAgaWYoY292ZXJhZ2VFeHBhbmRlciAhPSBudWxsICYmIGNvdmVyYWdlRXhwYW5kVHJpZ2dlciAhPSBudWxsKSB7XHJcbiAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgIGNvdmVyYWdlRXhwYW5kZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvdmVyYWdlX19hcmVhLS1leHBhbmRlZFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoY292ZXJhZ2VFeHBhbmRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdmVyYWdlX19hcmVhLS1leHBhbmRlZCcpKSBcclxuICAgICAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmlubmVySFRNTCA9ICfOlM6VzpnOpM6VIM6bzpnOk86fzqTOlc6hzpEnO1xyXG4gICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgY292ZXJhZ2VFeHBhbmRUcmlnZ2VyLmlubmVySFRNTCA9ICfOlM6VzpnOpM6VIM6gzpXOoc6ZzqPOo86fzqTOlc6hzpEnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGNvdmVyYWdlRXhwYW5kVHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2V4cGFuZCBjb3ZlcmFnZXMgRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcHJvZ3JhbUV4cGFuZFRyaWdnZXJNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZ3JpZC10YWJsZS1jZWxsLS1leHBhbmRlcicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9ncmFtVHJpZ2dlciBvZiBwcm9ncmFtRXhwYW5kVHJpZ2dlck1vYmlsZSkge1xyXG5cclxuICAgICAgICBwcm9ncmFtVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtRXhwYW5kZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2dyYW0tZXhwYW5kZXItLXZpc2libGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXgtMVwiKTtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXgtMlwiKTtcclxuICAgIGlmKGhlYWRlciAhPSBudWxsICYmIG1lbnUgIT0gbnVsbCl7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSBwYWdlLCBleGVjdXRlIG15RnVuY3Rpb25cclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUZpcnN0KCk7XHJcbiAgICAgICAgICAgIHN0aWNreVNlY29uZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgaGVhZGVyXHJcbiAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9IDA7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzgwKVxyXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4LTEnKS5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAvL2hlYWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oMScsIGhlYWRlckhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgdmFyIHN0aWNrMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWZ0ZXItc3RpY2t5LTFcIik7XHJcbiAgICAgICAgc3RpY2sxLnN0eWxlLnNldFByb3BlcnR5KCctLXAxJywgaGVhZGVySGVpZ2h0ICsgXCJweFwiKTtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4LTInKS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHN0aWNrMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWZ0ZXItc3RpY2t5LTJcIik7XHJcbiAgICAgICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oMicsIG1lbnVIZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgICAgIG1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG9wJywgKGhlYWRlckhlaWdodCAtICQoXCIjZml4LTEgLmludHJvX190ZXh0XCIpLmhlaWdodCgpIC0zOCkgKyBcInB4XCIpO1xyXG4gICAgICAgIHN0aWNrMi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wMicsIG1lbnVIZWlnaHQgKyBcInB4XCIpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgbmF2YmFyXHJcbiAgICAgICAgdmFyIGVsZW1lbnRGaXJzdEZyb21Ub3AgPSBoZWFkZXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIHZhciBlbGVtZW50U2Vjb25kRnJvbVRvcCA9IG1lbnUub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGlja3lGaXJzdCgpIHtcclxuICAgICAgICAgICAgaWYgKCh3aW5kb3cucGFnZVlPZmZzZXQgPiBlbGVtZW50Rmlyc3RGcm9tVG9wKSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0aWNreVNlY29uZCgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAoZWxlbWVudFNlY29uZEZyb21Ub3AgLSBoZWFkZXJIZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LXNlY29uZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktc2Vjb25kXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vZ3JpZCBjYXJvdXNlbCBzdGFydFxyXG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1ncmlkLXRhYmxlXCIpO1xyXG4gICAgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvZ3JhbS1sZWZ0XCIpO1xyXG4gICAgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXByb2dyYW0tcmlnaHRcIik7XHJcbiAgICB2YXIgb3JkZXIgPSAwO1xyXG4gICAgLy8gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3JhbXMtdGFibGVcIikgIT0gbnVsbClcclxuICAgICAgIC8vIHZhciBwcm9ncmFtTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmFtcy10YWJsZVwiKS5jaGlsZEVsZW1lbnRDb3VudDtcclxuICAgIGlmIChsZWZ0QnV0dG9uICE9IG51bGwgJiYgcmlnaHRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgbGltaXQgPSAkKCcuanMtZ3JpZC10YWJsZScpLmZpcnN0KCkuZmluZCgnLnByb2dyYW0ucHJvZ3JhbS0tdmlzaWJsZScpLmxlbmd0aCAtIDM7XHJcbiAgICAgIHByZXBhcmVCdXR0b25zKCk7XHJcblxyXG4gICAgICAvL1JJR0hUIENMSUNLXHJcbiAgICAgICQocmlnaHRCdXR0b24pLnVuYmluZCgpLm9uKCdjbGljaycsIF8gPT4ge1xyXG4gICAgICAgIGxpbWl0ID0gJCgnLmpzLWdyaWQtdGFibGUnKS5maXJzdCgpLmZpbmQoJy5wcm9ncmFtLnByb2dyYW0tLXZpc2libGUnKS5sZW5ndGggLSAzO1xyXG4gICAgICAgIGlmIChvcmRlciA8IGxpbWl0KSB7XHJcbiAgICAgICAgICBvcmRlcisrO1xyXG5cclxuICAgICAgICAgICQoY2Fyb3VzZWxzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAob3JkZXIgKiAoLTI5NikpICsgJ3B4KScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBwcmVwYXJlQnV0dG9ucygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQobGVmdEJ1dHRvbikudW5iaW5kKCkub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgbGltaXQgPSAkKCcuanMtZ3JpZC10YWJsZScpLmZpcnN0KCkuZmluZCgnLnByb2dyYW0ucHJvZ3JhbS0tdmlzaWJsZScpLmxlbmd0aCAtIDM7XHJcbiAgICAgICAgaWYgKG9yZGVyID4gMCkge1xyXG4gICAgICAgICAgLS1vcmRlcjtcclxuXHJcbiAgICAgICAgICAkKGNhcm91c2VscykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKG9yZGVyICogKC0yOTYpKSArICdweCknKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVwYXJlQnV0dG9ucygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHByZXBhcmVCdXR0b25zKCkge1xyXG4gICAgICAgIChvcmRlciA8IGxpbWl0KSA/ICQocmlnaHRCdXR0b24pLnJlbW92ZUNsYXNzKFwibm9cIikgOiAkKHJpZ2h0QnV0dG9uKS5hZGRDbGFzcyhcIm5vXCIpO1xyXG4gICAgICAgIChvcmRlciA+IDApID8gJChsZWZ0QnV0dG9uKS5yZW1vdmVDbGFzcyhcIm5vXCIpIDogJChsZWZ0QnV0dG9uKS5hZGRDbGFzcyhcIm5vXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2dyaWQgY2Fyb3VzZWwgZW5kXHJcblxyXG4gICAgLy9zeW5jIHNjcm9sbCBvZiB3aW5kb3dzIFNUQVJUXHJcbiAgICB2YXIgc2Nyb2xsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3JpZC10YWJsZS13aW5kb3cnKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsZXJEaXZzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHNjcm9sbGVycywgZnVuY3Rpb24odGVzdEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGVzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdESVYnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsQWxsKHNjcm9sbExlZnQpIHtcclxuICAgICAgICBzY3JvbGxlckRpdnMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxlckRpdnMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2Nyb2xsQWxsKGUudGFyZ2V0LnNjcm9sbExlZnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvL3N5bmMgc2Nyb2xsIG9mIHdpbmRvd3MgRU5EXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9maWx0ZXJpbmcgaW4gcHJvZHVjdHNcclxuICAgIGNvbnN0IGZpbHRlclRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fdHJpZ2dlclwiKTtcclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fcmVzdWx0c1wiKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyVHJpZ2dlciAhPSBudWxsICYmIGZpbHRlclJlc3VsdHMgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgJChcIi5maWx0ZXJfX3RyaWdnZXJcIikub24oJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAkKFwiLmZpbHRlcl9fcmVzdWx0c1wiKS50b2dnbGVDbGFzcyhcImZpbHRlcl9fcmVzdWx0cy0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICQoXCJib2R5XCIpLm9mZihcImNsaWNrXCIpO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5vbmUoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLmZpbHRlcl9fcmVzdWx0cycpLnJlbW92ZUNsYXNzKFwiZmlsdGVyX19yZXN1bHRzLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub25lKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcuZmlsdGVyX19yZXN1bHRzJykucmVtb3ZlQ2xhc3MoXCJmaWx0ZXJfX3Jlc3VsdHMtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuZmlsdGVyX19yZXN1bHRzJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvKmNvbnN0IGZpbHRlckNsaWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19pdGVtIGlucHV0XCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmlsdGVyQ2xpY2sgb2YgZmlsdGVyQ2xpY2tzKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcucHJvZ3JhbScpLnJlbW92ZUNsYXNzKFwicHJvZ3JhbS0tdmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2l0ZW0gaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vbG9vcGluZyBjaGVja2VkIHZhbHVlcyBhbmQgYWRkaW5nIHRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gY2hlY2tib3guZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaChkYXRhQXR0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5wcm9ncmFtJykucmVtb3ZlQ2xhc3MoXCJwcm9ncmFtLS12aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyYW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyYW0nKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2dyYW0gb2YgcHJvZ3JhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyYW1BY3RpdmUgPSBuZXcgQm9vbGVhbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmFtRGF0YXMgPSBwcm9ncmFtLmRhdGFzZXQuY2hhcmFjdGVyaXN0aWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdHVtIG9mIGRhdGFzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyYW1EYXRhcy5pbmNsdWRlcyhkYXR1bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3JhbUFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5jbGFzc0xpc3QuYWRkKCdwcm9ncmFtLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3JhbUFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcHJvZ3JhbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9ncmFtLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlICQoJy5wcm9ncmFtJykuYWRkQ2xhc3MoXCJwcm9ncmFtLS12aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgLy9FTVBBTkQgUFJPR1JBTVMgU1RBUlRTXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9qcyBkcm9wIGl0ZW0gc3RhcnRcclxuICAgIGNvbnN0IGRyb3BJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc2VsZWN0ZWQtaXRlbVwiKTtcclxuXHJcbiAgICBpZiAoZHJvcEl0ZW1zICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBkcm9wSXRlbSBvZiBkcm9wSXRlbXMpIHtcclxuXHJcbiAgICAgICAgICAgIGRyb3BJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgX3JlbW92ZUNsYXNzZXMoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyb3BJdGVtLmRhdGFzZXQudmFsdWUpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWNvbnRlbnQtLXZpc2libGUnKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkLWNvbnRlbnQtLXZpc2libGUnKTtcclxuICAgIGZ1bmN0aW9uIF9yZW1vdmVDbGFzc2VzKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1jb250ZW50LS12aXNpYmxlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2pzIGRyb3AgaXRlbSBlbmRcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhvclNjcm9sbCgpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2Nyb2xsLWl0ZW1zJyk7XHJcbiAgICAgICAgbGV0IGlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGFydFg7XHJcbiAgICAgICAgbGV0IHNjcm9sbExlZnQ7XHJcblxyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHNsaWRlci5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZighaXNEb3duKSByZXR1cm47XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDM7IC8vc2Nyb2xsLWZhc3RcclxuICAgICAgICAgICAgc2xpZGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gd2FsaztcclxuICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh3YWxrKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBmdW5jdGlvbiBjdXN0b21SYWRpb0J1dHRvbnMoKSB7XHJcbiAgICBpZiAoJChcImlucHV0W3R5cGU9cmFkaW9dXCIpLmxlbmd0aCB8fCAkKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIikubGVuZ3RoKSB7XHJcblxyXG4gICAgICB2YXIgJHRhcmdldCA9ICQoXCJpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcblxyXG4gICAgICAkdGFyZ2V0LmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcygnYWNjb3JkaW9uJykpIHtcclxuICAgICAgICAgICQodGhpcykuYWZ0ZXIoXCI8bGFiZWw+PC9sYWJlbD5cIik7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwiY3Vyc29yLXBvaW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlnaExpZ2h0TGFiZWwoKXtcclxuICAgICAgICAkdGFyZ2V0ID0gJCggXCIuZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sIC5mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sIC5mb3JtIGlucHV0W3R5cGU9J3RlbCddLCAuZm9ybSB0ZXh0YXJlYVwiICk7XHJcbiAgICAgICAgJHRhcmdldC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0X3ZhbHVlPSQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIGlmKHRleHRfdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtJykuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0tc3RhdGljJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR0YXJnZXQuYmluZCgnYmx1cicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCAhJCh0aGlzKS52YWwoKSB8fCAkKHRoaXMpLmhhc0NsYXNzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykudmFsKCkpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9faXRlbS1zdGF0aWMnKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkdGFyZ2V0LmJpbmQoJ2ZvY3VzJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoICEkKHRoaXMpLnZhbCgpIHx8ICQodGhpcykuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5mb3JtX19pdGVtJykuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm1fX2l0ZW0tc3RhdGljJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy91c2luZyBhbiBpbnN0ZXJzZWN0aW9uIG9ic2VydmVyIGZvciBwcm9kdWN0IFNUQVJUXHJcblxyXG4gICAgaWYgKCEkKCcuanMtc3RvcC1vYnNlcnZlcicpKSB7XHJcbiAgICAgICQoJ3NlY3Rpb25baWRdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdGhpc0lEID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncmVsYXRvcicpLmF0dHIoXCJpZFwiLCBcIlwiKS5wcmVwZW5kKFwiPGRpdiBjbGFzcz0nc2lnbnBvc3QgYW5jaG9yLTIwMCcgaWQ9XCIgKyB0aGlzSUQgKyBcIj48L2Rpdj5cIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gaW5pdCB0aGUgb2JzZXJ2ZXJcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgdGhyZXNob2xkOiAwLjE1XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaW1wbGUgZnVuY3Rpb24gdG8gdXNlIGZvciBjYWxsYmFjayBpbiB0aGUgaW50ZXJzZWN0aW9uIG9ic2VydmVyXHJcbiAgICAgICAgY29uc3QgY2hhbmdlTmF2ID0gKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgLy8gdmVyaWZ5IHRoZSBlbGVtZW50IGlzIGludGVyc2VjdGluZ1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBhY3RpdmUgY2xhc3NcclxuICAgICAgICAgICAgICAkKCcuYWNob3JsaXN0X19hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWNob3JsaXN0X19hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAvLyBnZXQgaWQgb2YgdGhlIGludGVyc2VjdGluZyBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgdmFyIGlkID0gJChlbnRyeS50YXJnZXQpLmZpbmQoJy5zaWducG9zdCcpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgLy8gZmluZCBtYXRjaGluZyBsaW5rICYgYWRkIGFwcHJvcHJpYXRlIGNsYXNzXHJcbiAgICAgICAgICAgICAgJCgnW2hyZWY9XCIjJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdhY2hvcmxpc3RfX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNoYW5nZU5hdiwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIHRhcmdldCB0aGUgZWxlbWVudHMgdG8gYmUgb2JzZXJ2ZWRcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWducG9zdCcpO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbi5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VzaW5nIGFuIGluc3RlcnNlY3Rpb24gb2JzZXJ2ZXIgZm9yIHByb2R1Y3QgRU5EXHJcblxyXG4gICAgLy9UQUJMRSBIRUlHSFQgRVFVQUxJWkVSXHJcbiAgICBmdW5jdGlvbiB0YWJsZUhlaWdodEVxdWFsaXplcigpIHtcclxuICAgICAgJChcIi5ncmlkLXRhYmxlLWNlbGxcIikuYXR0cihcInN0eWxlXCIsIFwiXCIpO1xyXG5cclxuICAgICAgJChcIi5wcm9ncmFtLWdyaWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgaG93bWFueSA9ICQodGhpcykuZmluZChcIi5wcm9ncmFtLWF0dHJpYnV0ZXMgLmdyaWQtdGFibGUtY2VsbFwiKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vQ1VUIEVYUEFOREVEIFRBQkxFIFdJRFRIIElOIENBU0UgT0YgMiBDT0xVTU5TXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjQpXHJcbiAgICAgICAgICBpZiAoJChncmlkKS5oYXNDbGFzcyhcInByb2dyYW0tZ3JpZC0yXCIpKVxyXG4gICAgICAgICAgICAkKGdyaWQpLnBhcmVudCgpLmNzcyh7IFwid2lkdGhcIiA6IFwiODAwcHhcIiwgXCJvdmVyZmxvd1wiIDogXCJoaWRkZW5cIiB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBpZiAoJChncmlkKS5oYXNDbGFzcyhcInByb2dyYW0tZ3JpZC0xXCIpKSBcclxuICAgICAgICAgICAgJChncmlkKS5wYXJlbnQoKS5jc3MoeyBcIndpZHRoXCI6IFwiNTIwcHhcIiwgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvd21hbnk7IGkrKykge1xyXG4gICAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgICAgLy9GSU5EIFRIRSBNQVggUEVSIFJPV1xyXG4gICAgICAgICAgJChncmlkKS5maW5kKFwiLmdyaWQtdGFibGUtY29sdW1uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuZ3JpZC10YWJsZS1jZWxsXCIpLmVxKGkpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhlaWdodCgpID4gbWF4KVxyXG4gICAgICAgICAgICAgICAgbWF4ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vU0VUIEZJWEVEIEhFSUdIVFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJCh0aGlzKS5maW5kKFwiLmdyaWQtdGFibGUtY2VsbFwiKS5lcShpKS5oZWlnaHQobWF4ICsgXCJweFwiKTsgfSwgNTAwKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjExJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
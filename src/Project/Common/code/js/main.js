(function($) {

    if (!("ontouchstart" in document.documentElement)) {
        $('html').addClass('no-touch');
    }


    const droplists = document.querySelectorAll('.droplist');
    if(droplists != null) {
        for (const droplist of droplists) {
            droplist.addEventListener('click', _ => {
                droplist.classList.toggle('droplist--active');
            });
        }
    }

    const menuSwitch = document.querySelector('.js-menu-switch');
    const body = document.querySelector('body');

    if(menuSwitch != null) {
        menuSwitch.addEventListener('click', _ => {
            body.classList.toggle('menu-open');
        });
    }


    $(document).ready(function () {

        //MUTE LINKS WITH "#" HREF ATTRIBUTE
        if ($(window).width() <= 768) {
          $('header li.sublisted > a span').click(function (e) {
            e.preventDefault();
            $(this).parent().siblings(".sublist").toggleClass("active");
          });
        }

        const searchSwitch = $('.js-search-switch');
        const searchClose = $('.js-search-close');

        if (searchSwitch != null && searchClose != null) {
          $(searchSwitch).on('click', _ => {
            body.classList.toggle('search-open');
          });
          $(searchClose).on('click', _ => {
            body.classList.remove('search-open');
          });
      }

      //CUSTOM RADIO BUTTONS
      customRadioButtons();

        //FIXES
        try {
          if ($(".program-grid").length > 1) {
            $(".program-controls__more").removeClass("hidden");
          }

          $(".grid-table-window").each(function () {
            const t = $(this);

            if (t.find(".grid-table-column").length > 3) {
              $(".program-controls__left").removeClass("hidden");
              $(".program-controls__right").removeClass("hidden");
            }
          });

          if ($(".coverages")) {
            if ($(".coverage__yes").find("ul").length <= 4) {
              $(".coverage__area").addClass("coverage__area--expanded");
              $(".js-coverage__expander").remove();
            }
          }
        }
        catch (e) {
          console.log(e);
        }

        if($('select').length) {
            $('select').select2({
                minimumResultsForSearch: -1
            });
        }


        if($('.form').length){
            highLightLabel();
        }

        const horScrollItems = document.querySelector("js-scroll-items");
        if(horScrollItems != null) horScroll();

        const ww = window.innerWidth;


        //gallery carousel start
        if ($('.js-gallery').length) {
            /*gallery slick*/
            $('.js-gallery').slick({
                infinite:false,
                speed: 500,
                slidesToShow: 3,
                mobileFirst:false,
                preventCaptionOverlap: false,
                dots:true,
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            respondTo: 'min',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ],
                variableWidth: true,
                prevArrow: $('.gallery-prev'),
                nextArrow: $('.gallery-next')
            });

            $('[data-fancybox="gallery"]').fancybox({
                thumbs : {
                    autoStart : false
                }
            });


        }


        if ($('.js-simple-slider').length) {
            $('.js-simple-slider').slick({
                mobileFirst:true,
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
                mobileFirst:true,
                dots: true,
                arrows: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                fade: true,
                ease : 'Pow4.easeIn',
                lazyLoad: 'ondemand',
                appendDots: $('.grouping-dots'),
                customPaging: function (slider, i) {
                    var item = $pager[i].innerHTML;
                    return '<a>' + item + '</a>';
                }

            });
        }




        //leadership carousel start
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
                mobileFirst:false,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 1020,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
          });

            $('.js-leadership-slider-text').slick({
                mobileFirst:true,
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

  $(window).on("load", () => {
    //CALL TABLE EQUALIZER
    try {
      if ($('.programs').length > 0)
        tableHeightEqualizer();
    }
    catch (e) {
      console.log(e);
    }
  });

    $(document).keydown(function (e) {

        if (e.keyCode == 27) {//esc

        }

    });

    $('.programs__tabs__title').click(function(){
        $programid = $(this).attr('data-id');
        $('.programs__tabs__title').removeClass('programs__tabs__title--active');
        $('.program-wrap').removeClass('program-wrap--active');
        $(this).addClass('programs__tabs__title--active');
        $('#'+$programid).addClass('program-wrap--active');
        tableHeightEqualizer();
    });

    //expand vocabulary
    $('.vocabulary__expander').click(function(){
        $('.vocabulary').toggleClass('vocabulary--visible');
    });

    //submenu
    $( ".nav-product__trigger" ).click(function() {
        //MOBILE OR NOT
        if($(window).width() <= 1024) {
            //IS OPEN OR NOT
            if($('.menu-expanded').hasClass('menu-expanded--yes')){
                $('.menu-expanded').toggleClass('menu-expanded--yes');

                setTimeout(() => {
                    $('.nav-main__in, .nav-product__wrap').toggleClass('--retract');
                }, 500);
            }
            else {
                $('.nav-main__in, .nav-product__wrap').toggleClass('--retract');

                setTimeout(() => {
                    $('.menu-expanded').toggleClass('menu-expanded--yes');
                }, 1000);
            }
        }
        else
            $('.menu-expanded').toggleClass('menu-expanded--yes');
    });

    //expand program START
    $(".program-controls__more").click(function () {
      const t = $(this);

      if (!t.parent().prev().find('.program-expander').hasClass('program-expander--visible'))
        t.text('Δείτε λιγότερα');
      else {
        t.text('Δείτε περισσότερα');
        $('html, body').animate({
          scrollTop: $("section.programs").offset().top
        }, 250);
      }

        t.parent().prev().find('.program-expander').toggleClass('program-expander--visible');
    });
    //expand program END




    //expand program START
    const coverageExpandTrigger = document.querySelector('.js-coverage__expander');
    const coverageExpander = document.querySelector('.coverage__area');
    if(coverageExpander != null && coverageExpandTrigger != null) {
        coverageExpandTrigger.addEventListener('click', _ => {
            coverageExpander.classList.toggle("coverage__area--expanded");

            if(coverageExpander.classList.contains('coverage__area--expanded'))
                coverageExpandTrigger.innerHTML = 'ΔΕΙΤΕ ΛΙΓΟΤΕΡΑ';
            else
                coverageExpandTrigger.innerHTML = 'ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ';
        });
    }
    //expand coverages END




    const programExpandTriggerMobile = document.querySelectorAll('.js-grid-table-cell--expander');
    for (const programTrigger of programExpandTriggerMobile) {

        programTrigger.addEventListener('click', _ => {
            programExpander.classList.toggle("program-expander--visible");
        });
    }



    var header = document.getElementById("fix-1");
    var menu = document.getElementById("fix-2");
    if(header != null && menu != null){
        // When the user scrolls the page, execute myFunction
        window.onscroll = function () {
            stickyFirst();
            stickySecond();
        };

        // Get the header
        var headerHeight = 0;
        if (window.innerWidth > 780)
            headerHeight = document.getElementById('fix-1').clientHeight;


        //header.style.setProperty('--h1', headerHeight + "px");
        var stick1 = document.getElementById("after-sticky-1");
        stick1.style.setProperty('--p1', headerHeight + "px");

        var menuHeight = document.getElementById('fix-2').clientHeight;
        var stick2 = document.getElementById("after-sticky-2");
        menu.style.setProperty('--h2', menuHeight + "px");
        menu.style.setProperty('--top', (headerHeight - $("#fix-1 .intro__text").height() -38) + "px");
        stick2.style.setProperty('--p2', menuHeight + "px");

        // Get the offset position of the navbar
        var elementFirstFromTop = header.offsetTop;
        var elementSecondFromTop = menu.offsetTop;

        function stickyFirst() {
            if ((window.pageYOffset > elementFirstFromTop)) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");

            }
        }

        function stickySecond() {

            if (window.pageYOffset > (elementSecondFromTop - headerHeight)) {
              menu.classList.add("sticky-second");
            } else {
              menu.classList.remove("sticky-second");
            }
        }
    }

    //grid carousel start
    const carousels = document.querySelectorAll(".js-grid-table");
    const leftButton = document.querySelector(".js-program-left");
    const rightButton = document.querySelector(".js-program-right");
    var order = 0;
    //  if(document.getElementById("programs-table") != null)
       // var programNumber = document.getElementById("programs-table").childElementCount;
    if (leftButton != null && rightButton != null) {
      const limit = $('.js-grid-table').first().find('.program').length - 3;

      //RIGHT CLICK
      $(rightButton).unbind().on('click', _ => {
        if (order < limit) {
          order++;
          const howmuch = (order * (-296)) + 'px';

          $(carousels).each(function() { 
            $(this).css('transform', 'translateX(' + (order * (-296)) + 'px)');
          });
        }
      });

      $(leftButton).unbind().on('click', _ => {
        if (order > 0) {
          --order;
          const howmuch = (order * (-296)) + 'px';

          $(carousels).each(function () {
            $(this).css('transform', 'translateX(' + (order * (-296)) + 'px)');
          });
        }
      });
    }
    //grid carousel end

    //sync scroll of windows START
    var scrollers = document.getElementsByClassName('grid-table-window');

    var scrollerDivs = Array.prototype.filter.call(scrollers, function(testElement) {
        return testElement.nodeName === 'DIV';
    });

    function scrollAll(scrollLeft) {
        scrollerDivs.forEach(function(element, index, array) {
            element.scrollLeft = scrollLeft;
        });
    }

    scrollerDivs.forEach(function(element, index, array) {
        element.addEventListener('scroll', function(e) {
            scrollAll(e.target.scrollLeft);
        });
    });
    //sync scroll of windows END




    //filtering in products
    const filterTrigger = document.querySelector(".filter__trigger");
    const filterResults = document.querySelector(".filter__results");

    if (filterTrigger != null && filterResults != null) {


        filterTrigger.addEventListener('click', _ => {
            filterResults.classList.toggle("filter__results--active");
        });


        const filterClicks = document.querySelectorAll(".filter__item input");
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
        }
    }

    //EMPAND PROGRAMS STARTS




    //js drop item start
    const dropItems = document.querySelectorAll(".js-selected-item");

    if (dropItems != null) {

        for (const dropItem of dropItems) {

            dropItem.addEventListener('click', _ => {

                _removeClasses();
                document.getElementById(dropItem.dataset.value).classList.add('selected-content--visible');

            });

        }
    }
    var els = document.querySelectorAll('.selected-content--visible');
    function _removeClasses() {
        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('selected-content--visible')
        }
    }
    //js drop item end



    function horScroll() {
        const slider = document.querySelector('.js-scroll-items');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
         //   console.log(walk);
        });
  }

  function customRadioButtons() {
    $target = $("input[type=radio]");

    $target.each(function () {
      $(this).after("<label></label>");
      $(this).parent().addClass("cursor-pointer");
    });
  }

    function highLightLabel(){
        $target = $( ".form input[type='text'], .form input[type='email'], .form input[type='tel'], .form textarea" );
        $target.each(function(){
            var text_value=$(this).val();
            if(text_value != '')
            {
              $(this).parents('.form__item').addClass('filled');
              $(this).parents('.form__item-static').removeClass('filled');
            }
        });

        $target.bind('blur', function(){
            if( !$(this).val() || $(this).hasClass('error')) {
                if (!$(this).val())
                $(this).parents('.form__item').removeClass('filled');
                $(this).parents('.form__item-static').removeClass('filled');
            }
        });
        $target.bind('focus', function(){
            if( !$(this).val() || $(this).hasClass('error')) {
              $(this).parents('.form__item').addClass('filled');
              $(this).parents('.form__item-static').removeClass('filled');
            }
        });
    }

    //using an instersection observer for product START

    $('section[id]').each(function () {
      const thisID = $(this).attr("id");
      $(this).addClass('relator').attr("id", "").prepend("<div class='signpost anchor-200' id=" + thisID + "></div>");
    });

    setTimeout(() => {
      // init the observer
      const options = {
        threshold: 0.15
      }

      // simple function to use for callback in the intersection observer
      const changeNav = (entries) => {
        entries.forEach((entry) => {
          // verify the element is intersecting
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // remove old active class
            $('.achorlist__active').removeClass('achorlist__active');
            // get id of the intersecting section
            var id = $(entry.target).find('.signpost').attr('id');
            // find matching link & add appropriate class
            $('[href="#' + id + '"]').addClass('achorlist__active');
          }
        });
      }

      const observer = new IntersectionObserver(changeNav, options);

      // target the elements to be observed
      const sections = document.querySelectorAll('.signpost');
      sections.forEach((section) => {
        observer.observe(section.parentElement);
      });
    }, 200);

    //using an instersection observer for product END

    //TABLE HEIGHT EQUALIZER
  function tableHeightEqualizer() {
    $(".grid-table-cell").attr("style", "");

    $(".program-grid").each(function () {
      const grid = $(this);
      const howmany = $(this).find(".program-attributes .grid-table-cell").length;

      //CUT EXPANDED TABLE WIDTH IN CASE OF 2 COLUMNS
      if ($(window).width() >= 1024)
        if ($(grid).hasClass("program-grid-2")) {
          $(grid).parent().css({ "width" : "800px", "overflow" : "hidden" });
        }

      for (let i = 0; i < howmany; i++) {
        let max = 0;

        //FIND THE MAX PER ROW
        $(grid).find(".grid-table-column").each(function () {
          $(this).find(".grid-table-cell").eq(i).each(function () {
            if ($(this).height() > max)
              max = $(this).outerHeight();
          });

          //SET FIXED HEIGHT
          setTimeout(() => { $(this).find(".grid-table-cell").eq(i).height(max + "px"); }, 500);
        });
      }
    });
  }
})(jQuery);

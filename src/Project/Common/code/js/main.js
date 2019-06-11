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

        var horScrollItems = document.querySelector("js-scroll-items");
        if(horScrollItems != null) horScroll();


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


        //leadership carousel start
        if ($('.js-leadership-slider-image').length) {

            $('.js-leadership-slider-image').slick({
                dots: false,
                arrows: false,
                infinite: false,
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
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                fade: true,
                asNavFor: '.js-leadership-slider-image',
                prevArrow: $('.slick-prev'),
                nextArrow: $('.slick-next')

            });
        }

    });

    $(document).keydown(function (e) {

        if (e.keyCode == 27) {//esc

        }

    });

    //

    var header = document.getElementById("fix-1");
    var menu = document.getElementById("fix-2");
    if(header != null && menu != null){
        // When the user scrolls the page, execute myFunction
        window.onscroll = function () {
            stickyFirst();
            stickySecond();
        };

        // Get the header


        var headerHeight = document.getElementById('fix-1').clientHeight;
        header.style.setProperty('--h1', headerHeight + "px");
        var stick1 = document.getElementById("after-sticky-1");
        stick1.style.setProperty('--p1', headerHeight + "px");



        var menuHeight = document.getElementById('fix-2').clientHeight;
        var stick2 = document.getElementById("after-sticky-2");
        menu.style.setProperty('--h2', menuHeight + "px");
        menu.style.setProperty('--top', headerHeight + "px");
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
    var order = 1;
  //  if(document.getElementById("programs-table") != null)
       // var programNumber = document.getElementById("programs-table").childElementCount;
    if (leftButton != null && rightButton != null) {

        for (const carousel of carousels) {

           // carousel.style.setProperty('--programCount', programNumber);

            rightButton.addEventListener('click', _ => {
                carousel.style.setProperty('--transform', order * (-274 - 32) + "px");
                order++;
            });

            leftButton.addEventListener('click', _ => {
                if (order > 1) {
                    --order;
                    var horder = order - 1;
                    carousel.style.setProperty('--transform', horder * (-274 - 32) + "px");
                }
            });
        }
    }
    //grid carousel end


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



})(jQuery);
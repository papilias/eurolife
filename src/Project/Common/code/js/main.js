(function($) {

    if (!("ontouchstart" in document.documentElement)) {
        $('html').addClass('no-touch');
    }

    $(document).ready(function () {

        if ($('.js-text-slick').length) {
            var $pager = $('.text-slick__pager span');

            $('.js-text-slick').slick({
                dots: true,
                arrows: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                initialSlide: 1,
                fade: true,
                appendDots: $('.reasoning__menu'),
                customPaging: function (slider, i) {
                    var item = $pager[i].innerHTML;
                    return '<a>' + item + '</a>';
                }

            });
        }

    });

    $(document).keydown(function (e) {

        if (e.keyCode == 27) {//esc

        }

    });


    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        stickyFirst();
        stickySecond();
    };

    // Get the header
    var header = document.getElementById("fix-1");
    var headerHeight = document.getElementById('fix-1').clientHeight;
    header.style.setProperty('--h1', headerHeight + "px");
    var stick1 = document.getElementById("after-sticky-1");
    stick1.style.setProperty('--p1', headerHeight + "px");


    var menu = document.getElementById("fix-2");
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

    //grid carousel start
    const carousels = document.querySelectorAll(".js-grid-table");
    const leftButton = document.querySelector(".js-program-left");
    const rightButton = document.querySelector(".js-program-right");
    var order = 1;

    if (leftButton != null && rightButton != null) {

        for (const carousel of carousels) {

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
    //const filterTrigger = document.querySelector(".filter__trigger");
    //const filterResults = document.querySelector(".filter__results");

    //if (filterTrigger != null && filterResults != null) {


    //    filterTrigger.addEventListener('click', _ => {
    //        filterResults.classList.toggle("filter__results--active");
    //    });


    //    const filterClicks = document.querySelectorAll(".filter__item input");
    //    for (const filterClick of filterClicks) {
    //        filterClick.addEventListener('click', _ => {
    //            $('.program').removeClass("program--visible");
    //            const dataAttr = filterClick.dataset.index;

    //            const checkboxes = document.querySelectorAll(".filter__item input");
    //            var datas = [];
    //            //looping checked values and adding to array
    //            for (const checkbox of checkboxes) {
    //                if (checkbox.checked == true) {
    //                    const dataAttr = checkbox.dataset.index;
    //                    datas.push(dataAttr);
    //                }
    //            }

    //            if (datas.length > 0) {
    //                $('.program').removeClass("program--visible");
    //                const programs = document.querySelectorAll('.program');
    //                for (const program of programs) {
    //                    var programActive = new Boolean(false);
    //                    var programDatas = program.dataset.characteristics;
    //                    for (const datum of datas) {

    //                        if (programDatas.includes(datum)) {
    //                            programActive = true;
    //                        }

    //                        if (programActive == true) {
    //                            program.classList.add('program--visible');
    //                            console.log(programActive)
    //                        }
    //                        else program.classList.remove('program--visible');
    //                    }
    //                }
    //            }
    //            else $('.program').addClass("program--visible");

    //        });
    //    }
    //}


})(jQuery);
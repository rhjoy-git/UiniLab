(function ($) {
    "use strict";

    // Spinner
    let spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // Team carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Portfolio isotope and filter
    let portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    // Pricing isotope and filter
    let pricingIsotope = $('.pricing-container').isotope({
        itemSelector: '.pricing-item',
        layoutMode: 'fitRows'
    });
    // Run the default filter function on page load
    const activeFilter = $('#pricing-flters li.active').data('filter');
    pricingIsotope.isotope({
        filter: activeFilter
    });
    // work after click item
    $('#pricing-flters li').on('click', function () {
        $("#pricing-flters li").removeClass('active');
        $(this).addClass('active');

        pricingIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    // Navbar icon toggler in mobile screen
    let navbarToggler = document.querySelector(".navbar-toggler");
    let hamburgerIcon = navbarToggler.querySelector("i");

    navbarToggler.addEventListener("click", function () {
        hamburgerIcon.classList.toggle("fa-bars");
        hamburgerIcon.classList.toggle("fa-times");
    });

    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            let navbarShow = document.querySelector(".navbar-collapse.show");
            if (navbarShow) {
                navbarShow.classList.remove("show");
                hamburgerIcon.className = "fa fa-bars";
            }
        });
    });


});
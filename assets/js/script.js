 $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            animateOut: 'fadeOut',
        });
    });

    
    Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: true,
    animated: true,
    showCloseButton: true,
    Thumbs: {
        autoStart: true,
    },
});
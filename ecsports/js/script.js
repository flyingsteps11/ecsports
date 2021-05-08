$(document).ready(function () {
    const owl = $("#upcoming-matches").owlCarousel({
        dots: false,
        nav: false,
        items: 1,
        margin: 30,
        onInitialized: counter1,
        onChanged: counter1,
    });
    $('.upcoming-matches-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.upcoming-matches-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    function counter1(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('.slider-counter').text(slides.relative(slides.current()) + 1 + ' из ' + slides.items().length);
    }

    const owl1 = $("#past-matches").owlCarousel({
        dots: false,
        nav: false,
        items: 1,
        margin: 30,
        onInitialized: counter2,
        onChanged: counter2,
    });
    $('.past-matches-next').click(function () {
        owl1.trigger('next.owl.carousel');
    });

    $('.past-matches-prev').click(function () {
        owl1.trigger('prev.owl.carousel', [300]);
    });
    function counter2(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('.slider-counter').text(slides.relative(slides.current()) + 1 + ' из ' + slides.items().length);
    }
});

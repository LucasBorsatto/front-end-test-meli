(function (window) {
    'use strict';

    function qS(selector) { return document.querySelector(selector); };

    var carouselOptions = {
        'limitPerPage': 3,
    };

    // Create a new carousel with option
    var carousel = new ch.Carousel(qS('.ch-carousel'), carouselOptions);

}(this));
(function (window) {
    'use strict';

    function qS(selector) { return document.querySelector(selector); };

    // Carousel with options
    var carouselOptions = {
        'limitPerPage': 3,
    };
    var carousel = new ch.Carousel(qS('.ch-carousel'), carouselOptions);

    // Zoom component
    var zoom = new ch.Zoom(qS('.product-description .big-image a'));

    // Tooltip example component with options
    var tooltipOptions = {
        'side': 'bottom',
        'align': 'left'
    };
    var tooltip = new ch.Tooltip(qS('.tooltip img'), tooltipOptions);

}(this));
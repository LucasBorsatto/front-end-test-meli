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
        'align': 'left',
        'content': 'Apple Ipad Mini 4 16gb 4g<p class=\'price\'><span class=\'ch-price\'>$ 6.799<sup>99</sup></span></p><span class=\'installment\'>6x <span class=\'ch-price\'>$ 1.300<sup>00</sup></span></span>'
    };
    var tooltip = new ch.Tooltip(qS('.tooltip img'), tooltipOptions);

}(this));
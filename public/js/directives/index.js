'use strict';

require('angular').module('main-app')

    .directive('appParallax', require('./app-parallax'))
    .directive('appFooter', require('./app-footer'))
    .directive('appNavbar', require('./app-navbar'));
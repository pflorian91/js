/**
 * InterpolateProviderConfig created on 12/28/15 10:00 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('expressionSymbols')
        .config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('__');
            $interpolateProvider.endSymbol('__');
        }]);

})();

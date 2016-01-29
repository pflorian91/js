/**
 * oneToTenDirective created on 1/9/16 6:07 PM.
 *
 * @description Filters a
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('inputFilteringWithFormatters')
        .directive('oneToTen', ['$filter', function ($filter) {
            return {
                require: '?ngModel',
                link: function (scope, ele, attrs, ngModel) {
                    if (!ngModel) return;

                    ngModel.$formatters.unshift(function (viewValue) {
                        return $filter('uppercase')(viewValue);
                    });
                }
            };
        }]);

})();

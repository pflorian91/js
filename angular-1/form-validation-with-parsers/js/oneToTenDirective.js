/**
 * oneToTenDirective created on 1/9/16 5:30 PM.
 *
 * @description Will validate the viewValue on the fields that it is applied.
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('parsersValidationApp')
        .directive('oneToTen', [function () {
            return {
                require: '?ngModel',
                link: function (scope, ele, attrs, ngModel) {

                    if (!ngModel) return;

                    ngModel.$parsers.unshift(
                        function (viewValue) {
                            if (viewValue >= 1 && viewValue <= 10) {
                                ngModel.$setValidity('oneToTen', true);
                                return viewValue;
                            } else {
                                ngModel.$setValidity('oneToTen', false);
                                return undefined;
                            }
                        });
                }
            };
        }]);
})();

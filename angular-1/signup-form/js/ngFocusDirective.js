/**
 * ngFocusDirective created on 1/29/16 11:19 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('signupForm')
        .directive('ngFocus', [function () {
            var FOCUS_CLASS = 'ng-focused';

            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, controller) {

                    controller.$focused = false;

                    element
                        .bind('focus', function (event) {
                            element.addClass(FOCUS_CLASS);
                            scope.$apply(function () {
                                controller.$focused = true;
                            });
                        })
                        .bind('blur', function (event) {
                            element.removeClass(FOCUS_CLASS);
                            scope.$apply(function () {
                                controller.$focused = false;
                            });
                        });
                }
            };

        }]);

})();

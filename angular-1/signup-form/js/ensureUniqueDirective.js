/**
 * ensureUniqueDirective created on 1/29/16 11:07 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('signupForm')
        .directive('ensureUnique', [function ($http) {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, controller) {
                    scope.$watch(attrs.ngModel, function (newValue) {
                        if (!newValue) {
                            return;
                        }

                        $http({
                            method: 'POST',
                            url: '/api/check/' + attrs.ensureUnique,
                            data: {
                                field: attrs.ensureUnique,
                                value: scope.ngModel
                            }
                        })
                        .success(function (data) {
                            controller.$setValidity('unique', data.isUnique);
                        })
                        .error(function (data) {
                            controller.$setValidity('unique', false);
                        });

                    });
                }
            };
        }]);

})();

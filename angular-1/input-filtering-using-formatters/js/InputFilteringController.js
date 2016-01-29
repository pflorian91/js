/**
 * InputFilteringController created on 1/9/16 6:07 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('inputFilteringWithFormatters')
        .controller('InputFilteringController', ['$scope', function ($scope) {
            $scope.myField = 'abc';

            $scope.changeValue = function (newValue) {
                $scope.myField = newValue;
            };
        }]);

})();

/**
 * ParseController created on 12/28/15 5:32 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('parsingExpressions')
        .controller('ParseController', ['$scope', '$parse', function ($scope, $parse) {
            $scope.$watch('expr', function (newVal, oldVal, scope) {
                if (newVal !== oldVal) {
                    // Let's set up our parseFun with the expression
                    var parseFun = $parse(newVal);
                    // Get the value of the parsed expression
                    $scope.parsedValue = parseFun(scope);
                }
            });
        }]);

})();

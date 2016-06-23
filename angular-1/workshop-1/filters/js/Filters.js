/**
 * Filters created on 6/21/16 11:25 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('Filters', []);

    angular
        .module('Filters')
        .filter('capitalize', function() {
            return function(value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            };
        })
        .filter('splitString', function () {
          return function (myString, numberOfPieces) {
            var lengthOfPieces = Math.round(myString.length / numberOfPieces);
            var finalString = '';
            for ( var i = 0; i < myString.length; i += lengthOfPieces ) {
                finalString += myString.slice(i, i + lengthOfPieces) + " ";
            }
            return finalString;
          };
        });

    angular
        .module('Filters')
        .controller('FiltersController', ['$scope', '$filter', function ($scope, $filter) {

            var today = new Date();

            $scope.myModel = {
                today: today,
                todayFilteredInController: $filter('date')(today, 'longDate'),
                myLongString: $filter('splitString')('Seems as though javascript requires the split to use single quotes', 10)
            };

        }]);

})();

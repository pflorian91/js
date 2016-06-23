/**
 * DataBinding1 created on 6/21/16 4:08 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('DataBinding1', []);

    angular
        .module('DataBinding1')
        .controller('DataBinding1Controller', ['$scope', function ($scope) {

            $scope.myModel = {
                name: 'Data binding',
                type: true
            };

            $scope.testAngular = 'Hello there!';

            console.log($scope.myModel);

            $scope.saveChanges = function () {
                console.log($scope.myModel);
            };

        }]);

})();

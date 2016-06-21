/**
 * Scopes created on 6/21/16 4:49 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('Scopes', []);

    angular
        .module('Scopes')
        .controller('CarController', ['$scope', function ($scope) {

            $scope.myModel = {
                name: 'Model from car controller'
            };

            $scope.setNumber = function () {
                $scope.myModel.number = 1;
            };

            $scope.clearNumber = function () {
                $scope.myModel.number = null;
            };

        }])

        .controller('BMWController', ['$scope', function ($scope) {

            $scope.myModel.name = 'Model from bmw controller';

            $scope.setNumber = function () {
                $scope.myModel.number = 2;
            };

            // note that there is no clearNumber function in here

        }])

        .controller('TrainController', ['$scope', function ($scope) {

            $scope.myModel = {
                name: 'Model from train controller'
            };

            $scope.setNumber = function () {
                $scope.myModel.number = 3;
            };

            $scope.clearNumber = function () {
                $scope.myModel.number = null;
            };

        }]);

})();

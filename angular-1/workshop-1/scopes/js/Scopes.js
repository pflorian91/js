

    angular
        .module('Scopes', []);

    angular
        .module('Scopes')

        // services

        .factory('CarRepositoryFactory', [function () {

            function getCars () {
              return [
                'car1',
                'car2'
              ];
            }

            return {
              getCars: getCars
            };
        }])

        .service('CarRepositoryService', [function () {
            var that = this;

            that.getCars = function () {
              return [
                'car1',
                'car2'
              ];
            };

            return that;
        }])

        .controller('TestWithoutArrayController', function ($scope, CarRepositoryService) {
            $scope.clockModel = new Date();
            var cars = CarRepositoryService.getCars();
            $scope.cars = CarRepositoryService.getCars();
            console.log(cars);

        })

        .controller('CarController', ['$scope', '$rootScope', function ($scope, $rootScope) {

            $rootScope.clock = new Date();

            $rootScope.updateClock = function () {
                $rootScope.clock = new Date();
            };

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

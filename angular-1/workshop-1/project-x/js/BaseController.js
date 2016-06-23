
angular
  .module('ProjectXApp')
  .controller('BaseController', ['$scope', 'CountryLocationFactory', function ($scope, CountryLocationFactory) {

    CountryLocationFactory
      .findMyCountry()
      .then(function (data) { // resolved promise
        $scope.myLocationIs = data.country;
      }, function (reason) { // rejected promise
        $scope.myLocationIs = 'unknown location.';
      });

  }]);

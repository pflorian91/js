
angular
  .module('ProjectXApp')
  .factory('CountryLocationFactory', ['$http', '$q', function ($http, $q) {

    function findMyCountry() {
      var endpoint = 'http://ip-api.com/json',
          deferred = $q.defer();

      $http
        .get(endpoint) // returns a promise


        .then(function (response) { // success - the endpoint returned 200 - 299
          deferred.resolve(response.data);
        }, function (reason) {  // error - the endpoint returned 400 - 599
          deferred.reject(reason);
        });

        // propagate the promise further
      return deferred.promise;
    }

    return {
      findMyCountry: findMyCountry
    };
  }]);

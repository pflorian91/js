angular
  .module('ProjectXApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'HomePageController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

  }]);

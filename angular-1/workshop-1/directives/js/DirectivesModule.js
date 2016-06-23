/**
 * DirectivesModule created on 6/22/16 12:06 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('DirectivesModule', []);

    angular
        .module('DirectivesModule')
        .directive('calendarWidget', [function () {
            return {
                restrict: 'E',
                require: 'ngModel',
                scope: {
                    dateModel: '=ngModel'
                },
                template: '<div class="calendar" ng-show="dateModel !== null">' +
                          '<div class="calendar-header">{{ dateModel | date:"yyyy" }}</div>' +
                          '<div class="calendar-body">{{ dateModel | date:"d":"+0000" }} {{ dateModel | date:"MMMM" }}</div>' +
                          '</div>'
            };
        }])
        .directive('tableWidget', function () {
            return {
              restrict: 'A',

              link: function (scope, element, attrs, controller, transcludeFn) {

                  element.on('click', function(e) {
                    var keyName = attrs.key;

                    console.log('Before: ', scope.myModel.countriesList);

                    if (keyName === 'country') {
                      scope.myModel.countriesList.sort(function(a, b){
                          var keyA = a.country,
                              keyB = b.country;
                          if(keyA < keyB) return -1;
                          if(keyA > keyB) return 1;
                          return 0;
                      });
                    } else {
                      scope.myModel.countriesList.sort(function(a, b){
                          var keyA = a.capital,
                              keyB = b.capital;
                          if(keyA < keyB) return -1;
                          if(keyA > keyB) return 1;
                          return 0;
                      });
                    }

                    scope.$apply();

                  });
              }
            };
        });

    angular
        .module('DirectivesModule')
        .controller('DirectivesController', ['$scope', function ($scope) {

          $scope.shouldIShowTheSelect = function () {
            return true;
          };

            $scope.myModel = {
                countries: [
                    'Afghanistan',
                    'Albania',
                    'Algeria',
                    'Andorra',
                    'Angola',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                ],
                country: 'Andorra',
                today: new Date(),
                countriesList: [
                  {
                    country: "Romania",
                    capital: "Bucharest"
                  },
                  {
                    country: "France",
                    capital: "Paris"
                  },
                  {
                    country: "Belgium",
                    capital: "Brussels"
                  }
                ]
            };

        }]);

})();

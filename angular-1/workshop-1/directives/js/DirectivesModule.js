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
        }]);

    angular
        .module('DirectivesModule')
        .controller('DirectivesController', ['$scope', function ($scope) {

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
                today: new Date()
            };

        }]);

})();

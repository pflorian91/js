/**
 * ChildController created on 12/28/15 12:45 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('controllerHierarchy')
        .controller('ChildController', ['$scope', function ($scope) {
            $scope.sayHello = function () {
                $scope.person.name = 'Ari Lerner';
            };
        }]);

})();

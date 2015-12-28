/**
 * ParentController created on 12/28/15 12:39 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('controllerHierarchy')
        .controller('ParentController', ['$scope', function ($scope) {
            $scope.person = {
                greeted: true
            };
        }]);

})();

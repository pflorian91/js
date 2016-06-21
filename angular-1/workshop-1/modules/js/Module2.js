/**
 * Module2 created on 6/21/16 2:58 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('Module2', []);

    angular
        .module('Module2')
        .controller('ControllerFromModule2', ['$scope', function ($scope) {
            $scope.myName = 'I am from module 2 controller';
        }]);

})();

/**
 * Module1 created on 6/21/16 2:56 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    /*
    * This is an AngularJS module definition
    * It is a setter
    * */
    angular
        .module('Module1', ['Module2']);

    /*
    * This is a getter
    * */
    angular
        .module('Module1')
        .controller('ControllerFromModule1', ['$scope', function ($scope) {
            $scope.myName = 'I am part of module 1 from controller';
        }]);

})();

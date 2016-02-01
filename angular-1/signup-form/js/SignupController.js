/**
 * SignupController created on 1/29/16 10:28 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('signupForm')
        .controller('SignupController', ['$scope', function ($scope) {

            $scope.signupForm.submitted = false;
            $scope.signupForm = function () {
                if ($scope.signupForm.$valid) {

                } else {
                    $scope.signupForm.submitted = true;
                }
            };

        }]);

})();

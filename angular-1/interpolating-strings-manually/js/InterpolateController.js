/**
 * InterpolateController created on 12/28/15 5:52 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    'use strict';

    angular
        .module('stringInterpolation')
        .controller('InterpolateController', ['$scope', '$interpolate', function ($scope, $interpolate) {
            $scope.$watch('emailBody', function (body) {
                if (body) {
                    var template = $interpolate(body);
                    $scope.previewText = template({to: $scope.to});
                }
            });
        }]);

})();

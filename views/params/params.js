/**
 * Created by hippias on 20/06/2016.
 */
App.controller('ParamsController', function($scope) {
    $scope.variableController = "esh";

    $scope.alertUpperCase = function () {
        alert($scope.variableController.toUpperCase());
    };
});
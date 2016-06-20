/**
 * Created by hippias on 20/06/2016.
 */
App.controller('ParamsController', function($scope, Settings) {
    $scope.settings = angular.copy(Settings.values);

    $scope.save = function () {
      Settings.values = angular.copy($scope.settings);
    };
});
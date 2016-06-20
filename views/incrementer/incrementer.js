App.controller('IncrementerController', function($scope, Settings) {
    $scope.value = 1;

    $scope.increment = function () {
        $scope.value += Settings.values.increment;
    };

    $scope.decrement = function () {
        $scope.value -= Settings.values.increment;
    };
});
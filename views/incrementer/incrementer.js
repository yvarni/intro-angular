App.controller('IncrementerController', function($scope, Settings, $state) {
    $scope.value = $state.value || 1;

    $scope.history = $state.history || [];

    $scope.increment = function () {
        $scope.value += Settings.values.increment;
        $scope.history.push({ timestamp: Date.now(), value: $scope.value });
        this.saveState();
    };

    $scope.decrement = function () {
        $scope.value -= Settings.values.increment;
        $scope.history.push({ timestamp: Date.now(), value: $scope.value });
        $scope.saveState();
    };

    $scope.saveState = function () {
        $state.value = $scope.value;
        $state.history = angular.copy($scope.history);
    }
});
function mainCtrl ($scope, $state) {
    $scope.onLeft = true;
    $scope.pull = function(){
        $scope.onLeft = !$scope.onLeft;
    }
}

mainCtrl['$inject'] = ['$scope','$state'];
angular.module('clj-forge').controller('mainCtrl',mainCtrl);
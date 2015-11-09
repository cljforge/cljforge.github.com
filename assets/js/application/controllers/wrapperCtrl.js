function wrapperCtrl($scope, $state, $rootScope) {
    $scope.toggle = function () {
        $rootScope.sidebarOpened = !$scope.sidebarOpened
    };

    $scope.go = function (state) {
        $state.go(state);
    }
}

wrapperCtrl['$inject'] = ['$scope', '$state', '$rootScope'];
angular.module('clj-forge').controller('wrapperCtrl', wrapperCtrl);
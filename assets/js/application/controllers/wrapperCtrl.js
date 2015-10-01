function wrapperCtrl ($scope, $state,$rootScope) {
    $scope.toggle = function(){
        $rootScope.sidebarOpened = !$scope.sidebarOpened
    }
}

wrapperCtrl['$inject'] = ['$scope','$state','$rootScope'];
angular.module('clj-forge').controller('wrapperCtrl',wrapperCtrl);
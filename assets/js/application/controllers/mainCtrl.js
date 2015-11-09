function mainCtrl ($scope, $state) {
    console.log($state);
}

mainCtrl['$inject'] = ['$scope','$state'];
angular.module('clj-forge').controller('mainCtrl',mainCtrl);
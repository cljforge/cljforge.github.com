function mainCtrl ($scope, $state) {
    console.log('main ctrl');
}

mainCtrl['$inject'] = ['$scope','$state'];
angular.module('clj-forge').controller('mainCtrl',mainCtrl);
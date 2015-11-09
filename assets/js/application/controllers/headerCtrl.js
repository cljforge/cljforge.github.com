function headerCtrl($scope, $http) {

   $http.get('assets/facts.json').then(function(result){
      $scope.fact = result.data[Math.floor(Math.random() * (result.data.length+1))];
      console.log($scope.fact);
   });
}

headerCtrl['$inject'] = ['$scope','$http'];
angular.module('clj-forge').controller('headerCtrl',headerCtrl);
function headerCtrl($scope, $http) {

   function resetFact(){
      $http.get('assets/facts.json').then(function(result){
         $scope.fact = result.data[Math.floor(Math.random() * (result.data.length+1))];
      });
   }

   resetFact();
   $scope.$on('scrollBottom', resetFact)
}

headerCtrl['$inject'] = ['$scope','$http'];
angular.module('clj-forge').controller('headerCtrl',headerCtrl);
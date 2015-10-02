function wrapperCtrl ($scope, $state,$rootScope) {
    $scope.toggle = function(){
        $rootScope.sidebarOpened = !$scope.sidebarOpened
    };

    $scope.go = function(state){
        $scope.toggle();
        var flasher = $('#flasher');

        //flasher
        //    .transition({
        //        width : '2000',
        //        height : '2000',
        //        'margin-top' : '-1000px',
        //        right : '-1000px'
        //
        //    },
        //    function(element){
        //        $state.go(state)
        //            .then(function(state){
        //                flasher.transition({opacity: 0});
        //            });
        //    })
    }
}

wrapperCtrl['$inject'] = ['$scope','$state','$rootScope'];
angular.module('clj-forge').controller('wrapperCtrl',wrapperCtrl);
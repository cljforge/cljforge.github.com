function wrapperCtrl($scope, $state, $rootScope) {
    $scope.toggle = function () {
        $rootScope.sidebarOpened = !$scope.sidebarOpened
    };

    $scope.go = function (state) {
        var flasher = $('#flasher');
        flasher
            .transition({
                'display': 'block'
            })
            .transition({
                'opacity': '1'
            },
            'fast'
            ,
            function (element) {
                $scope.toggle();
                $state.go(state)
                    .then(function (state) {
                        flasher
                            .transition({
                                opacity: 0
                            },{
                                display: 'none'
                            });
                    });
            })
    }
}

wrapperCtrl['$inject'] = ['$scope', '$state', '$rootScope'];
angular.module('clj-forge').controller('wrapperCtrl', wrapperCtrl);
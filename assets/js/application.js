var application =
    angular.module('clj-forge',
        ['ui.router','ui.bootstrap']);


application.run(['$rootScope', function($rootScope){

    $rootScope.sidebarOpened = false;

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            $rootScope.sidebarOpened = false;
        })

}]);

application.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider, $translateProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('wrapper',{
                url : '/',
                views: {
                    "wrapper@" : {
                        templateUrl: 'assets/html/wrapper.html',
                        controller: wrapperCtrl
                    }
                }
            })
            .state('wrapper.main', {
                url : 'main',
                views : {
                    "header@wrapper":{
                        templateUrl : 'assets/html/main.html',
                        controller: mainCtrl
                    },
                    "content@wrapper":{
                        templateUrl : 'assets/html/main.html',
                        controller: mainCtrl
                    }
                }
            })
            .state('wrapper.components',{
                url : 'components',
                views: {
                    'content@wrapper' : {
                        templateUrl : 'assets/html/components.html'
                    }
                }
            })
            .state('wrapper.about',{
                url : 'components',
                views: {
                    'content@wrapper' : {
                        templateUrl : 'assets/html/components.html'
                    }
                }
            })
            .state('wrapper.reply',{
                url : 'components',
                views: {
                    'content@wrapper' : {
                        templateUrl : 'assets/html/components.html'
                    }
                }
            });
    }]);
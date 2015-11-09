application.config(['$stateProvider', '$urlRouterProvider',
   function ($stateProvider, $urlRouterProvider, $translateProvider,$rootScope) {
      $urlRouterProvider.otherwise('/main');

      var header = {
         templateUrl: 'assets/html/fact.html',
         controller: headerCtrl
      };

      var footer = {
         templateUrl: 'assets/html/footer.html'
      };

      function content(content) {
         return {
            "header@wrapper": header,
            "footer@wrapper": footer,
            "content@wrapper": content
         }
      }

      $stateProvider
         .state('wrapper', {
            url: '/',
            views: {
               "wrapper@": {
                  templateUrl: 'assets/html/wrapper.html',
                  controller: 'wrapperCtrl'
               }
            }
         })
         .state('wrapper.main', {
            url: 'main',
            views: content({
               templateUrl: 'assets/html/content/main.html',
               controller: 'mainCtrl'
            })
         })
         .state('wrapper.components', {
            url: 'components',
            views: content({
               templateUrl: 'assets/html/content/components.html'
            })
         })
         .state('wrapper.about', {
            url: 'components',
            views: content({
               templateUrl: 'assets/html/content/components.html'
            })
         })
         .state('wrapper.reply', {
            url: 'components',
            views: content({
               templateUrl: 'assets/html/content/components.html'
            })
         });
   }]);
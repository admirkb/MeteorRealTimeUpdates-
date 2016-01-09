angular.module('bugTracker')
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
          .state('bugs', {
              url: '/bugs',
              template: '<bugs-list></bugs-list>'
          });

        $urlRouterProvider.otherwise("/bugs");
    });


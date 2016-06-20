

var App = angular.module('intro-angular', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                controller: 'HomeController',
                templateUrl:'../views/home/home.html'
            })
            .state('incrementer', {
                controller:'IncrementerController',
                templateUrl:'../views/incrementer/incrementer.html'
            });
    });


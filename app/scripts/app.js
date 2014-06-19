'use strict';

/**
 * @ngdoc overview
 * @name waveWebsiteApp
 * @description
 * # waveWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('waveWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl'
            })
            .when('/news', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl'
            })
            .when('/careers', {
                templateUrl: 'views/careers.html',
                controller: 'CareersCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  });

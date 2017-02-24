//= require angular-1.6.2/angular.js
//= require angular-1.6.2/angular-resource.js
//= require angular-1.6.2/angular-route.js
//= require_self
//= require_tree ./controllers

var app = angular.module('Rails50Doodle', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'assets/templates/welcome/index.html'
  })
  .when('/posts', {
    templateUrl: 'assets/templates/posts/index.html',
    controller: 'PostsController'
  })
});

console.log('router loaded');

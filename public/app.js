var app = angular.module('posts-workshop', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'partials/posts.html',
       controller: 'PostsController'
   });
   $locationProvider.html5Mode(true);
});



app.controller('ApplicationController', ['$scope', '$http', function ($scope, $http) {

}]);

var app = angular.module('posts-workshop', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'partials/posts.html',
       controller: 'PostsController'
   });
   $locationProvider.html5Mode(true);
});


app.factory('PostsService', ['$http', function ($http) {
  return {
    getPosts: function () {
    return $http.get('/api/posts').then(function (posts) {
       return posts.data;
      });
    }
  };
}]);


app.controller("PostsController", ['$scope','PostsService', function ($scope, PostsService) {
  PostsService.getPosts().then(function (posts) {
    $scope.posts=posts;
  });
}]);

app.controller('ApplicationController', ['$scope', '$http', function ($scope, $http) {

}]);

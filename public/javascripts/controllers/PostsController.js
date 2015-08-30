
app.controller("PostsController", ['$scope','PostsService', function ($scope, PostsService) {
  PostsService.getPosts().then(function (posts) {
    $scope.posts=posts;
  });
}]);


app.factory('PostsService', ['$http', function ($http) {
  return {
    getPosts: function () {
    return $http.get('/api/posts').then(function (posts) {
       return posts.data;
      });
    }
  };
}]);

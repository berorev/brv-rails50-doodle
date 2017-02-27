var app = angular.module('Rails50Doodle');

app.controller('PostsController', function($scope, Post) {
  $scope.moment = moment;
  $scope.posts = Post.query();
});

console.log('controller loaded');

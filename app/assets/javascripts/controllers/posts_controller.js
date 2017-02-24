var app = angular.module('Rails50Doodle');

app.controller('PostsController', function($scope) {
  $scope.moment = moment;
  $scope.posts = [
    { title: 'Title #1', content: 'Content #1', modified: 1487937600 },
    { title: 'Title #2', content: 'Content #2', modified: 1487851200 },
    { title: 'Title #3', content: 'Content #3', modified: 1487764800 }
  ];
});

console.log('controller loaded');

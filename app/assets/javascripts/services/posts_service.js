var app = angular.module('Rails50Doodle');

app.factory('Post', function($resource) {
  return $resource('/posts/:id', null, {
    update: { method: 'PUT' }
  });
});
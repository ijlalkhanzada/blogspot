'use strict';

angular.module('blogpostApp')
  .controller('ViewPostCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $http.get('/api/viewPosts').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      console.log('Get View ):',awesomeThings)
    });

  });

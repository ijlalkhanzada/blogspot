'use strict';

angular.module('blogpostApp')
  .controller('ViewPostCtrl', function ($scope,$http, $state) {
    console.log("working");
      angular.element('body').addClass('red');
      $scope.message = 'Hello';
    $http.get('/api/savePosts/' + $state.params.id).success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      console.log('Get View Obj ):',awesomeThings)
    });

  });

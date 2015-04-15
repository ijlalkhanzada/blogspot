'use strict';

angular.module('blogpostApp')
  .controller('LoginCtrl', function ($scope, Auth, $location,$timeout) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

        if(form.$valid) {
          console.log('submitted', $scope.submitted)

          Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/blog');
        })
        .catch( function(err) {
              $scope.errors.other = err.message;
        });
      }
    };

  });

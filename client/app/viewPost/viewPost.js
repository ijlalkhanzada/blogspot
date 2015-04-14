'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewPost', {
        url: '/viewPost/:id',
        templateUrl: 'app/viewPost/viewPost.html',
        controller: 'ViewPostCtrl'
      });
  });

'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('savePost', {
        url: '/savePost',
        templateUrl: 'app/savePost/savePost.html',
        controller: 'SavePostCtrl'
      });
  });
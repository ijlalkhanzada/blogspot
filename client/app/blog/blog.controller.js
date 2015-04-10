'use strict';

angular.module('blogpostApp')
  .controller('BlogCtrl', function ($scope,$http,$modal, $log,$state) {
    $scope.message = 'Hello';

    /****************************************jQuery Function for toggle Nave Start**********************************/
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      console.log('Start Toggle Menu');
    });
    $('.arrow').on("click", function (event) {
      $('.arrow-img').toggleClass('rotate');
      $('.arrow-img').toggleClass('rotate-reset');
    });
      /****************************************jQuery Function for toggle Nave End**********************************/

      $http.get('/api/blogs').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        console.log('Get Blog ):',awesomeThings)
      });
      $scope.addThing = function() {
        if(!$scope.blogTextArea) {
          console.log('adddthing');
          return false;
        }
        $http.post('/api/savePosts', { name: $scope.blogTextArea}).success( function(){
          $http.get('/api/blogs').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            console.log('Get Blog ):',awesomeThings)
          });
          $state.go('savePost')
        });
        $scope.blogTextArea = '';
        console.log('Save Blog ):',$scope.blogTextArea)
      };
  });

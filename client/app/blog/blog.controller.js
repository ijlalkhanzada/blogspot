'use strict';

angular.module('blogpostApp')
  .controller('BlogCtrl', function ($scope,$http,$modal, $log) {
    $scope.message = 'Hello';

    /****************************************jQuery Function for toggle Nave Start**********************************/
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      console.log('Start Toggle Menu')
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
        $http.post('/api/blogs', { name: $scope.blogTextArea}).success( function(){
          $http.get('/api/blogs').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            console.log('Get Blog ):',awesomeThings)
          });

        });

        $scope.blogTextArea = '';
        console.log('Save Blog ):',$scope.blogTextArea)
      };
      $scope.deleteThing = function() {
      $http.delete('/api/blogs').success(function(){
        console.log('ssssssssssss')
      });
    };

    $scope.checkAll = function () {
      console.log('selected');
      if ($scope.selectedAll) {
        $scope.selectedAll = true;

      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.awesomeThings,function(item){
        item.Selected = $scope.selectedAll;
      });
    };
  });

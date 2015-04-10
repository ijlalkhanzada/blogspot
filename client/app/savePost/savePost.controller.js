'use strict';

angular.module('blogpostApp')
  .controller('SavePostCtrl', function ($scope,$http,$state,filterFilter) {
    $scope.message = 'Hello';
    $http.get('/api/savePosts').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      console.log('Get Blog ):',awesomeThings)
    });
    $scope.addThing = function() {
      if(!$scope.blogTextArea) {
        console.log('adddthing');
        return false;
      }
      $http.post('/api/savePosts', { name: $scope.blogTextArea}).success( function(){
        $state.go('savePost')
        $http.get('/api/savePosts').success(function(awesomeThings) {

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
      if($scope.selectedAll) {
        $scope.selectedAll = true;


      } else {
        $scope.selectedAll = false;
      }

      angular.forEach($scope.awesomeThings,function(item){
        item.Selected = $scope.selectedAll;
      });
    };
    $scope.addView = function(id) {
      $state.go('viewPost');
      console.log('view Posts');
      if(!$scope.blogTextArea) {
        return false;
      }
      $http.get('/api/viewPosts' ).success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        console.log('Get View ):',awesomeThings)
      });



    };
    function deletePost(index){
      $http.delete('/api/savePosts/' + $scope.awesomeThings[index]._id).success(function(){
        console.log('ssssssssssss')
        $scope.awesomeThings.splice(index, 1);
      });
    }
    $scope.remove = function(){
      console.log($scope.awesomeThings)
      for(var i = 0 ; i < $scope.awesomeThings.length ; i++){
        if($scope.awesomeThings[i].Selected == true){
          deletePost(i);
          console.log('Selectedd',i)
        }
      }
    };
  });

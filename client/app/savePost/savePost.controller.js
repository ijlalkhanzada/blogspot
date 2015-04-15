'use strict';

angular.module('blogpostApp')
  .controller('SavePostCtrl', function ($scope,$http,$state,filterFilter) {

    angular.element('body').removeClass('red');
    $scope.message = 'Hello';
    $http.get('/api/savePosts').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      console.log('Get Blog ):',awesomeThings)
    });

    $scope.addThing = function() {
      if(!$scope.htmlVariable) {
        console.log('adddthing');
        return false;

      }
      $scope.date = new Date();
      $http.post('/api/savePosts', { name: $scope.htmlVariable}).success( function(){

        $state.go('savePost')

        $http.get('/api/savePosts').success(function(awesomeThings) {

          $scope.awesomeThings = awesomeThings;

          console.log('Get Blog ):',awesomeThings)
        });
      });
      $scope.htmlVariable = '';
      console.log('Save Blog ):',$scope.htmlVariable)
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
        console.log('Selected');
      }

      angular.forEach($scope.awesomeThings,function(item){
        item.Selected = $scope.selectedAll;
      });
    };
    $scope.addView = function(id) {
      $state.go('viewPost',{id: id});
      console.log('view Posts');
    };
    function deletePost(index){
      $http.delete('/api/savePosts/' + $scope.awesomeThings[index]._id).success(function(){
        console.log('ssssssssssss')
        $scope.awesomeThings.splice(index, 1);
      });
    }
    function editPost(index){
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

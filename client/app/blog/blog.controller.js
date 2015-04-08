'use strict';

angular.module('blogpostApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.message = 'Hello';

    /****************************************jQuery Function for toggle Nave Start**********************************/
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      console.log('Start Toggle Menu')
    });
      /****************************************jQuery Function for toggle Nave End**********************************/



  });

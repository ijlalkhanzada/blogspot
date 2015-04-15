'use strict';

angular.module('blogpostApp')
  .controller('SignupCtrl', function ($scope, Auth, $location,$http,$upload) {
        $scope.user = {};
        $scope.errors = {};
        $scope.images = '';

    $scope.fileReaderSupported = window.FileReader !== null && (window.FileAPI == null || FileAPI.html5 !== false);
    $scope.upload = function (files) {
      console.log(files.path)
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            var loadFile = function (fileReader, index) {
              fileReader.onload = function (e) {
                $scope.images = e.target.result;
                $scope.$apply();
              };
            }(fileReader, i);
          }
          console.log('ijlal:::::::',file,file.name);
        }
      }
    };
        $scope.register = function (form) {

          $scope.$watch('files', function () {
            $scope.upload($scope.files);
          });
          $scope.submitted = true;

          if (form.$valid) {
            Auth.createUser({
              description: $scope.user.description,
              title: $scope.user.title,
              image: $scope.user.images,
              name: $scope.user.name,
              email: $scope.user.email,
              password: $scope.user.password
            })
              .then(function () {
                console.log('Title:', $scope.user.title)
                console.log('Description:', $scope.user.description)

                // Account created, redirect to home
                $location.path('/');
              })
              .catch(function (err) {
                err = err.data;
                $scope.errors = {};

                // Update validity of form fields that match the mongoose errors
                angular.forEach(err.errors, function (error, field) {
                  form[field].$setValidity('mongoose', false);
                  $scope.errors[field] = error.message;
                });
              });
          }
        };

  });

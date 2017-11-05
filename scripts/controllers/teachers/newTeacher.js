'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:newTeacherCtrl
 * @description
 * # newEscortCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('newTeacherCtrl', function ($scope, $timeout, $q, $mdDialog, $state, Upload, Teacher, Constants, Configs, EndPoints) {
    this.isOpen = false;
    $scope.teacher = {};
    $scope.readonly = false;
    $scope.verifyPassword = function(password, verify) {
      if(password == verify) {
        $scope.teacher.verified = true;
      }
      else {
        $scope.teacher.verified = false;
      }
    }
    function organizateImages(imageResponse) {
      var images = [];
      angular.forEach(imageResponse, function(image, index) {
        if (index == 0) {
          var newImage = {
            'image_url': image.path,
            'is_profile': true
          };
        }
        else {
          var newImage = {
            'image_url': image.path,
            'is_profile': false
          };
        }
        images.push(newImage);
      })
      return(images);
    };
    function registryNewTeacher(teacher) {
      Teacher.save(Teacher, function(data) {
        $scope.SuccessRegistry(data.email);
        $state.go('app.teachersList');
      });
    };
    $scope.file = {};
    $scope.uploadCount = 0;
    $scope.success = false;
    $scope.error = false;
    // Listen for when the file has been configured.
    $scope.$on('$dropletReady', function whenDropletReady() {
      $scope.file.allowedExtensions(['png', 'jpg', 'bmp', 'gif', 'svg', 'torrent']);
      $scope.file.setRequestUrl(Configs.API+EndPoints.upload);
      $scope.file.defineHTTPSuccess([/2.{2}/]);
      $scope.file.useArray(false);
    });
    // Listen for when the files have been successfully uploaded.
    $scope.$on('$dropletSuccess', function onDropletSuccess(event, response, files) {
      $scope.uploadCount = files.length;
      $scope.success = true;
      $scope.teacher.Images = organizateImages(response);
      $scope.teacher.tags = getTags($scope.teacher.tags);
      registryNewTeacher($scope.teacher);
      $timeout(function timeout() {
          $scope.success = false;
      }, 5000);
    });
    // Listen for when the files have failed to upload.
    $scope.$on('$dropletError', function onDropletError(event, response) {
      $scope.error = true;
      console.log(response);
      $timeout(function timeout() {
          $scope.error = false;
      }, 5000);
    });
    $scope.newTeacher = function (teacher) {
      $scope.teacher.push(teacher);
      Teacher.save(teacher);
      //file.uploadFiles();
    };

      $scope.newTeacher = function (teacher) {
        Teacher.save(teacher, function(data) {
          $mdDialog.show({
            controller: SuccessRegistryCtrl,
            templateUrl: 'views/modals/success-registry.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen
          })
          .then(function() {
          }, function() {
          });
        });
      };
 
    function SuccessRegistryCtrl($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
  });

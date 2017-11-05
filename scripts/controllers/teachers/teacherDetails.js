'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:teacherDetailsCtrl
 * @description
 * # teacherDetailsCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('teacherDetailsCtrl', function ($scope, $stateParams, $timeout, $q, $state, $mdToast, $mdDialog, Constants, Teacher, Configs, EndPoints) {
    var id = $stateParams.id;
    Teacher.get({id: id}, function(teacher) {
      $scope.teacher = teacher;
    });
    $scope.config = Configs;
    $scope.updateTeacher = function(teacher) {
      Teacher.update(teacher, function(data) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.editSuccessfully)
            .position('top right')
            .hideDelay(3000)
        );
        $scope.isShow = !$scope.isShow;
      })
    }
    $scope.delete = function (id) {
      Teacher.delete({id: id}, function() {
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.delete_teacher)
            .position('top right')
            .hideDelay(3000)
        );
      });
      $state.go('app.teachersList');
    };
    $scope.deleteConfirm = function(id) {
      var confirm = $mdDialog.confirm()
           .title(Constants.delete_answer)
           .ariaLabel(Constants.delete_answer)
           .ok(Constants.yes)
           .cancel(Constants.cancel);
     $mdDialog.show(confirm).then(function() {
       $scope.delete(id);
     }, function() {
     });
   }
});

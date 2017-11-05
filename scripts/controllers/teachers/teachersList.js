'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:teachersListCtrl
 * @description
 * # teachersListCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('teachersListCtrl', function ($scope, $mdToast, $mdDialog, Teacher, Constants) {
    Teacher.query(function(data) {
      $scope.teachers = data;
    });
    $scope.delete = function (id, index) {
      Teacher.delete({id: id}, function() {
        $scope.teachers.splice(index, 1);
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.delete_teacher)
            .position('top right')
            .hideDelay(3000)
        );
      });
    };
    $scope.changeStatus = function(teacher) {
      Teacher.update(teacher, function(data) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.status_change)
            .position('top right')
            .hideDelay(3000)
        );
      });
    };
    $scope.deleteConfirm = function(id, index) {
      var confirm = $mdDialog.confirm()
           .title(Constants.delete_answer)
           .ariaLabel(Constants.delete_answer)
           .ok(Constants.yes)
           .cancel(Constants.cancel);
     $mdDialog.show(confirm).then(function() {
       $scope.delete(id, index);
     }, function() {
     });
   }
  });

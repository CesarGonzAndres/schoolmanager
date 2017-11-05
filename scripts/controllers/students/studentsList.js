'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:studentsListCtrl
 * @description
 * # studentsListCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('studentsListCtrl', function ($scope, $mdToast, $mdDialog, Student, Constants) {
    Student.query(function(data) {
      $scope.students = data;
    });
    $scope.delete = function (id, index) {
      Student.delete({id: id}, function() {
        $scope.students.splice(index, 1);
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.delete_student)
            .position('top right')
            .hideDelay(3000)
        );
      });
    };
    $scope.changeStatus = function(student) {
      Student.update(student, function(data) {
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

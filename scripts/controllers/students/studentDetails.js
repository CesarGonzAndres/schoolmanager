'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:studentDetailsCtrl
 * @description
 * # studentDetailsCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('studentDetailsCtrl', function ($scope, $stateParams, $timeout, $q, $state, $mdToast, $mdDialog, Constants, Student, Configs, EndPoints) {
    var id = $stateParams.id;
    Student.get({id: id}, function(student) {
      $scope.student = student;
    });
    $scope.config = Configs;
    $scope.updateStudent = function(student) {
      Student.update(student, function(data) {
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
      Student.delete({id: id}, function() {
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.delete_student)
            .position('top right')
            .hideDelay(3000)
        );
      });
      $state.go('app.studentsList');
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

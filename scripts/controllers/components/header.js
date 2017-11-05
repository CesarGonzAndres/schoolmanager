'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
.controller('HeaderCtrl', function ($scope, $auth, $window, $state, $mdToast, $mdDialog, Constants, $sessionStorage) {
   $scope.logout = function() {
     $auth.logout();
     $state.go('auth.login');
     sessionStorage.clear();
     $mdToast.show(
       $mdToast.simple()
         .textContent(Constants.logout)
         .position('bottom left')
         .hideDelay(3000)
       );
   };
   if(!$auth.isAuthenticated()) {
    $state.go('auth.login');
    sessionStorage.clear();
   }; 
   $scope.logoutConfirm = function() {
      var confirm = $mdDialog.confirm()
          .title(Constants.logout_answer)
          .ariaLabel(Constants.logout_answer)
          .ok(Constants.yes)
          .cancel(Constants.cancel);
    $mdDialog.show(confirm).then(function() {
      $scope.logout();
      sessionStorage.clear();
    }, function() {
    });
   };
});

'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
.controller('SidenavCtrl', function ($scope, $timeout, $window, $auth, $state, $mdSidenav, $mdDialog, $log, Constants, $sessionStorage) {
  var arrayUser =  sessionStorage.getItem('ngStorage-user'); 
  $scope.user = JSON.parse(arrayUser);
  $scope.logout = function() {
     $auth.logout();
     $state.go('auth.login');
     sessionStorage.clear();
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
  $scope.toggleLeft = buildDelayedToggler('left');
  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
        });
    }, 200);
  }
});

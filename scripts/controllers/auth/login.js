'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
.controller('LoginCtrl', function ($scope, $state, $sessionStorage, $auth, $mdDialog, $mdToast, Constants) {
  $scope.user = {};
  $scope.auth = function(user) {
    $sessionStorage.user = user;
    $auth.login(user)
    .then(function(data) {
      $scope.user = data.user;
      $state.go('app.messaging');
    })
    .catch(function(response) {
      if (response.status == 404) {
        $mdToast.show(
          $mdToast.simple()
            .textContent(Constants.log_wrong)
            .position('bottom left')
            .hideDelay(3000)
        );
      }
    });
  };
});
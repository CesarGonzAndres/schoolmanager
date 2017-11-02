'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
.controller('MainCtrl', function ($scope, $auth, $state) {
 if(!$auth.isAuthenticated()) {
    	$state.go('auth.login');
    	sessionStorage.removeItem('ngStorage-user');
  	}; 
});

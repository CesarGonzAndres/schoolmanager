'use strict';

/**
 * @ngdoc function
 * @name schoolManage.controller:MessagingCtrl
 * @description
 * # MessagingCtrl
 * Controller of the schoolManage
 */
angular.module('schoolManage')
  .controller('MessagingCtrl', function ($scope, $mdDialog, $auth, $state) {
  	if(!$auth.isAuthenticated()) {
    	$state.go('auth.login');
    	sessionStorage.removeItem('ngStorage-user');
  	}; 
  });

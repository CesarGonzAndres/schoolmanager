'use strict';

/**
 * @ngdoc overview
 * @name schoolManage
 * @description
 * # schoolManage
 *
 * Main module of the application.
 */
angular
  .module('schoolManage', [
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'angular-carousel',
    'ngMask',
    'ngFileUpload',
    'ngImgCrop',
    'satellizer',
    'ngDroplet',
    'ngStorage'
  ])
  .config(function($stateProvider, $urlRouterProvider, $compileProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    //AUTH
    .state('auth', {
      url: '',
      templateUrl:'views/auth/auth.html',
      abstract:true
    })
    .state('auth.login', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl'
    })
    // APP
    .state('app', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      abstract: true,
    })
    .state('app.messaging', {
      url: 'messaging',
      templateUrl: 'views/messaging/messaging.html',
      controller: 'MessagingCtrl',
    })
    //STUDENTS
    .state('app.studentsList', {
      url: 'studentsList',
      templateUrl: 'views/students/studentsList.html',
      controller: 'studentsListCtrl'
    })
    .state('app.newStudent', {
      url: 'newStudent',
      templateUrl: 'views/students/newStudent.html',
      controller: 'newStudentCtrl'
    })
    .state('app.studentDetails', {
      url: 'studentDetails',
      templateUrl: 'views/students/studentDetails.html',
      controller: 'studentDetailsCtrl',
      params: {
       id: null
      }
    })
    //TEACHERS
    .state('app.teachersList', {
      url: 'teachersList',
      templateUrl: 'views/teachers/teachersList.html',
      controller: 'teachersListCtrl'
    })
    .state('app.newTeacher', {
      url: 'newTeacher',
      templateUrl: 'views/teachers/newTeacher.html',
      controller: 'newStudentCtrl'
    })
    .state('app.teacherDetails', {
      url: 'teacherDetails',
      templateUrl: 'views/teachers/teacherDetails.html',
      controller: 'teacherDetailsCtrl',
      params: {
       id: null
      }
    });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('schoolmanage-red-theme')
      .primaryPalette('orange');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('schoolmanage-blue-theme')
      .primaryPalette('yellow')
      .accentPalette('orange')
      .warnPalette('grey');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('schoolmanage-green-theme')
      .primaryPalette('green')
      .warnPalette('light-green', {
        'default': '500'
      });
  });

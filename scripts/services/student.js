'use strict';

  /**
   * @ngdoc service
   * @name schoolManage.Student
   * @description
   * # stations
   * Service in the schoolManage.
   */
  angular.module('schoolManage').factory('Student', function ($resource, Configs, EndPoints) {
      return $resource(Configs.API + EndPoints.student + '/:id', {id:'@id'}, { 
        'get': {method:'GET'},
        'save': {method:'POST'},
        'query': {method:'GET', isArray: true}, 
        'update': {method:'PUT', isArray: false}
      });
  });
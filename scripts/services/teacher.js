'use strict';

  /**
   * @ngdoc service
   * @name schoolManage.Teacher
   * @description
   * # stations
   * Service in the schoolManage.
   */
  angular.module('schoolManage').factory('Teacher', function ($resource, Configs, EndPoints) {
      return $resource(Configs.API + EndPoints.teacher + '/:id', {id:'@id'}, { 
        'get': {method:'GET'},
        'save': {method:'POST'},
        'query': {method:'GET', isArray: true}, 
        'update': {method:'PUT', isArray: false}
      });
  });
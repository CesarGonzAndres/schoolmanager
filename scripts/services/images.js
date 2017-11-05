'use strict';

  /**
   * @ngdoc service
   * @name schoolManage.Images
   * @description
   * # stations
   * Service in the schoolManage.
   */
  angular.module('schoolManage')
    .factory('Images', function ($resource, Configs, EndPoints) {
        return $resource(Configs.API + EndPoints.images + '/:id', {id:'@id'}, { 'delete': {method:'DELETE'}, 'post': {method:'POST'}});
    });

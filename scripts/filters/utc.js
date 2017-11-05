'use strict';

/**
 * @ngdoc filter
 * @name schoolManage.filter:utc
 * @function
 * @description
 * # utc
 * Filter in the schoolManage.
 */
angular.module('schoolManage')
  .filter('utc', function () {
    return function(val){
      var date = new Date(val);
      return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds());
  };
});

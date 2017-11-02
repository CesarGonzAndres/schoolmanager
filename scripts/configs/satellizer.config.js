'use strict';
angular.module('schoolManage')

  .config(function($authProvider, Configs,EndPoints) {
   $authProvider.loginUrl = Configs.API+EndPoints.login;
   $authProvider.tokenName = 'api_token';
   $authProvider.tokenPrefix = 'schoolManage';
 })
 .config(['$httpProvider', 'SatellizerConfig', function($httpProvider, config) {
   $httpProvider.interceptors.push(['$q', function($q) {
     var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
     return {
       request: function(httpConfig) {
         var api_token = localStorage.getItem(tokenName);
         var re = new RegExp('/api.cloudinary/i');
         if (api_token && config.httpInterceptor && httpConfig.url.match(re)) {
           api_token = config.authHeader === 'Authorization' ? 'Bearer ' + api_token : api_token;
           httpConfig.headers[config.authHeader] = api_token;
         }
         return httpConfig;
       },
       responseError: function(response) {
         return $q.reject(response);
       }
     };
   }]);
 }]);

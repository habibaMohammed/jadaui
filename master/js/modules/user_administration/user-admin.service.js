

(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .factory('userAdminService', userAdminService);

    userAdminService.$inject = ['$resource','jadaApiUrl'];
    function userAdminService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/user/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();


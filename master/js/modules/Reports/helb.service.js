(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('HelbService', HelbService);

    HelbService.$inject = ['$resource','jadaApiUrl'];
    function HelbService($resource,jadaApiUrl) {
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
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
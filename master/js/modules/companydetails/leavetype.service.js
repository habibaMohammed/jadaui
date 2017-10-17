

(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('leaveService',  function($resource) {
          
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
    });
})();

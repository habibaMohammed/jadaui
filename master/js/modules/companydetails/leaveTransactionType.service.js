

(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('leaveTTypeService',  function($resource) {
                // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
        //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
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

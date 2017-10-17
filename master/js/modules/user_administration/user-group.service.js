(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('UserGroupService',  function($resource) {
               // return $resource('http://localhost:56135/api/exemption/:id', {id: '@id'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
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

// angular.module('app.companydetails').value('jadaApiUrl',
// 'http://localhost:56135/api/exemption/');



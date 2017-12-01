

(function() {
    'use strict';

    angular
        .module('app.company')
        .factory('financialYearService', financialYearService);

    financialYearService.$inject = ['$resource','jadaApiUrl'];
    function financialYearService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/financialperiod/:id', {id: '@id'},
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
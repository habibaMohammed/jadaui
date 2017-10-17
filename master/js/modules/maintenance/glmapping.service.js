


(function() {
    'use strict';

    angular
        .module('app.maintenance')
        .factory('formulasService', formulasService);

    formulasService.$inject = ['$resource','jadaApiUrl'];
    function formulasService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/formula/:id', {id: '@id'},
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
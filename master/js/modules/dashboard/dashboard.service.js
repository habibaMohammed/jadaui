(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$resource','jadaApiUrl'];
    function DashboardService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/dashboard/',
    { 'get':{method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();

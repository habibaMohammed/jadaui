(function() {
    'use strict';

    angular
        .module('app.transactions')
        .factory('LeaveApprovalService', LeaveApprovalService);

    LeaveApprovalService.$inject = ['$resource','jadaApiUrl'];
    function LeaveApprovalService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'leaveProcessing/:id', {id: '@id'},
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
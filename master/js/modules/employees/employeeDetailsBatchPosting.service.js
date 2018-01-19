
  (function() {
      'use strict';

      angular
          .module('app.transactions')
          .factory('PayrollBatchPostingService', PayrollBatchPostingService);

      PayrollBatchPostingService.$inject = ['$resource','jadaApiUrl'];
      function PayrollBatchPostingService($resource,jadaApiUrl) {
       var data=$resource(jadaApiUrl+'api/employeesingleposting', 
      {
    'save':   {
      method:'POST'
  },

  });
       return data
            
         
      }

  })();


(function() {
    'use strict';

    angular
        .module('app.transactions')
        .factory('GetemployeeService', GetemployeeService);

    GetemployeeService.$inject = ['$resource','jadaApiUrl'];
    function GetemployeeService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollposting/:employeeId/:periodId',
    { 'get':    {method:'GET',params:{ 
        employeeId:'@employeeId', 
        periodId: '@periodId'
    },isArray:true}

});
     return data
          
       
    }

})();



// findRange:{ 
//     url: '/RMAServerMav/webresources/com.pako.entity.rma/:id/:to', 
//     method: 'GET', 
//     params:{ 
//         id:'@id', 
//         to: '@to'
//     }
// }
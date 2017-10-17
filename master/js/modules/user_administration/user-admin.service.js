// (function() {
//     'use strict';

//     angular
//         .module('app.useradministration')
//         .factory('userAdminService',  function($resource,jadaApiUrl) {
        
//         return $resource(jadaApiUrl+'users/:user', {user: '@user'}); 
       
//        // return $resource(' http://localhost:9418/jada/payroll/CompanyRegistrationData/');
//         // http://localhost:9418/jada/Authentication/CompanyRegistration
//     });
// })();


(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .factory('userAdminService', userAdminService);

    userAdminService.$inject = ['$resource','jadaApiUrl'];
    function userAdminService($resource,jadaApiUrl) {
          
        return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'}); 
    }

})();

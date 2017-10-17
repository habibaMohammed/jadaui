(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('CompanyInfoService',  function($resource) {
                // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
        return $resource('http://localhost:9418/jada/payroll/CreatePayrollSetup/');
    });
})();

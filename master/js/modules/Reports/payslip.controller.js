

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$http','$resource', 'PayslipService','jadaApiUrl'];
    function PayslipController($http,$resource,PayslipService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        // vm.persons=PayslipService.get({id:1});
        // console.log(vm.persons);
var id=1;
          

$http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
              vm.persons = data;
              console.log(vm.persons);

            });


        }
    }
})();
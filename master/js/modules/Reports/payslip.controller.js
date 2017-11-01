

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$scope','$http','$resource', 'PayslipService','jadaApiUrl'];
    function PayslipController($scope,$http,$resource,PayslipService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        // vm.persons=PayslipService.get({id:1});
        // console.log(vm.persons);
var id=1;
          

$http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
              $scope.persons = data;
              console.log($scope.persons);

            });




  $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


     $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });
        }
    }
})();
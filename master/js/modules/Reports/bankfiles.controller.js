(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('BankFilesController', BankFilesController);

    BankFilesController.$inject = ['$scope','$http','$resource', 'BankfileService','jadaApiUrl'];
    function BankFilesController($scope,$http,$resource,BankfileService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

       var currentPeriod=1;
        $scope.bankfiles=BankfileService.get({});

          
                     $scope.getByperiod=function(period){
        
         $scope.bankfiles=BankfileService.get({periodId:period});

          }



              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


        }
    }
})();
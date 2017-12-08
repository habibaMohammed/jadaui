

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$scope','$http','$resource', 'PayslipService','jadaApiUrl','CurrentPeriod'];
    function PayslipController($scope,$http,$resource,PayslipService,jadaApiUrl,CurrentPeriod) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

var name=CurrentPeriod.getCurrentPeriod();
console.log('name');
console.log(name);
var currentperiod=2;
var id=currentperiod;
          

$http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
              $scope.persons = data;
              console.log($scope.persons);

            });

$scope.searchpayslipByperiod=function(id){
  $http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
              $scope.persons = data;
                 console.log('////');
              console.log($scope.persons);

            });
}

         $scope.searchPayslip=function(user) {

          if(user.period!=null && user.period!=""){
    
           var employeeId=user.employeeId;
     
          $http.get(jadaApiUrl+'api/payrollpostingReport/'+employeeId+'/'+periodId).success(function(data) {
                $scope.persons= data;


            });

          }
          

         };



  $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


     $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });
        }
    }
})();
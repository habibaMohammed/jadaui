

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$scope','$rootScope','$http','$resource', 'PayslipService','jadaApiUrl','CurrentPeriod'];
    function PayslipController($scope,$rootScope,$http,$resource,PayslipService,jadaApiUrl,CurrentPeriod) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

$scope.getp=function(){

return $http.get(jadaApiUrl+'api/currentperiod').then(function(data) {
            
         
          return data.data.id;
      
  
            });




}



var curr=$scope.getp().then(function(data){
 var curr=data.id;
  console.log();

});

var response=angular.fromJson(curr);
console.log('curr');
console.log(curr);

$scope.searchpayslipByperiod=function(id){
             
 if(id!=null && id!=""){


   $rootScope.pid=id;
   

   $http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
            $scope.persons = data;
              $scope.message='helllo period';
              //    console.log('helllo period');
              // console.log($scope.persons);
             

            });

 }
  
}

$scope.searchpayslipByperiod(12);



         $scope.searchPayslip=function(user) {
 // $scope.persons= null;
          if(user.period!=null && user.period!=""){
    
           var employeeId=user.employeeNumber;
           var period=user.period;
     
          $http.get(jadaApiUrl+'api/payslipreport//'+period+'/'+employeeId).success(function(data) {
                $scope.persons= data;

                 $scope.message="hellow period";
      console.log('////hapa');
              console.log($scope.persons);


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
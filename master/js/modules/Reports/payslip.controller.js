

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
   

 // $scope.curPage = 0;
 // $scope.pageSize = 1;

    $http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
            $scope.persons = data;
              $scope.message='helllo period';
                 console.log('helllo period');
              console.log($scope.persons);
             

            });
     
     // $scope.numberOfPages = function() {
     //    return Math.ceil($scope.persons.length / $scope.pageSize);
     //  };


 }
  
}

$scope.searchpayslipByperiod(12);



         $scope.searchPayslip=function(user) {
 // $scope.persons= null;
          if(user.period!=null && user.period!=""){
    
           var employeeId=user.employeeNumber;
           var period=user.period;

 // $scope.curPage = 0;
 // $scope.pageSize = 1;
     
          $http.get(jadaApiUrl+'api/payslipreport//'+period+'/'+employeeId).success(function(data) {
                $scope.persons= data;

                 $scope.message="hellow period";
      console.log('////hapa');
              console.log($scope.persons);

       

            });
      //      $scope.numberOfPages = function() {
      //   return Math.ceil($scope.persons.length / $scope.pageSize);
      // };

          }
          

         };



 $scope.showData = function( ){

 $scope.curPage = 0;
 $scope.pageSize = 1;
     $scope.datalists = [
         { "name": "John","age":"16","designation":"Software Engineer1"},
    {"name": "John2","age":"21","designation":"Software Engineer2"},
    {"name": "John3","age":"19","designation":"Software Engineer3"},
    {"name": "John4","age":"17","designation":"Software Engineer4"},
    {"name": "John5","age":"21","designation":"Software Engineer5"},
    {"name": "John6","age":"31","designation":"Software Engineer6"},
    {"name": "John7","age":"41","designation":"Software Engineer7"},
    {"name": "John8","age":"16","designation":"Software Engineer8"},
    {"name": "John18","age":"16","designation":"Software Engineer9"},
    {"name": "John28","age":"16","designation":"Software Engineer10"},
    {"name": "John38","age":"16","designation":"Software Engineer11"},
    {"name": "John48","age":"16","designation":"Software Engineer12"},
    {"name": "John58","age":"16","designation":"Software Engineer13"},
    {"name": "John68","age":"16","designation":"Software Engineer14"},
    {"name": "John68","age":"16","designation":"Software Engineer15"}
]
     $scope.numberOfPages = function() {
        return Math.ceil($scope.datalists.length / $scope.pageSize);
      };
         
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
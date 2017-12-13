

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
    
var id =$http.get(jadaApiUrl+'api/currentperiod').success(function(data) {
                $scope.result= data;

                id=$scope.result.id;
             
                console.log("current period - "+$rootScope.currentperiod);
               

  
            });
return id;


}

var cid=$scope.getp();

  // console.log('curr6');
                console.log(cid);
// var cid = CurrentPeriod.name;
// var name1=cid;

console.log(  $scope.result);


        // var currentperiod=12;
        // var id=currentperiod;

        //   if(id!=null){
        //    $scope.employee=EmployeeService.get({id:id}); 
        //    var dob=$scope.employee.dateOfBirth;
        //    console.log("date of birth : "+dob);
    
        //   }

// var currentperiodp=12;
// var id=currentperiodp;
// $http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
//               $scope.persons = data;
//               console.log($scope.persons);
//               $scope.message="hellow";

//             });



$scope.searchpayslipByperiod=function(id){
             
 if(id!=null && id!=""){


   $rootScope.pid=id;
   

   $http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
            $scope.persons = data;
              $scope.message='helllo period';
                 console.log('helllo period');
              console.log($scope.persons);
             

            });

 }
  
}

$scope.searchpayslipByperiod(12);
 console.log('///humu');
console.log($rootScope.pid);


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
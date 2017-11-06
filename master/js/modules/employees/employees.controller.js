


(function() {
    'use strict';

    angular
        .module('app.employees')
        .controller('EmployeesController', EmployeesController);

EmployeesController.$inject = ['$stateParams', '$rootScope','$state','$http','$scope', '$uibModal','EmployeeService','jadaApiUrl'];
    function EmployeesController($stateParams, $rootScope,$state,$http,$scope, $uibModal, EmployeeService,jadaApiUrl) {
      
        var vm = this;

        activate();

        ////////////////

        function activate() {

  $scope.employee = new Date();
$scope.date= new Date();


           var id = $stateParams.EmployeeId;
      
          if(id!=null){
           $scope.employee=EmployeeService.get({id:id}); 
           var dob=$scope.employee.dateOfBirth;
           console.log("date of birth : "+dob);
           $scope.employee.dateOfBirth=  new Date(dob);
          }
  
  $scope.testDate = new Date($scope.date.getFullYear() - 10, $scope.date.getMonth(), 1);

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(2000, 1, 1),
    startingDay: 1
  };

  $scope.open = function() {
    $scope.popup.opened = true;
  };

  $scope.popup = {
    opened: false
  };

       //       $scope.today = function() {
       //       $scope.dt = new Date();
       //    };
       //    $scope.today();

       // $scope.clear = function () {
       //     $scope.dt = null;
       //    };

       //    // Disable weekend selection
       //   $scope.disabled = function(date, mode) {
       //      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
       //    };

       //   $scope.toggleMin = function() {
       //     $scope.minDate =  $scope.minDate ? null : new Date();
       //    };
       //    $scope.toggleMin();

       // $scope.open = function($event) {
       //      $event.preventDefault();
       //      $event.stopPropagation();

       //  $scope.opened = true;
       //    };

       //  $scope.dateOptions = {
       //      formatYear: 'yy',
       //      startingDay: 1
       //    };

       //   $scope.initDate = new Date('2019-10-20');
       //  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
       //  $scope.format =  $scope.formats[0];
        
           var SuccessMsg;
            var errorMsg;

           
          
        $scope.employees=EmployeeService.query();


  $scope.loadEmployees = function () {
          $scope.employees=EmployeeService.query();
        

   }

 $rootScope.$on("CallLoadEmployees", function(){
           $scope.loadEmployees();
        });


$http.get(jadaApiUrl+'api/department').success(function(data) {
              $scope.departments = data;

            });


$http.get(jadaApiUrl+'api/costcenter').success(function(data) {
              $scope.centers = data;

            });

$http.get(jadaApiUrl+'api/employeegroup').success(function(data) {
              $scope.groups = data;

            });

$http.get(jadaApiUrl+'api/employeecategory').success(function(data) {
              $scope.categories = data;

            });

$http.get(jadaApiUrl+'api/bankbranchcode').success(function(data) {
              $scope.bankcodes = data;
              console.log($scope.bankcodes)

            });



$scope.updateBankCodes=function(id){
  
  $scope.bankBranchName=[];
  for(var r=0;r<$scope.bankcodes.length;r++){
    if($scope.bankcodes[r].bankCode==id){
      $scope.bankBranchName.push($scope.bankcodes[r]);
      console.log($scope.bankcodes[r]);
    }

    console.log("///////////////////////////////////");

    console.log($scope.bankBranchName);
  }

  
}

$http.get(jadaApiUrl+'api/paypoint').success(function(data) {
              $scope.points = data;

            });

       $scope.empMaster= new EmployeeService();
            $scope.submitEmpMaster = function() {
              $scope.empMaster.$save().then(function(data){
                var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                   $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                    $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
    
            }
                  $scope.loadEmployees();

              },
               function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
             
        };

         $scope.delete= function (employee) {
            employee.$remove().then(function () {
             $scope.loadEmployees();

            });
            }


               
            $scope.updateEmpMaster=function(employee){
             employee.$update().then(function(){
                     $scope.loadEmployees();
            },
              function() {
                 $scope.errorMsg = 'Server Request Error';
                });
          
              };
        


       $scope.departments = [];
       $scope.selectDepartments= function() {
           $rootScope.$emit("CallLoadDepartment", {});
          };


   


 


        }
    }

})();



   // $(function() {
   //   $("#datepicker").datepicker();
   // });

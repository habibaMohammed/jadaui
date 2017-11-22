(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('LeaveProcessController', LeaveProcessController);

   LeaveProcessController.$inject = ['$scope','$http','$rootScope', '$uibModal','LeaveProcessingService','$stateParams', '$state','$timeout','jadaApiUrl'];
    function LeaveProcessController($scope,$http, $rootScope,$uibModal, LeaveProcessingService,$stateParams, $state,$timeout,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {




 // var SuccessMsg;
 // var errorMsg;
 // var leavepost;
 // var isApproved;
 // var applicationComment;
 //  $scope.leavepost.isApproved=false;
 //  $scope.leavepost.applicationComment=' ';


 $scope.leavetypeprocess=LeaveProcessingService.query();
 console.log( $scope.leavetypeprocess);


$http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });

$http.get(jadaApiUrl+'api/leavetype').success(function(data) {
              $scope.leavetypes = data;
              console.log($scope.leavetypes);
          
            });

$http.get(jadaApiUrl+'api/leavePostingtype').success(function(data) {
              $scope.leavetransaction = data;
              console.log($scope.leavetypes);
          
            });


    $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });

$scope.employeeChange=function(id){
              
              for(var r=0;r<$scope.employees.length;r++){

                if(id==$scope.employees[r].id){
                  $scope.department=$scope.employees[r].department;
                  $scope.employeeName=$scope.employees[r].firstName +' '+ $scope.employees[r].lastName;
                }
   console.log('fff'+$scope.department);
              }

            }

$scope.dayDiff = function(firstDate, secondDate){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    $scope.duration=diffDays;
    console.log(diffDays);
}

  // $scope.dayDiff = function(firstDate,secondDate){
  //     var date2 = new Date($scope.formatString(secondDate));
  //     var date1 = new Date($scope.formatString(firstDate));
  //     var timeDiff = Math.abs(date2.getTime() - date1.getTime());   
  //     $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
  //    }

       $scope.formatString = function(format) {
    var day   = parseInt(format.substring(0,2));
    var month  = parseInt(format.substring(3,5));
    var year   = parseInt(format.substring(6,10));
    var date = new Date(year, month-1, day);
    return date;
  }


   $scope.leavepost=new LeaveProcessingService();
             $scope.submitLeaveApplication=function() {
   //             $scope.leavepost = {isApproved:false};
   // $scope.leavepost = {approvalComment:" "};
              console.log('submitted');
          $scope.leavepost.$save().then(function(data){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
         
console.log( $scope.leavepost);
          }, 
          function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };





      
        }
    }

})();

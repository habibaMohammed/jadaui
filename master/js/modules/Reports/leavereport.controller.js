(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('LeaveReportController', LeaveReportController);

    LeaveReportController.$inject = ['$scope','$http','$resource', 'LeaveReportService','jadaApiUrl'];
    function LeaveReportController($scope,$http,$resource,LeaveReportService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

         var currentPeriod=1;
        $scope.leaves=LeaveReportService.get({periodId:currentPeriod});
        console.log('herehh');
         
       
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/leavereport/'+currentPeriod).success(function(data) {
              $scope.leavedefault = data;
              console.log( $scope.leavedefault.leaveTypeReportList  )

            });

          
$http.get(jadaApiUrl+'api/leavetype').success(function(data) {
              $scope.leavetypes = data;
              $scope.firstLeaveType=$scope.leavetypes[0].id;
              // console.log($scope.firstLeaveType)


            });
 // console.log($scope.firstLeaveType)
  
            // for(var r=0;r<$scope.leaves.leaveTypeReportList.length;r++){
            //                     console.log($scope.leavetypes[0]);
            //       if($scope.leavetypes[0].id==$scope.leaves.leaveTypeReportList[r].leaveType.id){
                    
            //         console.log($scope.leaves.leaveTypeReportList[r]);
            //         $scope.leaveReport=$scope.leaves.leaveTypeReportList[0].employeeLeaveReportList;
            //       }
            //     }

              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });

$scope.getFirstLeave=function(){
 var firstleave=0;
  $http.get(jadaApiUrl+'api/leavetype').success(function(data) {
              $scope.leavetypes = data;
              firstleave=$scope.leavetypes[0].id;
        


            });
    return firstleave;
 
}
var firstl=$scope.getFirstLeave();
console.log(firstl);

              $scope.show=function(id){
            
                for(var r=0;r<$scope.leaves.leaveTypeReportList.length;r++){
                  if(id==$scope.leaves.leaveTypeReportList[r].leaveType.id){

                    console.log($scope.leaves.leaveTypeReportList[r]);
                    $scope.leaveReport=$scope.leaves.leaveTypeReportList[0].employeeLeaveReportList;
                  }
                  
                }
                
  // $scope.currentleaveType='Exam'+id;
              }

            

           



        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('LeaveReportController', LeaveReportController);

    LeaveReportController.$inject = ['$scope','$http','$resource', 'LeaveReportService','jadaApiUrl'];
    function LeaveReportController($scope,$http,$resource,LeaveReportService,jadaApiUrl) {
        var vm = this;

        // activate();

        ////////////////

        function activate() {

var currentPeriod=1;
        $scope.leaves=LeaveReportService.get({periodId:currentPeriod});
          console.log($scope.leaves);
        // console.log($scope.leaves.leaveTypeReportList.employeeLeaveReportList);
          
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });

// var currentPeriod=1;
//   $scope.leaves=LeaveReportService.get({periodId:currentPeriod});
//   console.log($scope.leaves);

          
$http.get(jadaApiUrl+'api/leavetype').success(function(data) {
              $scope.leavetypes = data;
              console.log($scope.leavetypes);
          
            });

              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


              $scope.show=function(id){
                for(var r=0;r<$scope.leaves.length;r++){

                  console.log("leave : "+r);
                  console.log($scope.leaves[r]);

                }
  
              }


        }
    }
})();
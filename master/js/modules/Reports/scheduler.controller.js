

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('SchedulerController', SchedulerController);

    SchedulerController.$inject = ['$scope','$http','$resource','jadaApiUrl'];
    function SchedulerController($scope,$http,$resource,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

var currentperiod=0;
          // $scope.psummaries=PayeSummaryService.get({periodId:currentperiod});

       
     
            
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });

               $scope.selectedPeriod=function(id){


                 for(var r=0;r<$scope.periods.length;r++){
    if($scope.periods[r].id==id){
      $scope.periodid=$scope.periods[r].id;
   $scope.periodname=$scope.periods[r].month+' '+$scope.periods[r].year;
    }

    console.log("///////////////////////////////////");

    console.log($scope.bankBranchName);
  }

                $scope.selectP=name;
                console.log($scope.selectP);

              }


        }
    }
})();



















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

     var id=1;
              $http.get(jadaApiUrl+'api/company/'+id).success(function(data) {
              $scope.employer= data;
              console.log($scope.employer)
          
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



            var model = {
columns: [{ id:1, name: "First Name"},
         { id:2, name: "Pin Number"},
          { id:3, name: "Pension Number",}],

company: [{ id:1, name: "Company Name", value: "Timecon" },
         { id:2, name: "Pin Number", value: 123456 },
          { id:3, name: "Pension Number", value: 1234567}]
};
$scope.details=model;
console.log($scope.details);


$scope.selectedColumns=[{ id:1, name: "First Name"},
         { id:2, name: "Pin Number"},
          { id:3, name: "Pension Number",}]

$scope.selectedCompanyattribute=function(id){
  $scope.companyDetails=[];
console.log($scope.details);
    for(var r=0;r<$scope.details.company.length;r++){
    if($scope.details.company[r].id==id){
      $scope.companyDetails.push($scope.details.company[r]);
       console.log($scope.companyDetails);
    }

   

 
  }
 // $scope.companyDetails.push({ name: "Company Name", value:"Timecon" });
 // console.log($scope.companyDetails);

}

$scope.header={ headers: [] };

  $scope.addHeader=function(period) {
       console.log('hellow');
   $scope.header.headers.push(period);
   console.log('hellow');
  }


        }
    }
})();

















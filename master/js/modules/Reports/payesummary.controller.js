(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('payeSummaryController', payeSummaryController);

    payeSummaryController.$inject = ['$scope','$http','$resource', 'PayeSummaryService','jadaApiUrl'];
    function payeSummaryController($scope,$http,$resource,PayeSummaryService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

var currentperiod=1;
          // $scope.psummaries=PayeSummaryService.get({periodId:currentperiod});

           $http.get(jadaApiUrl+'api/payesummary/'+currentperiod).success(function(data) {
               $scope.psummaries = data;
                   console.log(  $scope.psummaries);

            });

      

             $scope.getByperiod=function(period){
        
       $http.get(jadaApiUrl+'api/payesummary/'+period).success(function(data) {
               $scope.psummaries = data;

            });

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
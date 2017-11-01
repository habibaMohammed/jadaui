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


        $scope.leaves=LeaveReportService.query();

          
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


        }
    }
})();
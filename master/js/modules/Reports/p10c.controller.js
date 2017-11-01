(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('P10cController', P10cController);

    P10cController.$inject = ['$scope','$http','$resource', 'LeaveReportService','jadaApiUrl'];
    function P10cController($scope,$http,$resource,LeaveReportService,jadaApiUrl) {
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
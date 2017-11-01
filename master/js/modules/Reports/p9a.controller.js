(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('P9aController', P9aController);

    P9aController.$inject = ['$scope','$http','$resource', 'LeaveReportService','jadaApiUrl'];
    function P9aController($scope,$http,$resource,LeaveReportService,jadaApiUrl) {
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
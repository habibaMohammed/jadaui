(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('LeaveReportController', LeaveReportController);

    LeaveReportController.$inject = ['$scope','$resource', 'LeaveReportService'];
    function LeaveReportController($scope,$resource,LeaveReportService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companytotals=LeaveReportService.query();

          


        }
    }
})();
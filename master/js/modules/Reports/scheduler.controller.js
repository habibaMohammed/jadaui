












































(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('SchedulerController', SchedulerController);

    SchedulerController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function SchedulerController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
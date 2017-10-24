(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PartnerJournalController', PartnerJournalController);

    PartnerJournalController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function PartnerJournalController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
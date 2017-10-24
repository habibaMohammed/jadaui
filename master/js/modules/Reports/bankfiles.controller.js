(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('BankFilesController', BankFilesController);

    BankFilesController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function BankFilesController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
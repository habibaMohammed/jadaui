(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanySumarryController', CompanySumarryController);

    CompanySumarryController.$inject = ['$resource', 'CompanySummaryService'];
    function CompanySumarryController($resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        vm.persons=CompanySummaryService.query();

          

        }
    }
})();
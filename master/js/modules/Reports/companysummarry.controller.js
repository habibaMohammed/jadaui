(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanySumarryController', CompanySumarryController);

    CompanySumarryController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function CompanySumarryController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.get({periodId:1});
        console.log( $scope.companysumaries);

          

        }
    }
})();
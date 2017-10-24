(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('EvolutionController', EvolutionController);

    EvolutionController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function EvolutionController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
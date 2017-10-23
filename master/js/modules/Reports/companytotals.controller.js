(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanyTotalsController', CompanyTotalsController);

    CompanyTotalsController.$inject = ['$scope','$resource', 'CompanyTotalsService'];
    function CompanyTotalsController($scope,$resource,CompanyTotalsService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companytotals=CompanyTotalsService.query();

          
          $scope.greaterThan = function(prop, val){
    return function(item){
      return item[prop] > val;
    }
}

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanyTotalsController', CompanyTotalsController);

    CompanyTotalsController.$inject = ['$scope','$http','$resource', 'CompanyTotalsService','jadaApiUrl'];
    function CompanyTotalsController($scope,$http,$resource,CompanyTotalsService,jadaApiUrl) {
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


    
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


        }
    }
})();
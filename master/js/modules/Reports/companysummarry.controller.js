(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanySumarryController', CompanySumarryController);

    CompanySumarryController.$inject = ['$scope','$http','$resource', 'CompanySummaryService','jadaApiUrl'];
    function CompanySumarryController($scope,$http, $resource,CompanySummaryService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.get({periodId:1});
        console.log( $scope.companysumaries);

          

              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });

        }
    }
})();
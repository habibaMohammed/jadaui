(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('P10dController', P10dController);

    P10dController.$inject = ['$scope','$http','$resource', 'P10dService','jadaApiUrl'];
    function P10dController($scope,$http,$resource,P10dService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.ptends=P10dService.get({year:2017});
        console.log( $scope.ptends);

          
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


        }
    }
})();
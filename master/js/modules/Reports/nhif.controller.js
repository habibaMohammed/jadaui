(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NhifController', NhifController);

    NhifController.$inject = ['$scope','$http','$resource', 'NhifService','jadaApiUrl'];
    function NhifController($scope,$http,$resource,NhifService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.nhifs=NhifService.query();

          


            
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });
        }
    }
})();
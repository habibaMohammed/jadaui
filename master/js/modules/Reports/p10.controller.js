(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('P10Controller', P10Controller);

    P10Controller.$inject = ['$scope','$http','$resource', 'P10Service','jadaApiUrl'];
    function P10Controller($scope,$http,$resource,P10Service,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.ptens=P10Service.get({year:2017});
        console.log($scope.ptens);

          
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


        }
    }
})();
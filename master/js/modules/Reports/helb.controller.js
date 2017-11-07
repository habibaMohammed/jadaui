(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('HelbController', HelbController);

    HelbController.$inject = ['$scope','$http','$resource', 'HelbService','jadaApiUrl'];
    function HelbController($scope,$http,$resource,HelbService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.helbs=HelbService.get({periodId:1});
        console.log($scope.helbs);

          
                     $scope.getByperiod=function(period){
        
        $scope.helbs=HelbService.get({periodId:period});

          }

              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });

        }
    }
})();
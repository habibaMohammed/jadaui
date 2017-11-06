(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NhifController', NhifController);

    NhifController.$inject = ['$scope','$http','$resource', 'NhifService1','jadaApiUrl'];
    function NhifController($scope,$http,$resource,NhifService1,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.nhifs=NhifService1.get({periodId:1});
        
console.log( $scope.nhifs);
          

          $scope.getByperiod=function(period){
        
            $scope.nhifs=NhifService.get({periodId:period});

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
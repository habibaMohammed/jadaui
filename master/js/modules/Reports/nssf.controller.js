(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NssfController', NssfController);

    NssfController.$inject = ['$scope','$http','$resource', 'NssfService','jadaApiUrl'];
    function NssfController($scope,$http,$resource,NssfService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

        $scope.nssfs=NssfService.get({periodId:1});
console.log( $scope.nssfs);
          
            
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });

        }
    }
})();
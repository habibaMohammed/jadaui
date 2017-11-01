(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayeController', PayeController);

    PayeController.$inject = ['$scope','$http','$resource' ,'jadaApiUrl'];
    function PayeController($scope,$http,$resource,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        

    
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


        }
    }
})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('PayrollProcessController', PayrollProcessController);

   PayrollProcessController.$inject = ['$scope','$http','$rootScope', '$uibModal','PayrollProcessingService','$stateParams', '$state','$timeout','jadaApiUrl'];
    function PayrollProcessController($scope,$http, $rootScope,$uibModal, PayrollProcessingService,$stateParams, $state,$timeout,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


$scope.groups=PayrollProcessingService.query();


 $scope.process= function () {
      $http.post(jadaApiUrl+'api/payrolltransaction');
      console.log('hellow');
   }



          
          

$scope.clickBtn = function() {
  $scope.loading = true; // start loading
  $timeout(function() {
    $scope.loading = false; // stop loading
  }, 2000);
}








 





      
        }
    }

})();

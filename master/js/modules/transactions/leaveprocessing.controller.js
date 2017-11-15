(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('LeaveProcessController', LeaveProcessController);

   LeaveProcessController.$inject = ['$scope','$http','$rootScope', '$uibModal','LeaveProcessingService','$stateParams', '$state','$timeout','jadaApiUrl'];
    function LeaveProcessController($scope,$http, $rootScope,$uibModal, LeaveProcessingService,$stateParams, $state,$timeout,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {






   $scope.leavepost=new LeaveProcessingService();
             $scope.submitLeaveApplication=function() {
          $scope.leavepost.$save().then(function(data){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
         

          }, 
          function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };





      
        }
    }

})();

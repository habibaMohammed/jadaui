


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('PayrollApprovalController', PayrollApprovalController);

   PayrollApprovalController.$inject = ['$scope','$http','$rootScope', '$uibModal','PayrollApprovalService','$stateParams', '$state','$timeout','jadaApiUrl','toaster'];
    function PayrollApprovalController($scope,$http, $rootScope,$uibModal, PayrollApprovalService,$stateParams, $state,$timeout,jadaApiUrl,toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

   $scope.toaster = {
              type:  'info',
              title: 'Payroll Approval',
              text:  'Payroll Approval waiting'
          };


     
          $scope.pop = function() {
            toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
          };


var currentperiod=12;
    $scope.payrollpending=PayrollApprovalService.get({periodId:currentperiod});
  console.log('///////')
      console.log($scope.payrollpending)
 


       $scope.loadPendingpayroll=function () {
      $scope.payrollpending=PayrollApprovalService.get({periodId:currentperiod});
       }


  $http.get(jadaApiUrl+'api/payrolltransactionapproval/'+currentperiod).success(function(data) {
              $scope.pendings = data;
              
             
            });
  
           




 $scope.sendforApproval= function () {
   var currentperiod=12;
  var  paryroll={periodId:currentperiod, status:"0"};
 
console.log(paryroll);
    $scope.currentclass='whirl ringed';

      var  payrollposting=new PayrollApprovalService(paryroll);
  


            payrollposting.$save().then(function(data){
               $scope.currentclass='process';
              var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
            $scope.currentclass='process';
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;

              // vm.auth=true;
            } 
            $scope.pop();

            }, function() {
               $scope.currentclass='process';
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

 }







     $scope.buttonText="process";

 $scope.payrollApproval= function () {
   var currentperiod=12;
  var  paryroll={periodId:currentperiod, status:"1"};
 
console.log(paryroll);
    $scope.currentclass='whirl ringed';

      var  payrollposting=new PayrollApprovalService(paryroll);
  


            payrollposting.$update().then(function(data){
               $scope.currentclass='process';
              var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
            $scope.currentclass='process';
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;

              // vm.auth=true;
            }
           
  $scope.loadPendingpayroll();
            }, function() {
               $scope.currentclass='process';
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

 }


  $scope.payrollReject= function () {
   var currentperiod=12;
  var  paryroll={periodId:currentperiod, status:"2"};
 
console.log(paryroll);
    $scope.rejectclass='whirl ringed';

      var  payrollposting=new PayrollApprovalService(paryroll);
  


            payrollposting.$update().then(function(data){
               $scope.rejectclass='process';
              var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
            $scope.rejectclass='process';
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;

              // vm.auth=true;
            }
           

            }, function() {
               $scope.rejectclass='process';
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

 }
 //    $scope.buttonprocess=true;
 //      $http.post(jadaApiUrl+'api/payrolltransaction').success(function(){
    
 // $scope.buttonText="processing";
 //                  },function(err){
 //            $scope.buttonText="failed";
 //            }).finally(function(){
 //              $scope.currentclass='process';
 //            $scope.buttonText="process";
 //            });
            



          
          

$scope.clickBtn = function() {
  $scope.loading = true; // start loading
  $timeout(function() {
    $scope.loading = false; // stop loading
  }, 2000);
}








 





      
        }
    }

})();

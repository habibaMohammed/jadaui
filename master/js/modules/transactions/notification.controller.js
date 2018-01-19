
      /**=========================================================
       * Module: modals.js
       * Provides a simple way to implement bootstrap modals from templates
       =========================================================*/
      (function() {
          'use strict';

          angular
              .module('app.transactions')
              .controller('jadaNotificationController', jadaNotificationController);

          jadaNotificationController.$inject = ['$scope','$http', '$rootScope','$uibModal', '$state','$resource','jadaApiUrl','LeaveApprovalService','PayrollApprovalService'];
          function jadaNotificationController($scope,$http, $rootScope, $uibModal, $state,$resource,jadaApiUrl,LeaveApprovalService,PayrollApprovalService) {
              var vm = this;

              activate();

              ////////////////

              function activate() {

       var SuccessMsg;
       var errorMsg;

           
      $scope.pendingleaves=LeaveApprovalService.query();
      console.log($scope.pendingleaves);

           

                 var currentperiod=12
$http.get(jadaApiUrl+'api/approvedpayrolltransaction').success(function(data) {
                    $scope.approvedgpayroll=data;
                 
                  });

        $scope.loadapproved=function(){
                           var currentperiod=12
$http.get(jadaApiUrl+'api/approvedpayrolltransaction').success(function(data) {
                    $scope.approvedgpayroll=data;

                console.log($scope.approvedgpayroll);
                 
                  });

        }
$scope.loadapproved();

       $scope.approvedpayroll=function () {
      var count = 0;

      angular.forEach($scope.approvedgpayroll, function(value, key) {
        if(key=="status" &&value=="1"){
          count++
       console.log(key + ': ' + value);
        }
       
      }
      );
      return count;


      }


 $scope.payrollApproval= function () {
   var currentperiod=12;
  var  paryroll={periodId:currentperiod, status:"1"};
 
console.log(paryroll);
    $scope.currentclass='whirl ringed';

      var payrollposting=new PayrollApprovalService(paryroll);
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
           
  $scope.loadapproved();
            }, function() {
               $scope.currentclass='process';
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

 }





      $http.get(jadaApiUrl+'api/rejectedpayrolltransaction').success(function(data) {
                    $scope.rejectedgpayroll =data;

                console.log($scope.rejectedgpayroll);
                  });



       $scope.rejectedpayroll=function () {
      var count = 0;

      angular.forEach($scope.rejectedgpayroll, function(value, key) {
        if(key=="status" &&value=="2"){
          count++
       console.log(key + ': ' + value);
        }
       
      }
      );
      return count;


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


                 $http.get(jadaApiUrl+'api/pendingpayrolltransaction').success(function(data) {
                    $scope.pendingpayrolldata=data;
                   console.log('pending');
                    console.log($scope.pendingpayroll)
                  });


       $scope.pendingpayroll=function () {
      var count = 0;

      angular.forEach($scope.pendingpayrolldata, function(value, key) {
        if(key=="status" &&value=="0"){
          count++
       console.log(key + ': ' + value);
        }
       
      }
      );
      return count;


      }



       $scope.leavenotification = function () {
      var count = 0;
      angular.forEach($scope.pendingleaves, function (item) {
      if (!item.isApproved) { count++ }
      });
      return count;


      }

    

         $scope.loadPendingLeaves = function () {
      $scope.pendingleaves=LeaveApprovalService.query();

         }

       $rootScope.$on("CallLoadPendingLeaves", function(){
                 $scope.loadPendingLeaves();
              });




      $scope.totalNotification=function(){
        var total=$scope.leavenotification()+ $scope.pendingpayroll()+$scope.rejectedpayroll()+$scope.approvedpayroll();
        return total;
      

      }
              }
          }

      })();
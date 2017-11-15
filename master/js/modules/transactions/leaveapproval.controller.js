
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('LeaveApprovalController', LeaveApprovalController);

    LeaveApprovalController.$inject = ['$scope','$http', '$rootScope','$uibModal','employeePostingService','GetemployeeService', '$state','$resource','jadaApiUrl'];
    function LeaveApprovalController($scope,$http, $rootScope, $uibModal, employeePostingService,GetemployeeService, $state,$resource,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
        
        // $scope.currentemployee = $resource(jadaApiUrl + "api/employee/:id", { id: "@id" });

         $scope.searchEmployee=function(user) {

          if(user.period!=null && user.period!=""){
                  var employeeId=user.userId;
          var periodId=user.period;
          console.log("period - "+periodId+" employee - "+employeeId);
          $http.get(jadaApiUrl+'api/payrollpostingReport/'+employeeId+'/'+periodId).success(function(data) {
              $scope.oneUser = data;
              console.log($scope.oneUser
);

            });

          }
          
          //   $scope.oneUser = employeePostingService.get({employeeId:userId, periodId:period});
          // // $scope.oneUser=$scope.currentemployee.get({id:userId});
        

         };




 


 $scope.transactions=employeePostingService.query();



  $scope.loadTransactions = function () {
   
 $scope.transactions=employeePostingService.query();

   }

 $rootScope.$on("CallLoadTransactions", function(){
           $scope.loadTransactions ();
        });




  



    $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });

$http.get(jadaApiUrl+'api/department').success(function(data) {
              $scope.departments = data;

            });

$http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


   $http.get(jadaApiUrl+'api/payrollcode').success(function(data) {
               $scope.pcodes = data;
         

            });

$scope.codeChange=function(id){
              
              for(var r=0;r<$scope.pcodes.length;r++){

                if(id==$scope.pcodes[r].id){
                  $scope.description=$scope.pcodes[r].description;
                }

              }

            }

 // $scope.departments = [];
 //          $scope.loaddepts = function() {
 //            return  $scope.departments.length ? null : $http.get('http://localhost:56135/api/department').success(function(data) {
 //              $scope.departments = data;
 //            });
 //          };


// $scope.loaddepts();




        $scope.delete= function (transaction) {
                  transaction.$remove().then(function () {
                   $scope.loadTransactions ();
            });
            }
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addTransactions.html',
              controller: ModalOpenFormulaInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





$scope.show = function(trans) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'leaveapproval.html',
        controller: ModalInstanceCtrl,
        resolve: {
           trans: function () {
             return trans;
           }
         }        
        // scope : $scope
      });
    };
    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenFormulaInstanceCtrl.$inject = ['$scope', '$http','$rootScope','$uibModalInstance','employeePostingService','jadaApiUrl'];
          function ModalOpenFormulaInstanceCtrl($scope, $http,$rootScope,$uibModalInstance, employeePostingService,jadaApiUrl) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.transaction=new employeePostingService();
             $scope.submitTransaction=function() {
          $scope.transaction.$save().then(function(data){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
            $rootScope.$emit("CallLoadTransactions", {});

          }, 
          function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };


            $scope.saveCloseTransaction=function() {
          $scope.transaction.$save().then(function(){
            $rootScope.$emit("CallLoadTransactions", {});
            $scope.ok();

          },
           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };

       
         
          }
            

             ModalInstanceCtrl.$inject = ['$scope', '$http', '$rootScope','$uibModalInstance','employeePostingService','trans','jadaApiUrl'];
          function ModalInstanceCtrl($scope,$http, $rootScope,$uibModalInstance, employeePostingService,trans,jadaApiUrl) {
          $scope.transaction=trans;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            

           $scope.updateTransaction=function(transaction){
             transaction.$update().then(function(){
                   $rootScope.$emit("CallLoadTransactions", {});
            });
          
              };


         
          }
        }
    }

})();
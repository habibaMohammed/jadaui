
  /**=========================================================
   * Module: modals.js
   * Provides a simple way to implement bootstrap modals from templates
   =========================================================*/
  (function() {
      'use strict';

      angular
          .module('app.bootstrapui')
          .controller('GlmappingController', GlmappingController);

      GlmappingController.$inject = ['$scope', '$rootScope','$uibModal','bankcodeService','$stateParams', '$state'];
      function GlmappingController($scope,$rootScope, $uibModal, bankcodeService,$stateParams, $state) {
          var vm = this;

          activate();

          ////////////////

          function activate() {



  $scope.banks=bankcodeService.query();
    $scope.loadBanks = function () {
          $scope.banks=bankcodeService.query();
     }

   $rootScope.$on("CallLoadBanks", function(){
             $scope.loadBanks();
          });







    $scope.delete= function (bank) {
     bank.$remove().then(function () {
     $scope.loadBanks();

  });
  }
            
            $scope.open = function (size) {

              var modalInstance = $uibModal.open({
                templateUrl: 'addbankcodes.html',
                controller: ModalOpenBankInstanceCtrl,
                size: size
              });





              var state = $('#modal-state');
              modalInstance.result.then(function () {
                state.text('Modal dismissed with OK status');
              }, function () {
                state.text('Modal dismissed with Cancel status');
              });
            };




    $scope.show = function(bank) {
        // $scope.x = x;
        var modalInstance = $uibModal.open({
          templateUrl: 'editbankcodes.html',
          controller: ModalInstanceCtrl,
          resolve: {
             bank: function () {
               return bank;
             }
           }        
          // scope : $scope
        });
      };

      



   


            // Please note that $uibModalInstance represents a modal window (instance) dependency.
            // It is not the same as the $uibModal service used above.

            ModalOpenBankInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService'];
            function ModalOpenBankInstanceCtrl($scope, $uibModalInstance, bankcodeService) {
            
              $scope.ok = function () {
                $uibModalInstance.close('closed');
              };

              $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
              };
              $scope.bank=new bankcodeService();
               $scope.submitBank=function() {
            $scope.bank.$save().then(function(){
                 $rootScope.$emit("CallLoadBanks", {});
                 $scope.ok();
            });
    
            };
           
            }


             ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService','bank'];
            function ModalInstanceCtrl($scope, $uibModalInstance, bankcodeService,bank) {
            $scope.bank=bank;
              $scope.ok = function () {
                $uibModalInstance.close('closed');
              };

              $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
              };


              $scope.updateBank=function(bank){
    
              
              bank.$update().then(function(){
                     $rootScope.$emit("CallLoadBanks", {});
              });
            

              };

           
            }
          }
      }

  })();



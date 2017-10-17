

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('LeaveTransactionTypeController', LeaveTransactionTypeController);

   LeaveTransactionTypeController.$inject = ['$scope','$rootScope', '$uibModal','leaveTTypeService','$stateParams', '$state'];
    function LeaveTransactionTypeController($scope, $rootScope, $uibModal, leaveTTypeService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.types=leaveTTypeService.query();



   $scope.loadLeaveTTypes  = function () {
       $scope.types=leaveTTypeService.query();

   }

 $rootScope.$on("CallLoadLeaveTTypes", function(){
           $scope.loadLeaveTTypes();
        });





  $scope.delete= function (type) {
type.$remove().then(function () {
    $scope.loadLeaveTTypes();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'AddTType.html',
              controller: ModalOpenTTypeInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






$scope.show = function(transaction) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editTType.html',
        controller: ModalInstanceCtrl,
        resolve: {
           transaction: function () {
             return transaction;
           }
         }        
        // scope : $scope
      });
    };




 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenTTypeInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveTTypeService'];
          function ModalOpenTTypeInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveTTypeService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
               $scope.type=new leaveTTypeService();
           $scope.submitLeaveTType=function() {
           $scope.type.$save().then(function(){
             $rootScope.$emit("CallLoadLeaveTTypes", {});

           });
    
          }

             $scope.closeLeaveTType=function() {
           $scope.type.$save().then(function(){
             $rootScope.$emit("CallLoadLeaveTTypes", {});
               $scope.ok ();

           });
    
          }
        }

             ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveTTypeService','transaction'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveTTypeService,transaction) {
          $scope.type=transaction;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
              

               $scope.updateLeaveTType=function(type){
 
               type.$update().then(function(){
                   $rootScope.$emit("CallLoadLeaveTTypes", {});
                     });
                };

          }
        }
    }

})();

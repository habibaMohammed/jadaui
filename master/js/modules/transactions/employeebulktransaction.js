
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpBulkTransController', EmpBulkTransController);

    EmpBulkTransController.$inject = ['$scope', '$uibModal','EmpcatService','$stateParams', '$state'];
    function EmpBulkTransController($scope, $uibModal, EmpcatService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.users=EmpcatService.query();


 $scope.updateEmpCategory=function(userid){
    $scope.user=EmpcatService.get({user:userid});
  $scope.buttonText="Updating. . ."; //Once clicked change button text
  EmpcatService.update({user: userid}, $scope.user);
// $scope.oneuser.$update(function(){
//   console.log('Saving user: ' +$scope.oneuser.name);
// $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// });

};




    $scope.delete=function(user) {

        EmpcatService.remove({user: user});

          };
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'EmpBulkTransaction.html',
              controller: ModalInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(x) {
      $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EmpCategoryEdit.html',
        controller: ModalInstanceCtrl,
        scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','EmpcatService'];
          function ModalInstanceCtrl($scope, $uibModalInstance, EmpcatService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.Company=new EmpcatService();
             $scope.submitEmpCategoty=function() {
          $scope.Company.$save();
          console.log('Saving user: ' +$scope.Company.pin_number);
          };
         
          }
        }
    }

})();


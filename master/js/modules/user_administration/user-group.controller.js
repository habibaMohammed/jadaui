(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('UserGroupController', UserGroupController);

    UserGroupController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state', '$uibModal', '$log', 'UserGroupService'];
        function UserGroupController($scope, $rootScope, $http, $stateParams, $state, $uibModal, $log, UserGroupService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 $scope.usergroups=UserGroupService.query();


 // var id=$stateParams.Id;

 //           console.log( id);
 //            if(id!=null){
 //           $scope.currentworkflow=WorkflowService.get({id:id});
 //          }
           

 $scope.loadUserGroups = function () {
     
 $scope.usergroups=UserGroupService.query();
   }

 $rootScope.$on("CallLoadUserGroups", function(){
           $scope.loadUserGroups();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (usergroup) {
usergroup.$remove().then(function () {
$scope.loadWorkflows();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newUserGroup.html',
              controller: ModalOpenUserGroupInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(usergroup) {

      var modalInstance = $uibModal.open({
        templateUrl: 'EditUserGroup.html',
        controller: ModalInstanceCtrl,
        resolve: {
           usergroup: function () {
             return usergroup;
           }
         }        

      });
    };




           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenUserGroupInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','UserGroupService'];
          function ModalOpenUserGroupInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, UserGroupService) {
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


              $scope.usergroup=new UserGroupService();
             $scope.submitUserGroup=function() {
          $scope.usergroup.$save().then(function(){
           
                $rootScope.$emit("CallLoadWorkflows", {});
          });
        
          };
          
         
          }


  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','WorkflowService','usergroup'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, WorkflowService,usergroup) {
            $scope.currentgroup=usergroup;
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


                $scope.updateUserGroup=function(currentgroup){
             currentgroup.$update().then(function(){
                 $rootScope.$emit("CallLoadUserGroups", {});
            });
          
              };
          }
        }
    }

})();
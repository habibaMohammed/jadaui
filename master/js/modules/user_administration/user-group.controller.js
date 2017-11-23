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
           var SuccessMsg;
            var errorMsg;


 $scope.usergroups=UserGroupService.query();

console.log( $scope.usergroups);


 $scope.loadUserGroups = function () {
     
 $scope.usergroups=UserGroupService.query();
   }

 $rootScope.$on("CallLoadUserGroups", function(){
           $scope.loadUserGroups();
        });








  $scope.delete= function (usergroup) {
usergroup.$remove().then(function () {
$scope.loadUserGroups();
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
          $scope.usergroup.$save().then(function(data){
              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadUserGroups", {});
          },

           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };


             $scope.submitUserGroupClose=function() {
          $scope.usergroup.$save().then(function(){
            
                $rootScope.$emit("CallLoadUserGroups", {});
                $scope.ok();
          },
          
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          
         
          }


  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','UserGroupService','usergroup'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, UserGroupService,usergroup) {
       
 var id=usergroup.id;
    console.log(id);

            $scope.usergroup=UserGroupService.get({id:id});
            console.log ($scope.usergroup);

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


            //     $scope.updateUserGroup=function(currentgroup){
            //  currentgroup.$update().then(function(){
            //      $rootScope.$emit("CallLoadUserGroups", {});
            // });
          
            //   };



                $scope.updateUserGroup=function(usergroup){
            usergroup.$update().then(function(data){
                   var response=angular.fromJson(data);
            console.log($scope.leave);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
                     $scope.user=UserGroupService.get({id:id});
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
          
            }
             $rootScope.$emit("CallLoadUserGroupss", {});
            }, function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                }
            );
          
              };
          }
        }
    }

})();
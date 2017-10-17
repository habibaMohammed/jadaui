(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('UserAdminController', UserAdminController);

    UserAdminController.$inject = ['$scope', '$http', '$uibModal', '$log', 'userAdminService'];
        function UserAdminController($scope, $http, $uibModal, $log, userAdminService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


  $scope.users=userAdminService.query();

  $scope.updateUser=function(userId) {
 $scope.oneUser=userAdminService.get({user:userId});
  // $scope.oneUser = { id : userId};
  //  $scope.oneUser = { name : oneUser.name};
 userAdminService.update({user:userId}, $scope.oneuser);

// $scope.oneUser.$update(function(){
// $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// });
//           $scope.updatePost=function(){
// $scope.buttonText="Updating. . ."; //Once clicked change button text

// $scope.oneuser.$update(function(){
// $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// });
// };


         };





$scope.open = function() {
    //$scope.x = x;
    var modalInstance = $uibModal.open({
      templateUrl: 'ModalContent.html',
      controller: ModalInstanceCtrl,
     // scope : $scope
       // resolve: {
       //   x: function() {
       //        return x;
       //    }}
    });
  };
$scope.show = function(x) {
    $scope.x = x;
    var modalInstance = $uibModal.open({
      templateUrl: 'edit-user-setting.html',
      controller: ModalInstanceCtrl,
      scope : $scope
    });
  };

           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','userAdminService'];
          function ModalInstanceCtrl($scope, $uibModalInstance, userAdminService) {
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
          
         
          }
        }
    }

})();
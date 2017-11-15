


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DeptController', DeptController);

    DeptController.$inject = ['$scope', '$rootScope','$uibModal','DeptService','$stateParams', '$state','$localStorage'];
    function DeptController($scope, $rootScope,$uibModal, DeptService,$stateParams, $state,$localStorage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.departments=DeptService.query();

var accountRights=$localStorage.currentUser.accountRights;
for(var r=0;r<accountRights.length;r++){
  // console.log("array "+r+" : ");
  // console.log(accountRights[r]);
  if(accountRights[r].module=="department"){
    // console.log("department");
    $scope.showDepartment=accountRights[r].access;
    $scope.createDepartment=accountRights[r].create;
    $scope.editDepartment=accountRights[r].update;
     $scope.readDepartments=accountRights[r].read;
    $scope.deleteDepartment=accountRights[r].delete;

    break;

  }
}



   $scope.loadDepartments = function () {
       $scope.departments=DeptService.query();

   }

 $rootScope.$on("CallLoadDepartment", function(){
           $scope.loadDepartments();
        });


//  $scope.updatedept=function(id){

//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   DeptService.update({ID: id}, $scope.department);
// // $scope.oneuser.$update(function(){
// //   console.log('Saving user: ' +$scope.oneuser.name);
// // $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// // });


  

//    $scope.dept= new DeptService();
//   $scope.submitdept = function() {
         

            
//              $scope.dept.$save().then(function(newDepartment) {
//  $scope.departments.push(newDepartment);

              
// });
//  }





  $scope.deletedept= function (department) {
department.$remove().then(function () {
  $scope.loadDepartments();
});
}
    // $scope.deletedept=function(id) {

    //     DeptService.({ID: id});

    //       };
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newDepartment.html',
              controller: ModalOpenDeptInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






    


  $scope.show = function(department) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editDepartment.html',
        controller: ModalInstanceCtrl,
        resolve: {
           department: function () {
             return department;
           }
         }        
        // scope : $scope
      });
    };


 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenDeptInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','DeptService'];
          function ModalOpenDeptInstanceCtrl($scope, $rootScope,$uibModalInstance, DeptService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

             
            $scope.dept=new DeptService();
           $scope.submitdept=function() {


           $scope.dept.$save().then(function(data){

              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              
                     $scope.errorMsg=false;

                    $scope.SuccessMsg =response.Message;

           

            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadDepartment", {});
   
                // if ($scope.deptform) $scope.deptform.$setPristine();


           },
   
            function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                }).finally(function(){     $scope.dept = "";
      $scope.deptform.$setPristine();
        });
      
          }

    //         $scope.reset = function() {
    //   $scope.dept = {};
    //   $scope.deptform.$setPristine();
    // }

          $scope.submitdeptClose=function() {
           $scope.dept.$save().then(function(){
             $rootScope.$emit("CallLoadDepartment", {});
             $scope.ok();

           },
             function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
      
          };
         
         
          }


          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','DeptService','department'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, DeptService,department) {
          $scope.department=department;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


          
                $scope.updatedept=function(department){
             department.$update().then(function(){
                   $rootScope.$emit("CallLoadDepartment", {});
            });
          
              };
          
         
          }
        }
    }

})();

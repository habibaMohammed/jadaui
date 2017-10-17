(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('WorkflowController', WorkflowController);

    WorkflowController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state', '$uibModal', '$log', 'WorkflowService'];
        function WorkflowController($scope, $rootScope, $http, $stateParams, $state, $uibModal, $log, WorkflowService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
 var SuccessMsg;
 var errorMsg;

 $scope.workflows=WorkflowService.query();


 // var id=$stateParams.Id;

 //           console.log( id);
 //            if(id!=null){
 //           $scope.currentworkflow=WorkflowService.get({id:id});
 //          }
           

 $scope.loadWorkflows = function () {
     
 $scope.workflows=WorkflowService.query();
   }

 $rootScope.$on("CallLoadWorkflows", function(){
           $scope.loadWorkflows();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (workflow) {
workflow.$remove().then(function () {
$scope.loadWorkflows();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newWorkflow.html',
              controller: ModalOpenWorkflowInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(workflow) {

      var modalInstance = $uibModal.open({
        templateUrl: 'Editworkflow.html',
        controller: ModalInstanceCtrl,
        resolve: {
           workflow: function () {
             return workflow;
           }
         }        

      });
    };




           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenWorkflowInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','WorkflowService'];
          function ModalOpenWorkflowInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, WorkflowService) {
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


              $scope.workflow=new WorkflowService();
             $scope.submitWorkflow=function() {
          $scope.workflow.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadWorkflows", {});
          },function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          

            $scope.closeWorkflow=function() {
          $scope.workflow.$save().then(function(){
           
                $rootScope.$emit("CallLoadWorkflows", {});
                $scope.ok();
          },function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
         
          }


  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','WorkflowService','workflow'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, WorkflowService,workflow) {
            $scope.currentworkflow=workflow;
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
          
         


                $scope.updateWorkflow=function(workflow){
             workflow.$update().then(function(){
                 $rootScope.$emit("CallLoadWorkflows", {});
            });
          
              };
          }
        }
    }

})();
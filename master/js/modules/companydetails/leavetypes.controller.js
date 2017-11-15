

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('LeaveController', LeaveController);

   LeaveController.$inject = ['$scope','$rootScope', '$uibModal','leaveService','GetleaveTypeService','$stateParams', '$state'];
    function LeaveController($scope, $rootScope, $uibModal, leaveService,GetleaveTypeService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.leaves=GetleaveTypeService.query();


console.log($scope.leaves);
   $scope.loadLeaveTypes = function () {
       $scope.leaves=GetleaveTypeService.query();

   }

 $rootScope.$on("CallLoadLeaveTypes", function(){
           $scope.loadLeaveTypes();
        });





  $scope.delete= function (leavetype) {
leavetype.$remove().then(function () {
    $scope.loadLeaveTypes();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addLeave.html',
              controller: ModalOpenLeaveInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






$scope.show = function(leaveType) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editLeave.html',
        controller: ModalInstanceCtrl,
        resolve: {
           leaveType: function () {
             return leaveType;
           }
         }        
        // scope : $scope
      });
    };




 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenLeaveInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveService'];
          function ModalOpenLeaveInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
               $scope.leave=new leaveService();
           $scope.submitLeaveTypes=function() {
           $scope.leave.$save().then(function(data){

             var response=angular.fromJson(data);
            console.log($scope.leave);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
          
            }
             $rootScope.$emit("CallLoadLeaveTypes", {});

           },
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }
             $scope.closesubmitLeaveTypes=function() {
           $scope.leave.$save().then(function(){
             $rootScope.$emit("CallLoadLeaveTypes", {});
               $scope.ok();

           },
            function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }

        }

             ModalInstanceCtrl.$inject = ['$scope','$http', '$rootScope','$uibModalInstance','GetleaveTypeService','leaveService','leaveType','jadaApiUrl','$resource'];
          function ModalInstanceCtrl($scope, $http,$rootScope,$uibModalInstance, GetleaveTypeService,leaveService,leaveType,jadaApiUrl,$resource) {
 var id=leaveType.id;
          $scope.leave=GetleaveTypeService.get({id:1});
           // $http.get(jadaApiUrl+'api/leavetype/'+1).success(function(data) {
           //    $scope.leave= data;

           //  });


           // var postingsResource = $resource(jadaApiUrl+'api/leavetype/update/:id', 
           //                                     {id: 1}, 
           //                                   { 'update': { method:'PUT' }});
          console.log(id);
          console.log($scope.leave);

            

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
              var leaveUpdated=GetleaveTypeService.get({id:1});

               $scope.UpdateLeaveTypes=function(leave){
           leaveService.update({id: 1}, $scope.leave);
            $rootScope.$emit("CallLoadLeaveTypes", {});

           // leave.$update().then(function(){
           //         // $rootScope.$emit("CallLoadEmployeeCategory", {});
           //  });

                };

          }
        }
    }

})();

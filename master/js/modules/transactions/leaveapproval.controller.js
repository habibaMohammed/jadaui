
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('LeaveApprovalController', LeaveApprovalController);

    LeaveApprovalController.$inject = ['$scope','$http', '$rootScope','$uibModal', '$state','$resource','jadaApiUrl','LeaveApprovalService'];
    function LeaveApprovalController($scope,$http, $rootScope, $uibModal, $state,$resource,jadaApiUrl,LeaveApprovalService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
        

     
$scope.pendingleaves=LeaveApprovalService.query();
console.log($scope.pendingleaves);

     

var leavenotification=$scope.pendingleaves.length;

console.log(leavenotification);
 





 $scope.leavenotification = function () {
var count = 0;
angular.forEach($scope.pendingleaves, function (item) {
if (!item.isApproved) { count++ }
});
return count;


}

   $scope.loadPendingLeaves = function () {
$scope.pendingleaves=LeaveApprovalService.query();

   }

 $rootScope.$on("CallLoadPendingLeaves", function(){
           $scope.loadPendingLeaves();
        });




$scope.totalNotification=function(){
  var total=$scope.leavenotification()+1;
  return total;
  console.log(here);
  console.log(total);

}


$scope.show = function(leave) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'leaveapproval.html',
        controller: ModalInstanceCtrl,
        resolve: {
           leave: function () {
             return leave;
           }
         }        
        // scope : $scope
      });
    };
    



 



             ModalInstanceCtrl.$inject = ['$scope', '$http', '$rootScope','$uibModalInstance','LeaveApprovalService','leave','jadaApiUrl'];
          function ModalInstanceCtrl($scope,$http, $rootScope,$uibModalInstance, LeaveApprovalService,leave,jadaApiUrl) {
          $scope.leave=leave;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            

           $scope.approveLeave=function(leave){
             leave.$update().then(function(){
                   $rootScope.$emit("CallLoadPendingLeaves", {});
            });
          
              };


         
          }
        }
    }

})();
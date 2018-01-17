
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('LeaveApprovalController', LeaveApprovalController);

    LeaveApprovalController.$inject = ['$scope','$http', '$rootScope','$uibModal', '$state','$resource','jadaApiUrl','LeaveApprovalService','PayrollApprovalService'];
    function LeaveApprovalController($scope,$http, $rootScope, $uibModal, $state,$resource,jadaApiUrl,LeaveApprovalService,PayrollApprovalService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
  $scope.count='0';
        
$scope.approvedgpayroll={};
     
$scope.pendingleaves=LeaveApprovalService.query();
console.log($scope.pendingleaves);

     

var leavenotification=$scope.pendingleaves.length;

console.log(leavenotification);
var currentperiod=0
 

// $http.get(jadaApiUrl+'api/pendingpayrolltransaction').success(function(data) {
//               $scope.pendingpayroll =data;
//           console.log('here');
//           console.log($scope.pendingpayroll.status);
//           if($scope.pendingpayroll.status==0){
//             $rootScope.payrollpendig=1;


//           }
//             });
          

// $http.get(jadaApiUrl+'api/approvedpayrolltransaction').success(function(data) {
//               $scope.approvedgpayroll=data;
           
//           // console.log($scope.approvedgpayroll);
//           // if($scope.approvedgpayroll.status=="1"){
//           // console.log('called here'+$scope.approvedgpayroll.status);

//            $scope.pendingpayroll($scope.approvedgpayroll.status);
         
//            // }

//           // console.log('leave');
//         // console.log($scope.approvedgpayroll.status)
//             });

  $scope.pendingpayroll=function() {
            var count=0;
           $http.get(jadaApiUrl+'api/approvedpayrolltransaction').success(function(data) {
              $scope.payrollpending=data;

               if($scope.payrollpending.status=="1"){
        

        count=count+1;
         
           }

           return count;
            });
          };




$http.get(jadaApiUrl+'api/rejectedpayrolltransaction').success(function(data) {
              $scope.rejectedgpayroll =data;

          console.log($scope.rejectedgpayroll);
            });


 $scope.leavenotification = function () {
var count = 2;
angular.forEach($scope.pendingleaves, function (item) {
if (!item.isApproved) { count++ }
});
return count;


}

 $scope.approvedpayroll = function () {
var count = 0;
if( $rootScope.approvedgpayroll==1)
{
count=1;
}
  console.log($rootScope.approvedgpayroll)

return count;


}
// console.log('ERRR')
//  $scope.approvedpayroll();


//  $scope.pendingpayroll=function (status) {
 
//             if(status=="1"){

//               $scope.count="1";
//               console.log("status tail : "+status);
//           console.log('called here : '+$scope.approvedgpayroll.status);

// }




// }

//  $scope.pendingpayroll = function () {
// var count = 0;

// return count;


// }

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
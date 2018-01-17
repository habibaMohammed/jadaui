
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['$scope','$http', '$rootScope','$state','$resource','jadaApiUrl','LeaveApprovalService','PayrollApprovalService'];
    function NotificationController($scope,$http, $rootScope,  $state,$resource,jadaApiUrl,LeaveApprovalService,PayrollApprovalService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
        

     

     
$scope.pendingleaves=LeaveApprovalService.query();
console.log($scope.pendingleaves);

     

var leavenotification=$scope.pendingleaves.length;

console.log('leavenotification');
 





 $scope.leavenotification=function () {
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




var currentperiod=12;
    $scope.payrollpending=PayrollApprovalService.get({periodId:currentperiod});

      var response=angular.fromJson($scope.payrollpending);
      console.log(response.id)
    // console.log($scope.payrollpending);
  //   var x =JSON.stringify($scope.payrollpending);
  // console.log(X.status);
    // console.log(JSON.stringify($scope.payrollpending));


  $http.get(jadaApiUrl+'api/payrolltransactionapproval/'+currentperiod).success(function(data) {
              $scope.pendings = data;
              $scope.astatus=data.status;
             
            });
  


 $scope.payrollpending = function () {
var count = 0;
angular.forEach( $scope.payrollpending, function (item) {
if (!item.isApproved) { count++ }
});
return count;


}

 $scope.payrollpending();

    








    



 



        }
    }

})();
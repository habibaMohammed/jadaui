
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['$scope','$http', '$rootScope','$state','$resource','jadaApiUrl','LeaveApprovalService'];
    function NotificationController($scope,$http, $rootScope,  $state,$resource,jadaApiUrl,LeaveApprovalService) {
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



    








    



 



        }
    }

})();
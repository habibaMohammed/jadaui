(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['$scope','$rootScope', '$http','NotificationService'];
        function NotificationController($scope, $rootScope, $http,NotificationService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


 var SuccessMsg;
 var errorMsg;
  $scope.leavenotification=NotificationService.query();
// console.log($scope.users);


$scope.leavenotification = function () {
var count = 0;
angular.forEach(  $scope.leavenotification, function (notification) {
if (!notification.id) { count++ }
});
return count;
}

//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




          

        }
    }

})();
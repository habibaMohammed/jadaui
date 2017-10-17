


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('FinancialPeriodsController', FinancialPeriodsController);

    FinancialPeriodsController.$inject = ['$scope', '$rootScope','$uibModal','financialPeriodService','$stateParams', '$state'];
    function FinancialPeriodsController($scope, $rootScope, $uibModal, financialPeriodService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.periods=financialPeriodService.query();


 $scope.updateEmpCategory=function(userid){
    $scope.user=financialPeriodService.get({user:userid});
  $scope.buttonText="Updating. . ."; //Once clicked change button text
  financialPeriodService.update({user: userid}, $scope.user);
// $scope.oneuser.$update(function(){
//   console.log('Saving user: ' +$scope.oneuser.name);
// $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// });

};


   $scope.loadPeriods = function () {
   $scope.periods=financialPeriodService.query();

   }

 $rootScope.$on("CallLoadPeriods", function(){
           $scope.loadPeriods();
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





  $scope.delete= function (period) {
period.$remove().then(function () {
$scope.loadPeriods();
});
}



          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newFperiods.html',
              controller: ModalOpenFperiodsInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




    


  $scope.show = function(period) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editFperiods.html',
        controller: ModalInstanceCtrl,
        resolve: {
           period: function () {
             return period;
           }
         }        
        // scope : $scope
      });
    };



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenFperiodsInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','financialPeriodService'];
          function ModalOpenFperiodsInstanceCtrl($scope,$rootScope, $uibModalInstance, financialPeriodService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };
            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.period=new financialPeriodService();
             $scope.submitPeriod=function() {
          $scope.period.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
                   
                   $scope.SuccessMsg=false;
               
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
              $rootScope.$emit("CallLoadPeriods", {}); 
          }, 
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };

              $scope.submitClosePeriod=function() {
          $scope.period.$save().then(function(){
            
              $rootScope.$emit("CallLoadPeriods", {}); 
                 $scope.ok();
          }, 
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };
         
          }


          ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','financialPeriodService','period'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, financialPeriodService,period) {
          $scope.period=period;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
         
                $scope.updatePeriods=function(period){
             period.$update().then(function(){
                   $rootScope.$emit("CallLoadPeriods", {});
            });
          
              };
          }
        }
    }

})();

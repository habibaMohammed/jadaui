
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpCatController', EmpCatController);

    EmpCatController.$inject = ['$scope', '$http', '$rootScope','$uibModal','EmpcatService','$stateParams', '$state','jadaApiUrl'];
    function EmpCatController($scope,$http,$rootScope, $uibModal, EmpcatService,$stateParams, $state,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
 var SuccessMsg;
 var errorMsg;



$scope.categories=EmpcatService.query();

$http.get(jadaApiUrl+'api/payfrequency').success(function(data) {
              $scope.frequencies = data;
              console.log($scope.frequencies);

            });




  $scope.loadEmployeeCategory = function () {
   
$scope.categories=EmpcatService.query();
   }

 $rootScope.$on("CallLoadEmployeeCategory", function(){
           $scope.loadEmployeeCategory ();
        });


             $scope.delete= function (cat) {
            cat.$remove().then(function () {
         $scope.loadEmployeeCategory ();
            });
            }


 
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'EmpCategoryContent.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






    

$scope.show = function(category) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EmpCategoryEdit.html',
        controller: ModalInstanceCtrl,
        resolve: {
           category: function () {
             return category;
           }
         }        
        // scope : $scope
      });
    };



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenInstanceCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance','EmpcatService'];
          function ModalOpenInstanceCtrl($scope, $rootScope, $uibModalInstance, EmpcatService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.employeecategory=EmpcatService.query();
           $scope.category=new EmpcatService();
             $scope.submitEmpCategoty=function() {
            
            $scope.category.$save().then(function(data){
              var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
            $rootScope.$emit("CallLoadEmployeeCategory", {});

            }, function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
          
          };

          $scope.EmpCategotyClose=function() {
            
            $scope.category.$save().then(function(){
            $rootScope.$emit("CallLoadEmployeeCategory", {});
            $scope.ok();

            },
            function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          
          };
         
          }



          ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance','EmpcatService','category'];
          function ModalInstanceCtrl($scope, $rootScope, $uibModalInstance, EmpcatService,category) {
          $scope.cat=category;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
           
           $scope.updateEmpCategory=function(cat){
             cat.$update().then(function(){
                   $rootScope.$emit("CallLoadEmployeeCategory", {});
            });
          
              };
          }
        }
    }

})();

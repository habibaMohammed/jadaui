
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('BankCodeController', BankCodeController);

    BankCodeController.$inject = ['$scope', '$rootScope','$uibModal','bankcodeService','$stateParams', '$state','DTOptionsBuilder', 'DTColumnDefBuilder'];
    function BankCodeController($scope,$rootScope, $uibModal, bankcodeService,$stateParams, $state,DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.banks=bankcodeService.query();
  $scope.loadBanks = function () {
        $scope.banks=bankcodeService.query();
   }

 $rootScope.$on("CallLoadBanks", function(){
           $scope.loadBanks();
        });







  $scope.delete= function (bank) {
   bank.$remove().then(function () {
   $scope.loadBanks();

});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addbankcodes.html',
              controller: ModalOpenBankInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(bank) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editbankcodes.html',
        controller: ModalInstanceCtrl,
        resolve: {
           bank: function () {
             return bank;
           }
         }        
        // scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenBankInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService'];
          function ModalOpenBankInstanceCtrl($scope, $uibModalInstance, bankcodeService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
             
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
           
          $scope.bank=new bankcodeService();
             $scope.submitBankClose=function() {
          $scope.bank.$save().then(function(){

         
               $rootScope.$emit("CallLoadBanks", {});
               $scope.ok();
          },
          function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
  
          };



            $scope.submitBank=function() {
          $scope.bank.$save().then(function(data){
               var response=angular.fromJson(data);
         
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
                $scope.SuccessMsg=false;
                $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadBanks", {});
            
          },
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
  
          };
         
          }


           ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService','bank'];
          function ModalInstanceCtrl($scope, $uibModalInstance, bankcodeService,bank) {
          $scope.bank=bank;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


            $scope.updateBank=function(bank){
  
            
            bank.$update().then(function(){
                   $rootScope.$emit("CallLoadBanks", {});
            });
          

            };

         
          }
        }
    }

})();





/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
// (function() {
//     'use strict';

//     angular
//         .module('app.bootstrapui')
//         .controller('PayPointController', PayPointController);

//     PayPointController.$inject = ['$scope','$rootScope', '$uibModal','PaypointService','$stateParams', '$state'];
//     function PayPointController($scope,$rootScope, $uibModal, PaypointService,$stateParams, $state) {
//         var vm = this;

//         activate();

//         ////////////////

//         function activate() {



// $scope.points=PaypointService.query();


//  $scope.updatePayPoint=function(id){
  
//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   PaypointService.update({id: id}, $scope.point);

// };

//    $scope.loadPoints = function () {
//         $scope.points=PaypointService.query();
//    }

//  $rootScope.$on("CallParentMethod", function(){
//            $scope.loadPoints();
//         });

//     // $scope.delete=function(id) {

//     //     PaypointService.remove({id: id});
//     //     $scope.loadPoints();

//     //       };
          

//   $scope.delete= function (point) {
// point.$remove().then(function () {
//   $scope.loadPoints();
// // $scope.plist.splice($scope.plist.indexOf(code), 1);
// });
// }


//           $scope.open = function (size) {

//             var modalInstance = $uibModal.open({
//               templateUrl: 'PayPointContent.html',
//               controller: ModalOpenInstanceCtrl,
//               size: size
//             });





//             var state = $('#modal-state');
//             modalInstance.result.then(function () {
//               state.text('Modal dismissed with OK status');
//             }, function () {
//               state.text('Modal dismissed with Cancel status');
//             });
//           };




//   $scope.show = function(point) {
//       // $scope.x = x;
//       var modalInstance = $uibModal.open({
//         templateUrl: 'PayPointEdit.html',
//         controller: ModalInstanceCtrl,
//         resolve: {
//            point: function () {
//              return point;
//            }
//          }        
//         // scope : $scope
//       });
//     };

    



 


//           // Please note that $uibModalInstance represents a modal window (instance) dependency.
//           // It is not the same as the $uibModal service used above.

//           ModalOpenInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService'];
//           function ModalOpenInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService) {
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }

//           ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService','point'];
//           function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService,point) {
//             $scope.point=point;
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }
//         }
//     }

// })();

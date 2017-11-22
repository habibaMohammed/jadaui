
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpBulkTransController', EmpBulkTransController);

    EmpBulkTransController.$inject = ['$scope','$http', '$uibModal','PayrollBatchPostingService','$stateParams', '$state','readFileData','jadaApiUrl'];
    function EmpBulkTransController($scope, $http,$uibModal, PayrollBatchPostingService,$stateParams, $state,readFileData,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

$scope.fileDataObj = [];

            $scope.fileData ={ };
    
    $scope.uploadFile = function() {
      if ($scope.fileContent) {
        $scope.fileDataObj = readFileData.processData($scope.fileContent);
      
        // $scope.fileData = JSON.stringify($scope.fileDataObj);
         $scope.fileData =  $.parseJSON($scope.fileDataObj);

var jdata= JSON.stringify($scope.fileData);
        console.log( $scope.fileData);
      }
    }



            $scope.cancel = function () {
           
            $scope.fileData =' ';
            };


 // $scope.fileData=new employeePostingService();

 // var vdata ={"period":"1","employee_number":"P001","payroll_code":"D040","amount":"2000"};
 $scope.save = function () {
var list=$scope.fileData;
for(var r=0;r<list.length;r++){
  var vdata =list[r];
  console.log(vdata);
  // var postingdata = new PayrollBatchPostingService(vdata);
    $http.post(jadaApiUrl+'api/payrollsingleposting/', {vdata}).success(
      function(data){
        vdata.success=true;
        $scope.response = data
        console.log(data);
      })

}

  }
//             $scope.save = function () {
// var postingdata = $scope.fileData;
// console.log(postingdata);
//               $http({
//   url: jadaApiUrl+'api/payrollbatchposting/',
//   method: "POST",
//   data: postingdata,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   }
// }).then(function(){
//   console.log('success');
// })
              // v
              // postingdata.$save();

        //        postingdata.$save().then(function(data){
        //      var response=angular.fromJson(data);
          
        //     if(response.Status=="1"){
        //       $scope.errorMsg=false;
        //             $scope.SuccessMsg =response.Message;
        //     }else{
           
        //        $scope.SuccessMsg=false;
        //            $scope.errorMsg=response.Message;
           
        //     }
     

        //   }, 
        //   function() {
        //      $scope.SuccessMsg=false;
        //          $scope.errorMsg = 'Server Request Error';
        //         });
           
          
        // console.log(  postingdata);
        //     };
// var ExcelToJSON = function() {

//   this.parseExcel = function(file) {
//     var reader = new FileReader();

//     reader.onload = function(e) {
//       var data = e.target.result();
//       var workbook = XLSX.read(data, {
//         type: 'binary'
//       });

//       workbook.SheetNames.forEach(function(sheetName) {
//         // Here is your object
//         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//         var json_object = JSON.stringify(XL_row_object);
//         console.log(json_object);

//       })

//     };

//     reader.onerror = function(ex) {
//       console.log(ex);
//     };

//     reader.readAsBinaryString(file);
//   };
// };



     // $scope.open = function (size) {

     //        var modalInstance = $uibModal.open({
     //          templateUrl: 'EmpBulkTransaction.html',
     //          controller: ModalInstanceCtrl,
     //          size: size
     //        });





     //        var state = $('#modal-state');
     //        modalInstance.result.then(function () {
     //          state.text('Modal dismissed with OK status');
     //        }, function () {
     //          state.text('Modal dismissed with Cancel status');
     //        });
     //      };



//             ModalInstanceCtrl.$inject = ['$scope', '$http', '$rootScope','$uibModalInstance'];
//           function ModalInstanceCtrl($scope,$http, $rootScope,$uibModalInstance) {
         
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
            

// $scope.fileDataObj = {};
    
//     $scope.uploadFile = function() {
//       if ($scope.fileContent) {
//         $scope.fileDataObj = readFileData.processData($scope.fileContent);
      
//         $scope.fileData = JSON.stringify($scope.fileDataObj);
//       }
//     }

//            // $scope.updateTransaction=function(transaction){
//            //   transaction.$update().then(function(){
//            //         $rootScope.$emit("CallLoadTransactions", {});
//            //  });
          
//            //    };


         
//           }
        }
    }

})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmployeeBatchPostingController', EmployeeBatchPostingController);

    EmployeeBatchPostingController.$inject = ['$scope', '$http','$uibModal','EmployeeBatchPostingService','$stateParams', '$state','readFileData','jadaApiUrl'];
    function EmployeeBatchPostingController($scope,$http, $uibModal, EmployeeBatchPostingService,$stateParams, $state,readFileData,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

$scope.fileDataObj = [];

            // $scope.fileData ={ };
    
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


//           var mdata  ={"name ":"Jane Doe","employeeNumber":"123","idNumber":"345678","passportNumber":"","countryOfIssue":"","expiryDate":"","dateOfBirth":"","maritalStatus":"single","gender":"female","dependency":"2","nextOfKin":"John","relationshipWithKin":"father","nextOfKinPhoneNumber":"","disability":"no","natureOfDisability":"","phoneNumber":"728445521","emailAddress":"janedoe@gmail.com","physicalAddress":"Thome","postalAddress":"108","postalCode":"10007","pinNumber":"111222","nhifNumber":"2222","nssfNumber":"5555","helbNumber":"5555","employmentDate":"21/11/2017","paypoint":"nakuru","paymode":"bank","bankcode":"1111","bankName":"KCB","bankAccountNumber":"298978","bankAccountName":"Jane Doe","bankBranchName":"Nakuru","department":"D001","costCenter":"C001","employeeCategory":"2","employeeGroup":"3","position":"intern"}
//  $scope.save = function () {
// var list=$scope.fileData;
//     $http.post(jadaApiUrl+'api/employeesingleposting/', {mdata}).success(
//       function(data){
//         vdata.success=true;
//         $scope.response = data
//         console.log(data);
//       })




// // for(var r=0;r<list.length;r++){
// //   var vdata =list[r];
// //   console.log(vdata);
// //   // var postingdata = new PayrollBatchPostingService(vdata);
// //     $http.post(jadaApiUrl+'api/employeesingleposting/', {vdata}).success(
// //       function(data){
// //         vdata.success=true;
// //         $scope.response = data
// //         console.log(data);
// //       })

// // }

//   }

       $scope.save = function () {
var list=$scope.fileData;
for(var r=0;r<list.length;r++){
  var vdata =list[r];
  console.log(vdata);
  // var postingdata = new PayrollBatchPostingService(vdata);
    $http.post('http://localhost:56135/api/employeesingleposting/', {vdata}).success(
      function(data){
        $scope.fileData[r].success=true;
        $scope.response = data
        console.log(data);
      })

}

  }




        }
    }

})();


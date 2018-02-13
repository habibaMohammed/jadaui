
    /**=========================================================
     * Module: modals.js
     * Provides a simple way to implement bootstrap modals from templates
     =========================================================*/
    (function() {
        'use strict';

        angular
            .module('app.bootstrapui')
            .controller('EmployeeBatchPostingController', EmployeeBatchPostingController);

        EmployeeBatchPostingController.$inject = ['$scope', '$http','$uibModal','PayrollBatchPostingService','$stateParams', '$state','readFileEmployeeData','jadaApiUrl'];
        function EmployeeBatchPostingController($scope,$http, $uibModal, PayrollBatchPostingService,$stateParams, $state,readFileEmployeeData,jadaApiUrl) {
            var vm = this;

            activate();

            ////////////////

            function activate() {

                  var SuccessMsg;
                  var errorMsg;


            $scope.fileDataObj = [];

        
        $scope.uploadFile = function() {
          if ($scope.fileContent) {
            $scope.fileDataObj = readFileEmployeeData.processData($scope.fileContent);
          
             $scope.fileData = $.parseJSON($scope.fileDataObj);

    var jdata= JSON.stringify($scope.fileData);
            
          }
        }



                $scope.cancel = function () {
               
                $scope.fileData =' ';
                };



     $scope.save = function () {

    var list=$scope.fileData;
    for(var r=0;r<list.length;r++){
      var vdata =list[r];
    var postingdata = new PayrollBatchPostingService(vdata);

    postingdata.$save().then(function(data){
                    var response=angular.fromJson(data);
              
                if(response.Status=="1"){
                       $scope.errorMsg=false;
                        $scope.SuccessMsg =response.Message;
                }else{
               
                        $scope.SuccessMsg=false;
                       $scope.errorMsg=response.Message;
        
                }
               

                  },
                   function() {
                    $scope.SuccessMsg=false;
                     $scope.errorMsg = 'Server Request Error';
                    });
    }
      
            }
        }
      }

    })();


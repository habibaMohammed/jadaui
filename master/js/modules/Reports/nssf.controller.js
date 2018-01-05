(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NssfController', NssfController);

    NssfController.$inject = ['$scope','$http','$resource', 'NssfService','jadaApiUrl'];
    function NssfController($scope,$http,$resource,NssfService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

        $scope.nssfs=NssfService.get({periodId:12});
           console.log( $scope.nssfs);
          
            
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


  $scope.getByperiod=function(period){
        
               $scope.nssfs=NssfService.get({periodId:period});

          }


              $scope.showcurrentperiod=function(id){
               console.log(id)
                for(var r=0;r< $scope.periods.length;r++){
                  if(id==$scope.periods[r].id){

              
                    $scope.currentMonth=$scope.periods[r].month+' '+$scope.periods[r].year;
                    console.log($scope.currentMonth)
                  }
                  
                }
                


  // $scope.currentleaveType='Exam'+id;
              }

        }
    }
})();
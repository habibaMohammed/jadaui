(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NhifController', NhifController);

    NhifController.$inject = ['$scope','$http','$resource', 'NhifService1','jadaApiUrl'];
    function NhifController($scope,$http,$resource,NhifService1,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.nhifs=NhifService1.get({periodId:12});
        
console.log( $scope.nhifs);
          

          $scope.getByperiod=function(period){
        
            $scope.nhifs=NhifService1.get({periodId:period});

          }

            
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });


              $http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });



              $scope.showcurrentperiod=function(id){
               console.log(id)
                for(var r=0;r< $scope.periods.length;r++){
                  if(id==$scope.periods[r].id){

              
                    $scope.currentMonth=$scope.periods[r].month+' '+$scope.periods[r].year;
                    console.log($scope.currentMonth)
                  }
                  
                }
                
              }


               $scope.exportToExcel=function(tableId){ // ex: '#my-table'
            var exportHref=Excel.tableToExcel(tableId,'WireWorkbenchDataExport');
            $timeout(function(){location.href=exportHref;},100); // trigger download
        }
        }
    }
})();
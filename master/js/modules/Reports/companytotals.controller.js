(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanyTotalsController', CompanyTotalsController);

    CompanyTotalsController.$inject = ['$scope','$http','$resource', 'CompanyTotalsService','jadaApiUrl','Excel','$timeout'];
    function CompanyTotalsController($scope,$http,$resource,CompanyTotalsService,jadaApiUrl,Excel,$timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

       var period=1;
        $scope.companytotals=CompanyTotalsService.get({periodId:1});

          $scope.getByperiod=function(period){
        
            $scope.companytotals=CompanyTotalsService.get({periodId:period});

          }

          $scope.greaterThan = function(prop, val){
    return function(item){
      return item[prop] > val;
    }
}


    
              $http.get(jadaApiUrl+'api/period').success(function(data) {
              $scope.periods = data;

            });



          
$scope.printDiv = function (div) {
    console.log('hellow print');
  var docHead = document.head.outerHTML;
  var printContents = document.getElementById(div).outerHTML;
  var winAttr = "location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=yes, screenX=200, screenY=200, personalbar=no, scrollbars=yes";

  var newWin = window.open("", "_blank", winAttr);
  var writeDoc = newWin.document;
  writeDoc.open();
  writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
  writeDoc.close();
  newWin.focus();
}



 $scope.exportToExcel=function(tableId){ // ex: '#my-table'
            var exportHref=Excel.tableToExcel(tableId,'WireWorkbenchDataExport');
            $timeout(function(){location.href=exportHref;},100); // trigger download
        }



        }
    }
})();
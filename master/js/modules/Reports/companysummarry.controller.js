(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanySumarryController', CompanySumarryController);

    CompanySumarryController.$inject = ['$scope','$http','$resource', 'CompanySummaryService','jadaApiUrl'];
    function CompanySumarryController($scope,$http, $resource,CompanySummaryService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.get({periodId:1});
        console.log( $scope.companysumaries);

          

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

        }
    }
})();
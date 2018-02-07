

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayrollJournalReportController', PayrollJournalReportController);

    PayrollJournalReportController.$inject = ['$scope','$http','$resource','jadaApiUrl','PayrollLedgerReportService','FileSaver','Blob'];
    function PayrollJournalReportController($scope,$http,$resource,jadaApiUrl,PayrollLedgerReportService,FileSaver,Blob) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



               $scope.jounalreports=PayrollLedgerReportService.query();
     console.log($scope.jounalreports)
            


  $scope.download = function(table) {
    // var data = new Blob([text], { type: 'text/plain;charset=utf-8' });
    // FileSaver.saveAs(data, 'text.txt');


  var ele = document.getElementById(table);
var blob = new Blob([ele.innerText], {
        type: "text/plain;charset=utf-8"
    });
    FileSaver.saveAs(blob, "bank-file.txt");
};
           

          


        }
    }
})();

















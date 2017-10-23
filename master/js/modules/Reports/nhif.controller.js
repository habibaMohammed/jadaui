(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NhifController', NhifController);

    NhifController.$inject = ['$scope','$resource', 'NhifService'];
    function NhifController($scope,$resource,NhifService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=NhifService.query();

          

        }
    }
})();
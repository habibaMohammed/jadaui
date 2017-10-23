(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NssfController', NssfController);

    NssfController.$inject = ['$scope','$resource', 'NhifService'];
    function NssfController($scope,$resource,NhifService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=NhifService.query();

          

        }
    }
})();
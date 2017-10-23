(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('HelbController', HelbController);

    HelbController.$inject = ['$scope','$resource', 'HelbService'];
    function HelbController($scope,$resource,HelbService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=HelbService.query();

          

        }
    }
})();
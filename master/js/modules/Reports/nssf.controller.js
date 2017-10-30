(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('NssfController', NssfController);

    NssfController.$inject = ['$scope','$resource', 'NssfService'];
    function NssfController($scope,$resource,NssfService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.nssfs=NssfService.query();

          

        }
    }
})();
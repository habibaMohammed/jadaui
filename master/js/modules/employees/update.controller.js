
  (function() {
      'use strict';

      angular
          .module('app.employees')
          .controller('UpdateDemoCtrl', function($scope, $http, $uibModal, $log, UserService) { 
                  
           $scope.data = {
      name: '',
      serial: ''
    };
    $scope.didSelect = false;
    $scope.items = [{
      name: '1',
      serial: '1s'
    }, {
      name: '2',
      serial: '2s'
    }, {
      name: '3',
      serial: '3s'
    }];
    
    $scope.open = function() {

      var modalInstance = $uibModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;


      console.log(selectedItem);
   if(selectedItem) {
           $scope.data.name = $scope.selected.name;
        $scope.data.serial = $scope.selected.serial;
        $scope.didSelect = true;
   }


      },
       function(result) {
        $log.info('Modal dismissed at: ' + new Date());
        $scope.didSelect = false;
      });
    };
  });
  
  })();




  (function() {
      'use strict';

      angular
          .module('app.employees')
          .controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', 'items',  function($scope, $uibModalInstance, items) { 
                  
        $scope.items = items;
    $scope.editable = items[0];

    $scope.ok = function() {
      $modalInstance.close($scope.editable);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss(false);
    };
           
      }]);
  })();

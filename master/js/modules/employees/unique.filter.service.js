(function() {
    'use strict';

    angular
        .module('app.employees')
        .filter('unique', function() { 
                
        return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});




         
   
})();




// (function() {
//     'use strict';

//     angular
//         .module('app.employees')
//         .controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', 'items',  function($scope, $uibModalInstance, items) { 
                
//       $scope.items = items;
//   $scope.editable = items[0];

//   $scope.ok = function() {
//     $modalInstance.close($scope.editable);
//   };

//   $scope.cancel = function() {
//     $modalInstance.dismiss(false);
//   };
         
//     }]);
// })();




// angle.filter('unique', function() {
//     return function(input, key) {
//         var unique = {};
//         var uniqueList = [];
//         for(var i = 0; i < input.length; i++){
//             if(typeof unique[input[i][key]] == "undefined"){
//                 unique[input[i][key]] = "";
//                 uniqueList.push(input[i]);
//             }
//         }
//         return uniqueList;
//     };
// });



// (function() {
//     'use strict';

//     angular
//         .module('app.employees')
//         .filter('unique', unique);


//     function unique() {
//    return function(input, key) {
//         var unique = {};
//         var uniqueList = [];
//         for(var i = 0; i < input.length; i++){
//             if(typeof unique[input[i][key]] == "undefined"){
//                 unique[input[i][key]] = "";
//                 uniqueList.push(input[i]);
//             }
//         }
//         return uniqueList;
//     };   
       
//     }

// })();
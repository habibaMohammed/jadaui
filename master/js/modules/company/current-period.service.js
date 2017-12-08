(function() {
    'use strict';

    angular
        .module('angle')
        .factory('CurrentPeriod', CurrentPeriod);

    CurrentPeriod.$inject = ['$http','$resource','jadaApiUrl'];
    function CurrentPeriod($http,$resource,jadaApiUrl) {

       return {
        getCurrentPeriod: function () {
            return $http.get(jadaApiUrl+'api/currentperiod/').then(function (response) {
               return response.data;

 console.log('here');
               console.log(response.data);
            });
        }
      }

      
          
  //          return {
  //     name : 'anonymous'
  // };
    }

})();
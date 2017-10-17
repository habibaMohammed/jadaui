/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes','$q','userService'];
    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q,userService) {

      
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.users=UserService.query();

          // editable row
          // ----------------------------------- 
          // vm.users  = [
          //   {id: 1,  code: 1,  amount:50000,  name: 'awesome user1', status: 1, glaccount: '3000005', desc: 'DeptDesc Salaries', group: 4, groupName: 'admin'},
          //   {id: 2, code: 2,  amount: 30000, name: 'awesome user2', status: undefined,glaccount: '2000005', desc: 'DeptDesc Salaries', group: 3, groupName: 'vip'},
          //   {id: 3, code: 3, amount: 1000, name: 'awesome user3', status: 2, glaccount: '3000010', desc: 'DeptDesc Co. NSSF', group: null}
          // ];


           vm.codes = [
            {code: '100'},
            {code: '103'},
            {code: '105'},
            {code: '106'}
          ];
          vm.codes = [
            {value: 1, text: '100'},
            {value: 2, text: '102'},
            {value: 3, text: '103'},
            {value: 4, text: '104'}
          ];

          vm.statuses = [
            {value: 1, text: 'Basic salary'},
            {value: 2, text: 'House Allowance'},
            {value: 3, text: 'leave pay'},
            {value: 4, text: ' Telephone Benefit'}
          ];

          vm.groups = [];
          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };
           vm.pcodes = [];
          vm.loadpcodes = function() {
            return vm.pcodes.length ? null : $http.get('server/codes.json').success(function(data) {
              vm.pcodes = data;
            });
          };

          vm.showGroup = function(user) {
            if(user.group && vm.groups.length) {
              var selected = $filter('filter')(vm.groups, {id: user.group});
              return selected.length ? selected[0].text : 'Not set';
            } else {
              return user.groupName || 'Not set';
            }
          };
          vm.showpcodes = function(user) {
            if(user.code && vm.code.length) {
              var selected = $filter('filter')(vm.groups, {id: user.code});
              return selected.length ? selected[0].text : 'Not set';
            } 
          };

          vm.showStatus = function(user) {
            var selected = [];
            if(user.status) {
              selected = $filter('filter')(vm.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
          };

          vm.showcodes = function(user) {
            var selected = [];
            if(user.code) {
              selected = $filter('filter')(vm.codes, {value: user.code});
            }
            return selected.length ? selected[0].text : 'Not set';
          };


          vm.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
              return 'Username 2 should be `awesome`';
            }
          };

          vm.saveUser = function(data, id) {
            //vm.user not updated yet
            angular.extend(data, {id: id});
            console.log('Saving user: ' + id);
            // return $http.post('/saveUser', data);
          };

          // remove user
          vm.removeUser = function(index) {
            vm.users.splice(index, 1);
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              id: vm.users.length+1,
              name: '',
              status: null,
              group: null,
              isNew: true
            };
            vm.users.push(vm.inserted);
          };

          // editable column
          // ----------------------------------- 


          vm.saveColumn = function(column) {
            var results = [];
            angular.forEach(vm.users, function(/*user*/) {
              // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
              console.log('Saving column: ' + column);
            });
            return $q.all(results);
          };


             vm.savepayroll = function(column) {
            var results = [];
            angular.forEach(vm.payrollcodes, function(/*user*/) {
              // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
              console.log('Saving column: ' + column);
            });
            return $q.all(results);
          };



          // editable table
          // ----------------------------------- 

          // filter users to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.users, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function() {
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // undelete
              if (user.isDeleted) {
                delete user.isDeleted;
              }
              // remove new 
              if (user.isNew) {
                vm.users.splice(i, 1);
              }
            }
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
              }
              // mark as not new 
              if (user.isNew) {
                user.isNew = false;
              }

              // send on server
              // results.push($http.post('/saveUser', user));
              console.log('Saving Table...');
            }

            return $q.all(results);
          };

        }
    }
})();

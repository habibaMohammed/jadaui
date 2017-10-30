/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Version: 3.6
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('angle', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.dashboard',
            'app.icons',
            'app.flatdoc',
            'app.notify',
            'app.bootstrapui',
            'app.elements',
            'app.panels',
            'app.charts',
            'app.forms',
            'app.locale',
            'app.maps',
            'app.pages',
            'app.tables',
            'app.extras',
            'app.mailbox',
            'app.utils',
            'app.employees',
            'app.company',
            'app.transactions',
            'app.companydetails',
            'app.useradministration',
            'app.maintenance',
            'app.payrollcodes',
            'app.reports'
        ]);
})();


(function() {
    'use strict';

    angular
        .module('app.bootstrapui', ['ngAnimate']);
})();
(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.company', [ ]);
})();
(function() {
    'use strict';

    angular
        .module('app.charts', []);
})();
(function() {
    'use strict';

    angular
        .module('app.companydetails', []);
})();
(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils'
      
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();
(function() {
    'use strict';

    angular
        .module('app.employees', ['ui.bootstrap']);
})();
(function() {
    'use strict';

    angular
        .module('app.elements', []);
})();
(function() {
    'use strict';

    angular
        .module('app.extras', []);
})();
(function() {
    'use strict';

    angular
        .module('app.flatdoc', []);
})();
(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.locale', []);
})();
(function() {
    'use strict';

    angular
        .module('app.mailbox', []);
})();
(function() {
    'use strict';

    angular
        .module('app.maintenance', ['ui.bootstrap']);
})();
(function() {
    'use strict';

    angular
        .module('app.maps', []);
})();
(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function() {
    'use strict';

    angular
        .module('app.notify', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();
(function() {
    'use strict';

    angular
        .module('app.payrollcodes', [ ]);
})();
(function() {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.reports', []);
})();
(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function() {
    'use strict';

    angular
        .module('app.transactions', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

(function() {
    'use strict';

    angular
        .module('app.useradministration', [ ]);
})();
angular.module('angle').constant('jadaApiUrl',
'http://localhost:56135/');


// angular.module('angle').constant('jadaApiUrl',
// 'http://jadabackend.azurewebsites.net/');

/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'warning', msg: 'Well done! You successfully read this important alert message.' }
          ];

          vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
          };

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$uibTooltipProvider'];
    function bootstrapuiConfig($uibTooltipProvider){
      $uibTooltipProvider.options({appendToBody: true});
    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.singleModel = 1;

          vm.radioModel = 'Middle';

          vm.checkModel = {
            left: false,
            middle: true,
            right: false
          };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;

          vm.slides = [];
          vm.addSlide = function(id) {
            id = id || 8;
            vm.slides.push({
              id: id,
              image: 'app/img/bg' + id + '.jpg',
              text: ['More','Extra','Lots of','Surplus'][vm.slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][vm.slides.length % 2]
            });
          };

          vm.addSlide(4);
          vm.addSlide(7);
          vm.addSlide(8);

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.today = function() {
            vm.dt = new Date();
          };
          vm.today();

          vm.clear = function () {
            vm.dt = null;
          };

          // Disable weekend selection
          vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
          };
          vm.toggleMin();

          vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = true;
          };

          vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

          vm.initDate = new Date('2019-10-20');
          vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          vm.format = vm.formats[0];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];
    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'CompInfoContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };



   vm.show= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'ModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };


 vm.showStatutory= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'StatutoryModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          vm.showloans= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'loansModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

           vm.showpension= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'PensionModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

        vm.display= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'template.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


          vm.add= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'add.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

           vm.more= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'mytemplate.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


           vm.info= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'myContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

           vm.addperiods= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'fperiods.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
          function ModalInstanceCtrl($scope, $uibModalInstance) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
             $scope.submitCompinfo=function() {
          // $scope.formModel.$save();
          console.log('Saving user: ' +$scope.Company.pin_number);
          };
         
          }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
          vm.totalItems = 64;
          vm.currentPage = 4;

          vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
          };

          vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
          };

          vm.maxSize = 5;
          vm.bigTotalItems = 175;
          vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicPopover = 'Hello, World!';
          vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.max = 200;

          vm.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            vm.showWarning = (type === 'danger' || type === 'warning');

            vm.dynamic = value;
            vm.type = type;
          };
          vm.random();

          vm.randomStacked = function() {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                vm.stacked.push({
                  value: Math.floor((Math.random() * 30) + 1),
                  type: types[index]
                });
            }
          };
          vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.rate = 7;
          vm.max = 10;
          vm.isReadonly = false;

          vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
          };

          vm.ratingStates = [
            {stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
            {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
            {stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
            {stateOn: 'fa fa-heart'},
            {stateOff: 'fa fa-power-off'}
          ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.mytime = new Date();

          vm.hstep = 1;
          vm.mstep = 15;

          vm.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
          };

          vm.ismeridian = true;
          vm.toggleMode = function() {
            vm.ismeridian = ! vm.ismeridian;
          };

          vm.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            vm.mytime = d;
          };

          vm.changed = function () {
            console.log('Time changed to: ' + vm.mytime);
          };

          vm.clear = function() {
            vm.mytime = null;
          };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicTooltip = 'Hello, World!';
          vm.dynamicTooltipText = 'dynamic';
          vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

          vm.autoplace = function (context, source) {
            //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
            var pos = 'top';
            if(predictTooltipTop(source) < 0)
              pos = 'bottom';
            if(predictTooltipLeft(source) < 0)
              pos = 'right';
            return pos;
          };

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipTop(el) {
              var top = el.offsetTop;
              var height = 40; // asumes ~40px tooltip height

              while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
              }
              return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipLeft(el) {
              var left = el.offsetLeft;
              var width = el.offsetWidth;

              while(el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
              }
              return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];
    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.selected = undefined;
          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

          // Any function returning a promise object can be used to load values asynchronously
          vm.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(res){
              var addresses = [];
              angular.forEach(res.data.results, function(item){
                /*jshint -W106*/
                addresses.push(item.formatted_address);
              });
              return addresses;
            });
          };

          vm.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];

        }
    }
})();


angular.module('app.bootstrapui').controller('YearpickerCtrl', ["$scope", function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yyyy',
    startingDay: 1,
    minMode: 'year'
  };

  $scope.formats = ['yyyy'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };
}]);
(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#23b7e5',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();




(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CompanyRegController', CompanyRegController);

    CompanyRegController.$inject = ['$http','$scope', '$rootScope','$uibModal','companyService','$stateParams', '$state','$localStorage'];
    function CompanyRegController($http,$scope, $rootScope,$uibModal, companyService,$stateParams, $state,$localStorage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



 var SuccessMsg;
 var errorMsg;


 $scope.company=companyService.get({ID:1});





  $scope.loadCompany = function () {
   
 $scope.company=companyService.get({ID:1});
   }

 $rootScope.$on("CallLoadCompany", function(){
           $scope.loadCompany ();
        });

          
          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'CompInfoContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





$scope.show = function(EditCompany) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'GeneralCompanyEdit.html',
        controller: ModalInstanceCtrl,
        resolve: {
           EditCompany: function () {
             return EditCompany;
           }
         }        
        // scope : $scope
      });
    };
    
    



          
 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','companyService','EditCompany'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, companyService,EditCompany) {
          $scope.company=EditCompany;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          //   $scope.Company=new companyService();
          //    $scope.submitCompinfo=function() {
          // $scope.Company.$save();
          // console.log('Saving user: ' +$scope.Company.pin_number);
          // };


  
           $scope.EditGenCompany=function(company){
             company.$update().then(function(data){
              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                  $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                   $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
                   $rootScope.$emit("CallLoadCompany", {});
            },
             function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
          
              };
         
          }
        }
    }

})();




(function() {
    'use strict';

    angular
        .module('app.company')
        .factory('companyService', companyService);

    companyService.$inject = ['$resource','jadaApiUrl'];
    function companyService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/company/:ID', {ID: '@ID'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();


(function() {
    'use strict';

    angular
        .module('app.company')
        .factory('financialPeriodService', financialPeriodService);

    financialPeriodService.$inject = ['$resource','jadaApiUrl'];
    function financialPeriodService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/period/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('FinancialPeriodsController', FinancialPeriodsController);

    FinancialPeriodsController.$inject = ['$scope', '$rootScope','$uibModal','financialPeriodService','$stateParams', '$state'];
    function FinancialPeriodsController($scope, $rootScope, $uibModal, financialPeriodService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.periods=financialPeriodService.query();



   $scope.loadPeriods = function () {
   $scope.periods=financialPeriodService.query();

   }

 $rootScope.$on("CallLoadPeriods", function(){
           $scope.loadPeriods();
        });


$scope.months = [];
$scope.selectedMonth = {};

$scope.loadMonths = function() {
  if ($scope.months.length == 0) {
    $scope.months = [{
      id:1,
      name: 'JANUARY'
    }, {
      id:2,
      name: 'FEBRUAY'
    }, {
      id:3,
      name: 'MARCH'
    },
     {
      id:4,
      name: 'APRIL'
    },
     {
      id:5,
      name: 'MAY'
    },
     {
      id:6,
      name: 'JUNE'
    },
     {
      id:7,
      name: 'JULY'
    },
     {
      id:8,
      name: 'AUGUST'
    },
     {
      id:9,
      name: 'SEPTEMBER'
    },
     {
      id:10,
      name: 'OCTOBER'
    },
     {
      id:11,
      name: 'NOVEMBER'
    },
     {
      id:12,
      name: 'DECEMBER'
    }];
  }
}




  $scope.delete= function (period) {
period.$remove().then(function () {
$scope.loadPeriods();
});
}



          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newFperiods.html',
              controller: ModalOpenFperiodsInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




    


  $scope.show = function(period) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editFperiods.html',
        controller: ModalInstanceCtrl,
        resolve: {
           period: function () {
             return period;
           }
         }        
        // scope : $scope
      });
    };



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenFperiodsInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','financialPeriodService'];
          function ModalOpenFperiodsInstanceCtrl($scope,$rootScope, $uibModalInstance, financialPeriodService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };
            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.period=new financialPeriodService();
             $scope.submitPeriod=function() {
          $scope.period.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
                   
                   $scope.SuccessMsg=false;
               
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
              $rootScope.$emit("CallLoadPeriods", {}); 
          }, 
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };

              $scope.submitClosePeriod=function() {
          $scope.period.$save().then(function(){
            
              $rootScope.$emit("CallLoadPeriods", {}); 
                 $scope.ok();
          }, 
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };
         
          }


          ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','financialPeriodService','period'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, financialPeriodService,period) {
          $scope.period=period;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
         
                $scope.updatePeriods=function(period){
             period.$update().then(function(){
                   $rootScope.$emit("CallLoadPeriods", {});
            });
          
              };
          }
        }
    }

})();

/**=========================================================
 * Module: chartist.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartistController', ChartistController);

    function ChartistController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Line chart
          // ----------------------------------- 

          vm.lineData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
              [12, 9, 7, 8, 5],
              [2, 1, 3.5, 7, 3],
              [1, 3, 4, 5, 6]
            ]
          };

          vm.lineOptions = {
            fullWidth: true,
            height: 220,
            chartPadding: {
              right: 40
            }
          };

          // Bar bipolar
          // ----------------------------------- 

          vm.barBipolarOptions = {
            high: 10,
            low: -10,
            height: 220,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          };

          vm.barBipolarData = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          };


          // Bar horizontal
          // ----------------------------------- 

          vm.barHorizontalData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
              [5, 4, 3, 7, 5, 10, 3],
              [3, 2, 9, 5, 4, 6, 4]
            ]
          };

          vm.barHorizontalOptions = {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            height: 220,
            axisY: {
              offset: 70
            }
          };

          // Smil Animations
          // ----------------------------------- 

          // Let's put a sequence number aside so we can use it in the event callbacks
          var seq = 0,
            delays = 80,
            durations = 500;

          vm.smilData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          };

          vm.smilOptions = {
            low: 0,
            height: 260
          };

          vm.smilEvents = {
            created: function() {
              seq = 0;
            },
            draw: function(data) {
              seq++;

              if(data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                  opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              } 
            }
          };


          // SVG PATH animation
          // ----------------------------------- 

          vm.pathData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
              [1, 5, 2, 5, 4, 3],
              [2, 3, 4, 8, 1, 2],
              [5, 4, 3, 2, 1, 0.5]
            ]
          };

          vm.pathOptions = {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 260
          };

          vm.pathEvents = {
            draw: function(data) {
              if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                  d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                  }
                });
              }
            }
          };

        }
    }
})();


/**=========================================================
 * Module: chart.controller.js
 * Controller for ChartJs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartJSController', ChartJSController);

    ChartJSController.$inject = ['Colors'];
    function ChartJSController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // random values for demo
          var rFactor = function(){ return Math.round(Math.random()*100); };

          // Line chart
          // ----------------------------------- 

          vm.lineData = {
              labels : ['January','February','March','April','May','June','July'],
              datasets : [
                {
                  label: 'My First dataset',
                  fillColor : 'rgba(114,102,186,0.2)',
                  strokeColor : 'rgba(114,102,186,1)',
                  pointColor : 'rgba(114,102,186,1)',
                  pointStrokeColor : '#fff',
                  pointHighlightFill : '#fff',
                  pointHighlightStroke : 'rgba(114,102,186,1)',
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                },
                {
                  label: 'My Second dataset',
                  fillColor : 'rgba(35,183,229,0.2)',
                  strokeColor : 'rgba(35,183,229,1)',
                  pointColor : 'rgba(35,183,229,1)',
                  pointStrokeColor : '#fff',
                  pointHighlightFill : '#fff',
                  pointHighlightStroke : 'rgba(35,183,229,1)',
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                }
              ]
            };


          vm.lineOptions = {
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            bezierCurve : true,
            bezierCurveTension : 0.4,
            pointDot : true,
            pointDotRadius : 4,
            pointDotStrokeWidth : 1,
            pointHitDetectionRadius : 20,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true,
          };


          // Bar chart
          // ----------------------------------- 

          vm.barData = {
              labels : ['January','February','March','April','May','June','July'],
              datasets : [
                {
                  fillColor : Colors.byName('info'),
                  strokeColor : Colors.byName('info'),
                  highlightFill: Colors.byName('info'),
                  highlightStroke: Colors.byName('info'),
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                },
                {
                  fillColor : Colors.byName('primary'),
                  strokeColor : Colors.byName('primary'),
                  highlightFill : Colors.byName('primary'),
                  highlightStroke : Colors.byName('primary'),
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                }
              ]
          };
          
          vm.barOptions = {
            scaleBeginAtZero : true,
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            barShowStroke : true,
            barStrokeWidth : 2,
            barValueSpacing : 5,
            barDatasetSpacing : 1,
          };


          //  Doughnut chart
          // ----------------------------------- 
          
          vm.doughnutData = [
                {
                  value: 300,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Purple'
                },
                {
                  value: 50,
                  color: Colors.byName('info'),
                  highlight: Colors.byName('info'),
                  label: 'Info'
                },
                {
                  value: 100,
                  color: Colors.byName('yellow'),
                  highlight: Colors.byName('yellow'),
                  label: 'Yellow'
                }
              ];

          vm.doughnutOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            percentageInnerCutout : 85,
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };

          // Pie chart
          // ----------------------------------- 

          vm.pieData =[
                {
                  value: 300,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Purple'
                },
                {
                  value: 40,
                  color: Colors.byName('yellow'),
                  highlight: Colors.byName('yellow'),
                  label: 'Yellow'
                },
                {
                  value: 120,
                  color: Colors.byName('info'),
                  highlight: Colors.byName('info'),
                  label: 'Info'
                }
              ];

          vm.pieOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            percentageInnerCutout : 0, // Setting this to zero convert a doughnut into a Pie
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };

          // Polar chart
          // ----------------------------------- 
          
          vm.polarData = [
                {
                  value: 300,
                  color: Colors.byName('pink'),
                  highlight: Colors.byName('pink'),
                  label: 'Red'
                },
                {
                  value: 50,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Green'
                },
                {
                  value: 100,
                  color: Colors.byName('pink'),
                  highlight: Colors.byName('pink'),
                  label: 'Yellow'
                },
                {
                  value: 140,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Grey'
                },
              ];

          vm.polarOptions = {
            scaleShowLabelBackdrop : true,
            scaleBackdropColor : 'rgba(255,255,255,0.75)',
            scaleBeginAtZero : true,
            scaleBackdropPaddingY : 1,
            scaleBackdropPaddingX : 1,
            scaleShowLine : true,
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };


          // Radar chart
          // ----------------------------------- 

          vm.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
              {
                label: 'My First dataset',
                fillColor: 'rgba(114,102,186,0.2)',
                strokeColor: 'rgba(114,102,186,1)',
                pointColor: 'rgba(114,102,186,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(114,102,186,1)',
                data: [65,59,90,81,56,55,40]
              },
              {
                label: 'My Second dataset',
                fillColor: 'rgba(151,187,205,0.2)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28,48,40,19,96,27,100]
              }
            ]
          };

          vm.radarOptions = {
            scaleShowLine : true,
            angleShowLineOut : true,
            scaleShowLabels : false,
            scaleBeginAtZero : true,
            angleLineColor : 'rgba(0,0,0,.1)',
            angleLineWidth : 1,
            /*jshint -W109*/
            pointLabelFontFamily : "'Arial'",
            pointLabelFontStyle : 'bold',
            pointLabelFontSize : 10,
            pointLabelFontColor : '#565656',
            pointDot : true,
            pointDotRadius : 3,
            pointDotStrokeWidth : 1,
            pointHitDetectionRadius : 20,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true
          };
        }
    }
})();

/**=========================================================
 * Module: chart.js
 * Wrapper directive for chartJS. 
 * Based on https://gist.github.com/AndreasHeiberg/9837868
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        /* Aliases for various chart types */
        .directive('linechart',     chartJS('Line')      )
        .directive('barchart',      chartJS('Bar')       )
        .directive('radarchart',    chartJS('Radar')     )
        .directive('polarchart',    chartJS('PolarArea') )
        .directive('piechart',      chartJS('Pie')       )
        .directive('doughnutchart', chartJS('Doughnut')  )
        .directive('donutchart',    chartJS('Doughnut')  )
        ;

    function chartJS(type) {
        return function() {
            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    options: '=',
                    id: '@',
                    width: '=',
                    height: '=',
                    resize: '=',
                    chart: '@',
                    segments: '@',
                    responsive: '=',
                    tooltip: '=',
                    legend: '='
                },
                link: function ($scope, $elem) {
                    var ctx = $elem[0].getContext('2d');
                    var autosize = false;

                    $scope.size = function () {
                        if ($scope.width <= 0) {
                            $elem.width($elem.parent().width());
                            ctx.canvas.width = $elem.width();
                        } else {
                            ctx.canvas.width = $scope.width || ctx.canvas.width;
                            autosize = true;
                        }

                        if($scope.height <= 0){
                            $elem.height($elem.parent().height());
                            ctx.canvas.height = ctx.canvas.width / 2;
                        } else {
                            ctx.canvas.height = $scope.height || ctx.canvas.height;
                            autosize = true;
                        }
                    };

                    $scope.$watch('data', function (newVal) {
                        if(chartCreated)
                            chartCreated.destroy();

                        // if data not defined, exit
                        if (!newVal) {
                            return;
                        }
                        if ($scope.chart) { type = $scope.chart; }

                        if(autosize){
                            $scope.size();
                            chart = new Chart(ctx);
                        }

                        if($scope.responsive || $scope.resize)
                            $scope.options.responsive = true;

                        if($scope.responsive !== undefined)
                            $scope.options.responsive = $scope.responsive;

                        chartCreated = chart[type]($scope.data, $scope.options);
                        chartCreated.update();
                        if($scope.legend)
                            angular.element($elem[0]).parent().after( chartCreated.generateLegend() );
                    }, true);

                    $scope.$watch('tooltip', function (newVal) {
                        if (chartCreated)
                            chartCreated.draw();
                        if(newVal===undefined || !chartCreated.segments)
                            return;
                        if(!isFinite(newVal) || newVal >= chartCreated.segments.length || newVal < 0)
                            return;
                        var activeSegment = chartCreated.segments[newVal];
                        activeSegment.save();
                        activeSegment.fillColor = activeSegment.highlightColor;
                        chartCreated.showTooltip([activeSegment]);
                        activeSegment.restore();
                    }, true);

                    $scope.size();
                    var chart = new Chart(ctx);
                    var chartCreated;

                    $scope.$on('$destroy', function() {
                        if(chartCreated)
                            chartCreated.destroy();
                    });
                }
            };
        };
    }
})();





/**=========================================================
 * Module: classy-loader.js
 * Enable use of classyloader directly from data attributes
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('classyloader', classyloader);

    classyloader.$inject = ['$timeout', 'Utils', '$window'];
    function classyloader ($timeout, Utils, $window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $scroller       = $($window),
              inViewFlagClass = 'js-is-in-view'; // a classname to detect when a chart has been triggered after scroll

          // run after interpolation  
          $timeout(function(){
      
            var $element = $(element),
                options  = $element.data();
            
            // At lease we need a data-percentage attribute
            if(options) {
              if( options.triggerInView ) {

                $scroller.scroll(function() {
                  checkLoaderInVIew($element, options);
                });
                // if the element starts already in view
                checkLoaderInVIew($element, options);
              }
              else
                startLoader($element, options);
            }

          }, 0);

          function checkLoaderInVIew(element, options) {
            var offset = -20;
            if( ! element.hasClass(inViewFlagClass) &&
                Utils.isInView(element, {topoffset: offset}) ) {
              startLoader(element, options);
            }
          }
          function startLoader(element, options) {
            element.ClassyLoader(options).addClass(inViewFlagClass);
          }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .service('ChartData', ChartData);

    ChartData.$inject = ['$resource'];
    function ChartData($resource) {
        this.load = load;

        ////////////////
      
        var opts = {
            get: { method: 'GET', isArray: true }
          };
        function load(source) {
          return $resource(source, {}, opts).get();
        }
    }
})();

/**=========================================================
 * Module: flot-chart.js
 * Setup options and data for flot chart directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout'];
    function FlotChartController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // BAR
          // -----------------------------------
          vm.barData = ChartData.load('server/chart/bar.json');
          vm.barOptions = {
              series: {
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // BAR STACKED
          // -----------------------------------
          vm.barStackeData = ChartData.load('server/chart/barstacked.json');
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // -----------------------------------
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };

          // AREA
          // -----------------------------------
          vm.areaData = ChartData.load('server/chart/area.json');
          vm.areaOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.8
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v + ' visitors';
                  }
              },
              shadowSize: 0
          };

          // LINE
          // -----------------------------------
          vm.lineData = ChartData.load('server/chart/line.json');
          vm.lineOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.01
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#eee',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // PIE
          // -----------------------------------
          vm.pieData = [{
              "label": "jQuery",
              "color": "#4acab4",
              "data": 30
            }, {
              "label": "CSS",
              "color": "#ffea88",
              "data": 40
            }, {
              "label": "LESS",
              "color": "#ff8153",
              "data": 90
            }, {
              "label": "SASS",
              "color": "#878bb6",
              "data": 75
            }, {
              "label": "Jade",
              "color": "#b2d767",
              "data": 120
            }];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/pie.json');

          vm.pieOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0,
                      label: {
                          show: true,
                          radius: 0.8,
                          formatter: function (label, series) {
                              return '<div class="flot-pie-label">' +
                              //label + ' : ' +
                              Math.round(series.percent) +
                              '%</div>';
                          },
                          background: {
                              opacity: 0.8,
                              color: '#222'
                          }
                      }
                  }
              }
          };

          // DONUT
          // -----------------------------------
          vm.donutData = [ { "color" : "#39C558",
                "data" : 60,
                "label" : "Coffee"
              },
              { "color" : "#00b4ff",
                "data" : 90,
                "label" : "CSS"
              },
              { "color" : "#FFBE41",
                "data" : 50,
                "label" : "LESS"
              },
              { "color" : "#ff3e43",
                "data" : 80,
                "label" : "Jade"
              },
              { "color" : "#937fc7",
                "data" : 116,
                "label" : "AngularJS"
              }
            ];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/donut.json');

          vm.donutOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0.5 // This makes the donut shape
                  }
              }
          };

          // REALTIME
          // -----------------------------------
          vm.realTimeOptions = {
              series: {
                lines: { show: true, fill: true, fillColor:  { colors: ['#a0e0f3', '#23b7e5'] } },
                shadowSize: 0 // Drawing is faster without shadows
              },
              grid: {
                  show:false,
                  borderWidth: 0,
                  minBorderMargin: 20,
                  labelMargin: 10
              },
              xaxis: {
                tickFormatter: function() {
                    return '';
                }
              },
              yaxis: {
                  min: 0,
                  max: 110
              },
              legend: {
                  show: true
              },
              colors: ['#23b7e5']
          };

          // Generate random data for realtime demo
          var data = [], totalPoints = 300;

          update();

          function getRandomData() {
            if (data.length > 0)
              data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
              var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else if (y > 100) {
                y = 100;
              }
              data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
              res.push([i, data[i]]);
            }
            return [res];
          }
          function update() {
            vm.realTimeData = getRandomData();
            $timeout(update, 30);
          }
          // end random data generation


          // PANEL REFRESH EVENTS
          // -----------------------------------

          $scope.$on('panel-refresh', function(event, id) {

            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){

              // directive listen for to remove the spinner
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);

              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // -----------------------------------

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){

            console.log('Panel #' + id + ' removing');

            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();

          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
    }
})();

/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('flot', flot);

    flot.$inject = ['$http', '$timeout'];

    function flot($http, $timeout) {

        var directive = {
            restrict: 'EA',
            template: '<div></div>',
            scope: {
                dataset: '=?',
                options: '=',
                series: '=',
                callback: '=',
                src: '='
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var height, plot, plotArea, width;
            var heightDefault = 220;

            plot = null;

            width = attrs.width || '100%';
            height = attrs.height || heightDefault;

            plotArea = $(element.children()[0]);
            plotArea.css({
                width: width,
                height: height
            });

            function init() {
                var plotObj;
                if (!scope.dataset || !scope.options) return;
                plotObj = $.plot(plotArea, scope.dataset, scope.options);
                scope.$emit('plotReady', plotObj);
                if (scope.callback) {
                    scope.callback(plotObj, scope);
                }

                return plotObj;
            }

            function onDatasetChanged(dataset) {
                if (plot) {
                    plot.setData(dataset);
                    plot.setupGrid();
                    return plot.draw();
                } else {
                    plot = init();
                    onSerieToggled(scope.series);
                    return plot;
                }
            }
            var $watchOff1 = scope.$watchCollection('dataset', onDatasetChanged, true);

            function onSerieToggled(series) {
                if (!plot || !series) return;
                var someData = plot.getData();
                for (var sName in series) {
                    angular.forEach(series[sName], toggleFor(sName));
                }

                plot.setData(someData);
                plot.draw();

                function toggleFor(sName) {
                    return function(s, i) {
                        if (someData[i] && someData[i][sName])
                            someData[i][sName].show = s;
                    };
                }
            }
            var $watchOff2 = scope.$watch('series', onSerieToggled, true);

            function onSrcChanged(src) {

                if (src) {

                    $http.get(src)
                        .success(function(data) {

                            $timeout(function() {
                                scope.dataset = data;
                            });

                        }).error(function() {
                            $.error('Flot chart: Bad request.');
                        });

                }
            }
            var $watchOff3 = scope.$watch('src', onSrcChanged);

            scope.$on('$destroy', function(){
                // detach watches and scope events
                $watchOff1();
                $watchOff2();
                $watchOff3();
                // destroy chart
                plot.destroy();
            });

        }
    }


})();
/**=========================================================
 * Module: morris.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$timeout', 'Colors'];
    function ChartMorrisController($timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
         vm.chartdata = [
              { y: '2006', a: 100, b: 90 },
              { y: '2007', a: 75,  b: 65 },
              { y: '2008', a: 50,  b: 40 },
              { y: '2009', a: 75,  b: 65 },
              { y: '2010', a: 50,  b: 40 },
              { y: '2011', a: 75,  b: 65 },
              { y: '2012', a: 100, b: 90 }
          ];

          /* test data update
          $timeout(function(){
            vm.chartdata[0].a = 50;
            vm.chartdata[0].b = 50;
          }, 3000); */

          vm.donutdata = [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales',value: 30},
            {label: 'Mail-Order Sales', value: 20}
          ];

          vm.donutOptions = {
            Colors: [ Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning') ],
            resize: true
          };

          vm.barOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            xLabelMargin: 2,
            barColors: [ Colors.byName('info'), Colors.byName('danger') ],
            resize: true
          };

          vm.lineOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: ['#31C0BE', '#7a92a3'],
            resize: true
          };

          vm.areaOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: [ Colors.byName('purple'), Colors.byName('info') ],
            resize: true
          };

        }
    }
})();

/**=========================================================
 * Module: morris.js
 * AngularJS Directives for Morris Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('morrisBar',   morrisChart('Bar')   )
        .directive('morrisDonut', morrisChart('Donut') )
        .directive('morrisLine',  morrisChart('Line')  )
        .directive('morrisArea',  morrisChart('Area')  );

    function morrisChart(type) {
      return function () {
        return {
          restrict: 'EA',
          scope: {
            morrisData: '=',
            morrisOptions: '='
          },
          link: function($scope, element) {
            // start ready to watch for changes in data
            $scope.$watch('morrisData', function(newVal) {
              if (newVal) {
                $scope.morrisInstance.setData(newVal);
                $scope.morrisInstance.redraw();
              }
            }, true);
            // the element that contains the chart
            $scope.morrisOptions.element = element;
            // If data defined copy to options
            if($scope.morrisData)
              $scope.morrisOptions.data = $scope.morrisData;
            // Init chart
            $scope.morrisInstance = new Morris[type]($scope.morrisOptions);

          }
        };
      };
    }

})();

/**=========================================================
 * Module: PieChartsController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('PieChartsController', PieChartsController);

    /*jshint -W069*/
    PieChartsController.$inject = ['Colors'];

    function PieChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // KNOB Charts

          vm.knobLoaderData1 = 80;
          vm.knobLoaderOptions1 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info')
            };

          vm.knobLoaderData2 = 45;
          vm.knobLoaderOptions2 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('purple'),
              readOnly : true
            };

          vm.knobLoaderData3 = 30;
          vm.knobLoaderOptions3 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('pink'),
              displayPrevious : true,
              thickness : 0.1,
              lineCap : 'round'
            };

          vm.knobLoaderData4 = 20;
          vm.knobLoaderOptions4 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info'),
              bgColor: Colors.byName('gray'),
              angleOffset: -125,
              angleArc: 250
            };

          // Easy Pie Charts

          vm.piePercent1 = 85;
          vm.piePercent2 = 45;
          vm.piePercent3 = 25;
          vm.piePercent4 = 60;

          vm.pieOptions1 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('success'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 10,
              lineCap: 'circle'
          };

          vm.pieOptions2= {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('warning'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              lineCap: 'circle'
          };

          vm.pieOptions3 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: false,
              scaleColor: Colors.byName('gray'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.pieOptions4 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: Colors.byName('yellow'),
              scaleColor: Colors.byName('gray-dark'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.randomize = function(type) {
            if ( type === 'easy') {
              vm.piePercent1 = random();
              vm.piePercent2 = random();
              vm.piePercent3 = random();
              vm.piePercent4 = random();
            }
            if ( type === 'knob') {
              vm.knobLoaderData1 = random();
              vm.knobLoaderData2 = random();
              vm.knobLoaderData3 = random();
              vm.knobLoaderData4 = random();
            }
          }

          function random() { return Math.floor((Math.random() * 100) + 1); }

        }
    }
})();

/**=========================================================
 * Module: rickshaw.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    function ChartRickshawController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.renderers = [{
                  id: 'area',
                  name: 'Area'
              }, {
                  id: 'line',
                  name: 'Line'
              }, {
                  id: 'bar',
                  name: 'Bar'
              }, {
                  id: 'scatterplot',
                  name: 'Scatterplot'
              }];

          vm.palettes = [
              'spectrum14',
              'spectrum2000',
              'spectrum2001',
              'colorwheel',
              'cool',
              'classic9',
              'munin'
          ];

          vm.rendererChanged = function(id) {
              vm['options' + id] = {
                  renderer: vm['renderer' + id].id
              };
          };

          vm.paletteChanged = function(id) {
              vm['features' + id] = {
                  palette: vm['palette' + id]
              };
          };

          vm.changeSeriesData = function(id) {
              var seriesList = [];
              for (var i = 0; i < 3; i++) {
                  var series = {
                      name: 'Series ' + (i + 1),
                      data: []
                  };
                  for (var j = 0; j < 10; j++) {
                      series.data.push({x: j, y: Math.random() * 20});
                  }
                  seriesList.push(series);
                  vm['series' + id][i] = series;
              }
              //vm['series' + id] = seriesList;
          };

          vm.series0 = [];

          vm.options0 = {
            renderer: 'area'
          };

          vm.renderer0 = vm.renderers[0];
          vm.palette0 = vm.palettes[0];

          vm.rendererChanged(0);
          vm.paletteChanged(0);
          vm.changeSeriesData(0);  

          // Graph 2

          var seriesData = [ [], [], [] ];
          var random = new Rickshaw.Fixtures.RandomData(150);

          for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
          }

          vm.series2 = [
            {
              color: '#c05020',
              data: seriesData[0],
              name: 'New York'
            }, {
              color: '#30c020',
              data: seriesData[1],
              name: 'London'
            }, {
              color: '#6060c0',
              data: seriesData[2],
              name: 'Tokyo'
            }
          ];

          vm.options2 = {
            renderer: 'area'
          };

        }
    }
})();

/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    function sparkline () {
        var directive = {
            restrict: 'EA',
            scope: {
              'sparkline': '='
            },
            controller: Controller
        };
        return directive;

    }
    Controller.$inject = ['$scope', '$element', '$timeout', '$window'];
    function Controller($scope, $element, $timeout, $window) {
      var runSL = function(){
        initSparLine();
      };
      // generate a unique resize event so we can detach later
      var resizeEventId = 'resize.sparkline' + $scope.$id;

      $timeout(runSL);

      function initSparLine() {
        var options = $scope.sparkline,
            data = $element.data();

        if(!options) // if no scope options, try with data attributes
          options = data;
        else
          if(data) // data attributes overrides scope options
            options = angular.extend({}, options, data);

        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;

        $element.sparkline('html', options);

        if(options.resize) {
          $($window).on(resizeEventId, function(){
            $element.sparkline('html', options);
          });
        }
      }

      $scope.$on('$destroy', function(){
        $($window).off(resizeEventId);
      });

    }


})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CompanyInfoController', CompanyInfoController);

    CompanyInfoController.$inject = ['$scope','$rootScope', '$uibModal','CompanyInfoService','$stateParams', '$state'];
    function CompanyInfoController($scope,$rootScope, $uibModal, CompanyInfoService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


 var SuccessMsg;
 var errorMsg;

 $scope.company=CompanyInfoService.get({id:28});






  $scope.loadStatutory = function () {
   
 $scope.company=CompanyInfoService.get({id:1});
   }

 $rootScope.$on("CallLoadStatutory", function(){
           $scope.loadStatutory ();
        });


        $scope.delete= function (statutory) {
                  statutory.$remove().then(function () {
                  $scope.loadStatutory();
            });
            }
          
         $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'CompInfoContent.html',
              controller: ModalOpenStatutoryInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





  $scope.show = function(statutory) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'CompInfoedit.html',
        controller: ModalInstanceCtrl,
        resolve: {
           statutory: function () {
             return statutory;
           }
         }        
        // scope : $scope
      });
    };
    
 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenStatutoryInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','CompanyInfoService'];
          function ModalOpenStatutoryInstanceCtrl($scope, $rootScope,$uibModalInstance, CompanyInfoService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.statutory=new CompanyInfoService();
             $scope.submitStatutory=function() {
          $scope.statutory.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                 $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                   $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadStatutory", {});
          

          },
             function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
         
          }



          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','CompanyInfoService','statutory'];
          function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, CompanyInfoService,statutory) {
            $scope.company=statutory;
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
         
             

           $scope.updateStatutory=function(company){
             company.$update().then(function(){
                   $rootScope.$emit("CallLoadStatutory", {});
            });
          
              };
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('CompanyInfoService', CompanyInfoService);

    CompanyInfoService.$inject = ['$resource','jadaApiUrl'];
    function CompanyInfoService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/companyinfo/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CostCenterController', CostCenterController);

   CostCenterController.$inject = ['$scope','$rootScope', '$uibModal','CostCentreService','$stateParams', '$state'];
    function CostCenterController($scope, $rootScope, $uibModal, CostCentreService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;


$scope.centres=CostCentreService.query();



   $scope.loadCenters = function () {
       $scope.centres=CostCentreService.query();

   }

 $rootScope.$on("CallLoadCenters", function(){
           $scope.loadCenters();
        });





  $scope.delete= function (center) {
center.$remove().then(function () {
  $scope.loadCenters();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'AddCostCenter.html',
              controller: ModalOpenCostInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






$scope.show = function(center) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EditCostCenter.html',
        controller: ModalInstanceCtrl,
        resolve: {
           center: function () {
             return center;
           }
         }        
        // scope : $scope
      });
    };




 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenCostInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','CostCentreService'];
          function ModalOpenCostInstanceCtrl($scope, $rootScope,$uibModalInstance, CostCentreService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
               $scope.costcenter=new CostCentreService();
           $scope.submitCostCentre=function() {
           $scope.costcenter.$save().then(function(data){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadCenters", {});

           },
            function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
      
          }

           $scope.submitCostCentreClose=function() {
           $scope.costcenter.$save().then(function(){
             $rootScope.$emit("CallLoadCenters", {});
              $scope.ok();

           }, function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
      
          }
        }

             ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','CostCentreService','center'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, CostCentreService,center) {
          $scope.center=center;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
              

               $scope.updateCostCenter=function(center){
 
               center.$update().then(function(){
                   $rootScope.$emit("CallLoadCenters", {});
                         $scope.center=center;
                     });
                };

          }
        }
    }

})();







// (function() {
//     'use strict';

//     angular
//         .module('app.companydetails')
//         .factory('CostCentreService',  function($resource) {
//                 // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
//      var data=$resource('http://localhost:56135/api/costcenter/:id', {id: '@id'},
//     { 'get':    {method:'GET', isArray:false},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'update': { method:'PUT' },
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} 
// });
//      return data
//     });
// })();



(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('CostCentreService', CostCentreService);

    CostCentreService.$inject = ['$resource','jadaApiUrl'];
    function CostCentreService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/costcenter/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();









/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DeptController', DeptController);

    DeptController.$inject = ['$scope', '$rootScope','$uibModal','DeptService','$stateParams', '$state','$localStorage'];
    function DeptController($scope, $rootScope,$uibModal, DeptService,$stateParams, $state,$localStorage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.departments=DeptService.query();

var accountRights=$localStorage.currentUser.accountRights;
for(var r=0;r<accountRights.length;r++){
  // console.log("array "+r+" : ");
  // console.log(accountRights[r]);
  if(accountRights[r].module=="department"){
    // console.log("department");
    $scope.showDepartment=accountRights[r].access;
    $scope.createDepartment=accountRights[r].create;
    $scope.editDepartment=accountRights[r].update;
     $scope.readDepartments=accountRights[r].read;
    $scope.deleteDepartment=accountRights[r].delete;

    break;

  }
}



   $scope.loadDepartments = function () {
       $scope.departments=DeptService.query();

   }

 $rootScope.$on("CallLoadDepartment", function(){
           $scope.loadDepartments();
        });


//  $scope.updatedept=function(id){

//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   DeptService.update({ID: id}, $scope.department);
// // $scope.oneuser.$update(function(){
// //   console.log('Saving user: ' +$scope.oneuser.name);
// // $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// // });


  

//    $scope.dept= new DeptService();
//   $scope.submitdept = function() {
         

            
//              $scope.dept.$save().then(function(newDepartment) {
//  $scope.departments.push(newDepartment);

              
// });
//  }





  $scope.deletedept= function (department) {
department.$remove().then(function () {
  $scope.loadDepartments();
});
}
    // $scope.deletedept=function(id) {

    //     DeptService.({ID: id});

    //       };
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newDepartment.html',
              controller: ModalOpenDeptInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






    


  $scope.show = function(department) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editDepartment.html',
        controller: ModalInstanceCtrl,
        resolve: {
           department: function () {
             return department;
           }
         }        
        // scope : $scope
      });
    };


 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenDeptInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','DeptService'];
          function ModalOpenDeptInstanceCtrl($scope, $rootScope,$uibModalInstance, DeptService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

            $scope.dept=new DeptService();
           $scope.submitdept=function() {
           $scope.dept.$save().then(function(data){
              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadDepartment", {});

           },
            function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
      
          };

          $scope.submitdeptClose=function() {
           $scope.dept.$save().then(function(){
             $rootScope.$emit("CallLoadDepartment", {});
             $scope.ok();

           },
             function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
      
          };
         
         
          }


          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','DeptService','department'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, DeptService,department) {
          $scope.department=department;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


          
                $scope.updatedept=function(department){
             department.$update().then(function(){
                   $rootScope.$emit("CallLoadDepartment", {});
            });
          
              };
          
         
          }
        }
    }

})();



(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('DeptService', DeptService);

    DeptService.$inject = ['$resource','jadaApiUrl'];
    function DeptService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/department/:ID', {ID: '@ID'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpCatController', EmpCatController);

    EmpCatController.$inject = ['$scope', '$http', '$rootScope','$uibModal','EmpcatService','$stateParams', '$state','jadaApiUrl'];
    function EmpCatController($scope,$http,$rootScope, $uibModal, EmpcatService,$stateParams, $state,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
 var SuccessMsg;
 var errorMsg;



$scope.categories=EmpcatService.query();

$http.get(jadaApiUrl+'api/payfrequency').success(function(data) {
              $scope.frequencies = data;
              console.log($scope.frequencies);

            });




  $scope.loadEmployeeCategory = function () {
   
$scope.categories=EmpcatService.query();
   }

 $rootScope.$on("CallLoadEmployeeCategory", function(){
           $scope.loadEmployeeCategory ();
        });


             $scope.delete= function (cat) {
            cat.$remove().then(function () {
         $scope.loadEmployeeCategory ();
            });
            }


 
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'EmpCategoryContent.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






    

$scope.show = function(category) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EmpCategoryEdit.html',
        controller: ModalInstanceCtrl,
        resolve: {
           category: function () {
             return category;
           }
         }        
        // scope : $scope
      });
    };



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenInstanceCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance','EmpcatService'];
          function ModalOpenInstanceCtrl($scope, $rootScope, $uibModalInstance, EmpcatService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.employeecategory=EmpcatService.query();
           $scope.category=new EmpcatService();
             $scope.submitEmpCategoty=function() {
            
            $scope.category.$save().then(function(data){
              var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
            $rootScope.$emit("CallLoadEmployeeCategory", {});

            }, function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
          
          };

          $scope.EmpCategotyClose=function() {
            
            $scope.category.$save().then(function(){
            $rootScope.$emit("CallLoadEmployeeCategory", {});
            $scope.ok();

            },
            function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          
          };
         
          }



          ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance','EmpcatService','category'];
          function ModalInstanceCtrl($scope, $rootScope, $uibModalInstance, EmpcatService,category) {
          $scope.cat=category;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
           
           $scope.updateEmpCategory=function(cat){
             cat.$update().then(function(){
                   $rootScope.$emit("CallLoadEmployeeCategory", {});
            });
          
              };
          }
        }
    }

})();


// (function() {
//     'use strict';

//     angular
//         .module('app.companydetails')
//         .factory('EmpcatService',  function($resource) {
//                 // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
//      var data=$resource('http://localhost:56135/api/employeecategory/:id', {id: '@id'},
//     { 'get':    {method:'GET', isArray:false},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'update': { method:'PUT' },
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} 
// });
//      return data
//     });
// })();


(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('EmpcatService', EmpcatService);

    EmpcatService.$inject = ['$resource','jadaApiUrl'];
    function EmpcatService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/employeecategory/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();



// (function() {
//     'use strict';

//     angular
//         .module('app.companydetails')
//         .factory('EmpGroupService',  function($resource) {
//                 // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
//      var data=$resource('http://localhost:56135/api/employeegroup/:id', {id: '@id'},
//     { 'get':    {method:'GET', isArray:false},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'update': { method:'PUT' },
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} 
// });
//      return data
//     });
// })();




(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('EmpGroupService', EmpGroupService);

    EmpGroupService.$inject = ['$resource','jadaApiUrl'];
    function EmpGroupService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/employeegroup/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();



(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpGroupController', EmpGroupController);

    EmpGroupController.$inject = ['$scope', '$rootScope', '$uibModal','EmpGroupService','$stateParams', '$state'];
    function EmpGroupController($scope, $rootScope,$uibModal, EmpGroupService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

           $scope.groups=EmpGroupService.query();





  $scope.loadEmployeeGroups = function () {
        $scope.groups=EmpGroupService.query();
   }

 $rootScope.$on("CallLoadEmployeeGroups", function(){
           $scope.loadEmployeeGroups();
        });


             $scope.delete= function (group) {
            group.$remove().then(function () {
         $scope.loadEmployeeGroups();
            });
            }

          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newGroup.html',
              controller: ModalOpnenGroupInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






  // $scope.showgroup = function(x) {
  //     $scope.x = x;
  //     var modalInstance = $uibModal.open({
  //       templateUrl: 'editGroup.html',
  //       controller: ModalInstanceCtrl,
  //       scope : $scope

  //     });
  //     console.log($scope);
  //   };
    

  $scope.showgroup = function(employeegroup) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editGroup.html',
        controller: ModalInstanceCtrl,
        resolve: {
           employeegroup: function () {
             return employeegroup;
           }
         }        
        // scope : $scope
      });
    };

 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpnenGroupInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','EmpGroupService'];
          function ModalOpnenGroupInstanceCtrl($scope, $rootScope,$uibModalInstance, EmpGroupService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


            $scope.groupone=new EmpGroupService();
             $scope.submitGroup=function() {
    
           $scope.groupone.$save().then(function(data){
               var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
          
            }
           $rootScope.$emit("CallLoadEmployeeGroups", {});

           }, function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
            $scope.closeGroup=function() {
    
           $scope.groupone.$save().then(function(){
           $rootScope.$emit("CallLoadEmployeeGroups", {});
           $scope.ok();

           }, function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };


        
          }



           ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','EmpGroupService','employeegroup'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, EmpGroupService,employeegroup) {
          $scope.group=employeegroup;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

               $scope.updategroup=function(group){
             group.$update().then(function(){
                   $rootScope.$emit("CallLoadEmployeeGroups", {});
            });
          
              };


           // $scope.updategroup=function(id){

           //    $scope.buttonText="Updating. . ."; //Once clicked change button text
           //    EmpGroupService.update({id: id}, $scope.group);
           //  // $scope.oneuser.$update(function(){
           //  //   console.log('Saving user: ' +$scope.oneuser.name);
           //  // $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
           //  // });

           //                  };
   


        
          }
        }
    }

})();




/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('LeaveTransactionTypeController', LeaveTransactionTypeController);

   LeaveTransactionTypeController.$inject = ['$scope','$rootScope', '$uibModal','leaveTTypeService','$stateParams', '$state'];
    function LeaveTransactionTypeController($scope, $rootScope, $uibModal, leaveTTypeService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.types=leaveTTypeService.query();



   $scope.loadLeaveTTypes  = function () {
       $scope.types=leaveTTypeService.query();

   }

 $rootScope.$on("CallLoadLeaveTTypes", function(){
           $scope.loadLeaveTTypes();
        });





  $scope.delete= function (type) {
type.$remove().then(function () {
    $scope.loadLeaveTTypes();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'AddTType.html',
              controller: ModalOpenTTypeInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






$scope.show = function(transaction) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editTType.html',
        controller: ModalInstanceCtrl,
        resolve: {
           transaction: function () {
             return transaction;
           }
         }        
        // scope : $scope
      });
    };




 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenTTypeInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveTTypeService'];
          function ModalOpenTTypeInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveTTypeService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
               $scope.type=new leaveTTypeService();
           $scope.submitLeaveTType=function() {
           $scope.type.$save().then(function(data){

            var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
          
            }
             $rootScope.$emit("CallLoadLeaveTTypes", {});

           },
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }

             $scope.closeLeaveTType=function() {
           $scope.type.$save().then(function(){
             $rootScope.$emit("CallLoadLeaveTTypes", {});
               $scope.ok ();

           },
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }
        }

             ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveTTypeService','transaction'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveTTypeService,transaction) {
          $scope.type=transaction;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
              

               $scope.updateLeaveTType=function(type){
 
               type.$update().then(function(){
                   $rootScope.$emit("CallLoadLeaveTTypes", {});
                     });
                };

          }
        }
    }

})();



(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('leaveTTypeService',  ["$resource", function($resource) {
                // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
        //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
    }]);
})();



(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('leaveService',  ["$resource", function($resource) {
          
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
    }]);
})();



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('LeaveController', LeaveController);

   LeaveController.$inject = ['$scope','$rootScope', '$uibModal','leaveService','$stateParams', '$state'];
    function LeaveController($scope, $rootScope, $uibModal, leaveService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.leaves=leaveService.query();



   $scope.loadLeaveTypes = function () {
       $scope.leaves=leaveService.query();

   }

 $rootScope.$on("CallLoadLeaveTypes", function(){
           $scope.loadLeaveTypes();
        });





  $scope.delete= function (leavetype) {
leavetype.$remove().then(function () {
    $scope.loadLeaveTypes();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addLeave.html',
              controller: ModalOpenLeaveInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






$scope.show = function(leaveType) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editLeave.html',
        controller: ModalInstanceCtrl,
        resolve: {
           leaveType: function () {
             return leaveType;
           }
         }        
        // scope : $scope
      });
    };




 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenLeaveInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveService'];
          function ModalOpenLeaveInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
               $scope.leave=new leaveService();
           $scope.submitLeaveTypes=function() {
           $scope.leave.$save().then(function(data){

             var response=angular.fromJson(data);
            console.log(response.Message);
            // $scope.authMsg=response.Message;
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                  $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
          
            }
             $rootScope.$emit("CallLoadLeaveTypes", {});

           },
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }
             $scope.closesubmitLeaveTypes=function() {
           $scope.leave.$save().then(function(){
             $rootScope.$emit("CallLoadLeaveTypes", {});
               $scope.ok();

           },
            function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          }

        }

             ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','leaveService','leaveType'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, leaveService,leaveType) {
          $scope.leave=leaveType;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
              

               $scope.UpdateLeaveTypes=function(leave){
 
               leave.$update().then(function(){
                   $rootScope.$emit("CallLoadLeaveTypes", {});
                     });
                };

          }
        }
    }

})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PayFrequencyController', PayFrequencyController);

    PayFrequencyController.$inject = ['$scope', '$rootScope','$uibModal','PayFrequencyService','$stateParams', '$state'];
    function PayFrequencyController($scope, $rootScope, $uibModal, PayFrequencyService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.frequencies=PayFrequencyService.query();




 $scope.loadPayfrequencies = function () {
     $scope.frequencies=PayFrequencyService.query();
   }

 $rootScope.$on("CallLoadPayfrequencies", function(){
           $scope.loadPayfrequencies();
        });

    // $scope.delete=function(id) {

    //     PaypointService.remove({id: id});
    //     $scope.loadPoints();

    //       };
          

  $scope.delete= function (point) {
point.$remove().then(function () {
  $scope.loadPayfrequencies();
// $scope.plist.splice($scope.plist.indexOf(code), 1);
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'AddPayFrequency.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };






  $scope.show = function(frequency) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EditPayFrequency.html',
        controller: ModalInstanceCtrl,
        resolve: {
           frequency: function () {
             return frequency;
           }
         }        
        // scope : $scope
      });
    };


 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','PayFrequencyService'];
          function ModalOpenInstanceCtrl($scope, $rootScope,$uibModalInstance, PayFrequencyService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        
           $scope.pfrequency=new PayFrequencyService();
             $scope.submitPFrequency=function() {
            
            $scope.pfrequency.$save().then(function(data){
               var response=angular.fromJson(data);
            console.log(response.Message);
       
            if(response.Status=="1"){
                   $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                   $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
        
            }
                    $rootScope.$emit("CallLoadPayfrequencies", {});
            }, 
             function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

          };

           $scope.closePFrequency=function() {
            
            $scope.pfrequency.$save().then(function(){
                    $rootScope.$emit("CallLoadPayfrequencies", {});
                      $scope.ok();
            },  function() {
                  $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });

          };
         
          }



          ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','PayFrequencyService','frequency'];
          function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PayFrequencyService,frequency) {
          $scope.frequency=frequency;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
        
   


      $scope.updatePayFrequency=function(frequency){
             frequency.$update().then(function(){
                   $rootScope.$emit("CallLoadPayfrequencies", {});
            });
          
              };




      

      
         
          }
        }
    }

})();





(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('PayFrequencyService', PayFrequencyService);

    PayFrequencyService.$inject = ['$resource','jadaApiUrl'];
    function PayFrequencyService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/payfrequency/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();




/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PayPointController', PayPointController);

    PayPointController.$inject = ['$scope','$rootScope', '$uibModal','PaypointService','$stateParams', '$state'];
    function PayPointController($scope,$rootScope, $uibModal, PaypointService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.points=PaypointService.query();



   $scope.loadPoints = function () {
        $scope.points=PaypointService.query();
   }

 $rootScope.$on("CallParentMethod", function(){
           $scope.loadPoints();
        });

   
          

  $scope.delete= function (point) {
point.$remove().then(function () {
  $scope.loadPoints();
// $scope.plist.splice($scope.plist.indexOf(code), 1);
});
}


          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'PayPointContent.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(point) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'PayPointEdit.html',
        controller: ModalInstanceCtrl,
        resolve: {
           point: function () {
             return point;
           }
         }        
        // scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService'];
          function ModalOpenInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService) {
    

            $scope.ok = function () {
              $uibModalInstance.close('closed');
              
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.ppoint=new PaypointService();
            
             $scope.submitPayPoint=function() {
           $scope.ppoint.$save().then(function(data){
          var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                    $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                 $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
          $rootScope.$emit("CallParentMethod", {});
       
         },
          function() {
              $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
 
          };

           $scope.ClosePayPoint=function() {
         $scope.ppoint.$save().then(function(data){
         
          $rootScope.$emit("CallParentMethod", {});
          $scope.ok();
         },
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
 
          };
         
          }

          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService','point'];
          function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService,point) {
            $scope.point=point;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
              
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
                $scope.updatePayPoint=function(point){

              
             point.$update().then(function(){
                      $scope.point=point;
                      console.log(point);
                   $rootScope.$emit("CallParentMethod", {});
            });
          
              };

         
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('PaypointService', PaypointService);

    PaypointService.$inject = ['$resource','jadaApiUrl'];
    function PaypointService($resource,jadaApiUrl) {
           //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource(jadaApiUrl+'api/paypoint/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();




/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CompanyPayrollAccess', CompanyPayrollAccess);

  CompanyPayrollAccess.$inject = ['$scope', '$uibModal','$stateParams', '$state','$localStorage'];
    function CompanyPayrollAccess($scope, $uibModal, $stateParams, $state,$localStorage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



// console.log($localStorage.currentUser.accountRights);
var accountRights=$localStorage.currentUser.accountRights;
for(var r=0;r<accountRights.length;r++){
  // console.log("array "+r+" : ");
  // console.log(accountRights[r]);
  if(accountRights[r].module=="department"){
    // console.log("department");
    $scope.showDepartment=accountRights[r].access;
    $scope.createDepartment=accountRights[r].create;
    $scope.editDepartment=accountRights[r].update;
     $scope.readDepartments=accountRights[r].read;
    $scope.deleteDepartment=accountRights[r].delete;

    break;

  }
}







          
         




    



 


       
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider){

      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;


      // Disables animation on items with class .ng-no-animation
      $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);

      // Improve performance disabling debugging features
      // $compileProvider.debugInfoEnabled(false);

    }


})();
    


/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$http','$rootScope', '$state', '$stateParams', '$window', '$templateCache', 'Colors','$location', '$localStorage'];

    function appRun($http,$rootScope, $state, $stateParams, $window, $templateCache, Colors , $location, $localStorage) {

if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }


        // Hook into ocLazyLoad to setup AngularGrid before inject into the app
        // See "Creating the AngularJS Module" at
        // https://www.ag-grid.com/best-angularjs-data-grid/index.php
        var offevent = $rootScope.$on('ocLazyLoad.fileLoaded', function(e, file) {
            if (file.indexOf('ag-grid.js') > -1) {
                agGrid.initialiseAgGridWithAngular1(angular);
                offevent();
            }
        });

        // Set reference to access them from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$storage = $window.localStorage;

        // Uncomment this to disable template cache
        /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if (typeof(toState) !== 'undefined'){
              $templateCache.remove(toState.templateUrl);
            }
        });*/
   $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/page/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/page/login');
                 
            }
        });



// routerApp.run(function ($rootScope, $state, AuthService) {
//     $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
//         if (toState.authenticate && !AuthService.IsAuthenticated()) {
//             alert("Not Authenticated");
//             // User isn’t authenticated
//             $state.transitionTo("login");
//             event.preventDefault(); 
//         }
//     });
// });

        // Allows to use branding color with interpolation
        // {{ colorByName('primary') }}
        $rootScope.colorByName = Colors.byName;

        // cancel click event easily
        $rootScope.cancel = function($event) {
            $event.stopPropagation();
        };

        // Hooks Example
        // -----------------------------------

        // Hook not found
        $rootScope.$on('$stateNotFound',
            function(event, unfoundState /*, fromState, fromParams*/ ) {
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            });
        // Hook error
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                console.log(error);
            });
        // Hook success
        $rootScope.$on('$stateChangeSuccess',
            function( /*event, toState, toParams, fromState, fromParams*/ ) {
                // display new view from top
                $window.scrollTo(0, 0);
                // Save the route title
                $rootScope.currTitle = $state.current.title;
            });

        // Load a title dynamically
        $rootScope.currTitle = $state.current.title;
        $rootScope.pageTitle = function() {
            var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
            document.title = title;
            return title;
        };

    }

})();



// routerApp.service('AuthService', function () {
//     this._isAuthenticated = false;
//     this._isAccessToken = '';
//     this.IsAuthenticated = function () {
//         return this._isAuthenticated;
//     }
// });
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'ChartData', '$timeout','$localStorage'];
    function DashboardController($scope, ChartData, $timeout,$localStorage) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            
            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){
              
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
        

        $scope.Logout=function() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
            aler("logging out")
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV2Controller', DashboardV2Controller);

    DashboardV2Controller.$inject = ['$rootScope', '$scope', '$state'];
    function DashboardV2Controller($rootScope, $scope, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Change layout mode
          if( $state.includes('app-h') ) {
            // Setup layout horizontal for demo
            $rootScope.app.layout.horizontal = true;
            $scope.$on('$destroy', function(){
                $rootScope.app.layout.horizontal = false;
            });
          }
          else {
            if(!$rootScope.app.layout.isCollapsedText)
                $rootScope.app.layout.isCollapsed = true;
          }

          // BAR STACKED
          // -----------------------------------
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // -----------------------------------

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV3Controller', DashboardV3Controller);

    DashboardV3Controller.$inject = ['$rootScope'];
    function DashboardV3Controller($rootScope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };
          
          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.employees')
        .controller('CreateEmplController', CreateEmplController);

    CreateEmplController.$inject = ['$uibModal'];
    function CreateEmplController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };



   vm.show= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'ModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };


 vm.showStatutory= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'StatutoryModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });




            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          vm.showloans= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'loansModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

           vm.showpension= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'PensionModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

        vm.display= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'template.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


          vm.add= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'add.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

           vm.more= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'mytemplate.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


           vm.info= function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'myContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
          function ModalInstanceCtrl($scope, $uibModalInstance) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

              $scope.submitEmpMaster = function() {
                console.log($scope.description);
        
        // UserService.save($scope.empMaster);
  };
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmployeesDetailsController', EmployeesDetailsController);

EmployeesDetailsController.$inject = ['$stateParams', '$state','$http','$scope', '$uibModal','EmployeeService'];
    function EmployeesDetailsController($stateParams, $state,$http,$scope, $uibModal, EmployeeService) {
      
        var vm = this;

        activate();

        ////////////////

        function activate() {

 
           var empid=$stateParams.Employee;

           console.log( empid);
            if(empid!=null){
           $scope.currentemployee=EmployeeService.get({id:empid});
          }
           
         
          


     




  


 


        }
    }

})();



(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmployeesController', EmployeesController);

EmployeesController.$inject = ['$stateParams', '$rootScope','$state','$http','$scope', '$uibModal','EmployeeService','jadaApiUrl'];
    function EmployeesController($stateParams, $rootScope,$state,$http,$scope, $uibModal, EmployeeService,jadaApiUrl) {
      
        var vm = this;

        activate();

        ////////////////

        function activate() {



             $scope.today = function() {
             $scope.dt = new Date();
          };
          $scope.today();

       $scope.clear = function () {
           $scope.dt = null;
          };

          // Disable weekend selection
         $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

         $scope.toggleMin = function() {
           $scope.minDate =  $scope.minDate ? null : new Date();
          };
          $scope.toggleMin();

       $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

        $scope.opened = true;
          };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

         $scope.initDate = new Date('2019-10-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format =  $scope.formats[0];
        
           var SuccessMsg;
            var errorMsg;

           var id = $stateParams.EmployeeId;
      
          if(id!=null){
           $scope.employee=EmployeeService.get({id:id}); 
          }
           
          
        $scope.employees=EmployeeService.query();


  $scope.loadEmployees = function () {
          $scope.employees=EmployeeService.query();

   }

 $rootScope.$on("CallLoadEmployees", function(){
           $scope.loadEmployees();
        });


$http.get(jadaApiUrl+'api/department').success(function(data) {
              $scope.departments = data;

            });


$http.get(jadaApiUrl+'api/costcenter').success(function(data) {
              $scope.centers = data;

            });

$http.get(jadaApiUrl+'api/employeegroup').success(function(data) {
              $scope.groups = data;

            });

$http.get(jadaApiUrl+'api/employeecategory').success(function(data) {
              $scope.categories = data;

            });

$http.get(jadaApiUrl+'api/paypoint').success(function(data) {
              $scope.points = data;

            });

       $scope.empMaster= new EmployeeService();
            $scope.submitEmpMaster = function() {
              $scope.empMaster.$save().then(function(data){
                var response=angular.fromJson(data);
          
            if(response.Status=="1"){
                   $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
                    $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
    
            }
                  $scope.loadEmployees();

              },
               function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
             
        };

         $scope.delete= function (employee) {
            employee.$remove().then(function () {
             $scope.loadEmployees();

            });
            }


               
            $scope.updateEmpMaster=function(employee){
             employee.$update().then(function(){
                     $scope.loadEmployees();
            },
              function() {
                 $scope.errorMsg = 'Server Request Error';
                });
          
              };
        


       $scope.departments = [];
       $scope.selectDepartments= function() {
           $rootScope.$emit("CallLoadDepartment", {});
          };


   


 


        }
    }

})();






(function() {
    'use strict';

    angular
        .module('app.employees')
        .factory('EmployeeService', EmployeeService);

    EmployeeService.$inject = ['$resource','jadaApiUrl'];
    function EmployeeService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/employee/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();

(function() {
    'use strict';

    angular
        .module('app.employees')
        .controller('UpdateDemoCtrl', ["$scope", "$http", "$uibModal", "$log", "UserService", function($scope, $http, $uibModal, $log, UserService) { 
                
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


    }, function(result) {
      $log.info('Modal dismissed at: ' + new Date());
      $scope.didSelect = false;
    });
  };
}]);




         
   
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


(function() {
    'use strict';

    angular
        .module('app.employees')
        .controller('UserInfo', ["$scope", "$http", "$uibModal", "$log", "UserService", function($scope, $http, $uibModal, $log, UserService) { 
                
         // var usersdata= $http.get('https://jsonplaceholder.typicode.com/users');
         // usersdata.then(function(result){
         //   $scope.users=result.data;
         // })
         $scope.users=UserService.query();

         $scope.setDataForUsers=function(userId) {
          $scope.oneUser=UserService.get({user:userId});

         };

$scope.searchEmp=function(userId) {
   $scope.oneUser=UserService.get({user:userId});
 
 };

          $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        users: function () {
          return $scope.users;
        },
        user: function(){
          return size;
        }
      }
    });

  };





          $scope.show = function (size) {

    var modalInstance = $uibModal.open({  
      templateUrl: 'ModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size
    
    });

  };
         
    }]);
})();




(function() {
    'use strict';

    angular
        .module('app.employees')
        .controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', 'users', 'user', function($scope, $uibModalInstance, users, user) { 
                
         console.log(user);
  $scope.user = user;
  
  $scope.users = users;
  $scope.selected = {
   user: $scope.users[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.user);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
         
    }]);
})();

// (function() {
//     'use strict';

//     angular
//         .module('app.employees')
//         .controller('UserInfo', function($scope, $http, UserService) { 
                
//          // var usersdata= $http.get('https://jsonplaceholder.typicode.com/users');
//          // usersdata.then(function(result){
//          //  $scope.users=result.data;
//          // })
//          $scope.users=UserService.query();

//          $scope.setDataForUsers=function(userId) {
//            $scope.oneUser=UserService.get({user:userId});

//          };
         
//     });
// })();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AngularCarouselController', AngularCarouselController);

    function AngularCarouselController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.colors = ['#fc0003', '#f70008', '#f2000d', '#ed0012', '#e80017', '#e3001c', '#de0021', '#d90026', '#d4002b', '#cf0030', '#c90036', '#c4003b', '#bf0040', '#ba0045', '#b5004a', '#b0004f', '#ab0054', '#a60059', '#a1005e', '#9c0063', '#960069', '#91006e', '#8c0073', '#870078', '#82007d', '#7d0082', '#780087', '#73008c', '#6e0091', '#690096', '#63009c', '#5e00a1', '#5900a6', '#5400ab', '#4f00b0', '#4a00b5', '#4500ba', '#4000bf', '#3b00c4', '#3600c9', '#3000cf', '#2b00d4', '#2600d9', '#2100de', '#1c00e3', '#1700e8', '#1200ed', '#0d00f2', '#0800f7', '#0300fc'];

          function getSlide(target, style) {
              var i = target.length;
              return {
                  id: (i + 1),
                  label: 'slide #' + (i + 1),
                  img: 'http://lorempixel.com/1200/500/' + style + '/' + ((i + 1) % 10) ,
                  color: vm.colors[ (i*10) % vm.colors.length],
                  odd: (i % 2 === 0)
              };
          }

          function addSlide(target, style) {
              target.push(getSlide(target, style));
          }

          vm.carouselIndex = 3;
          vm.carouselIndex2 = 0;
          vm.carouselIndex2 = 1;
          vm.carouselIndex3 = 5;
          vm.carouselIndex4 = 5;

          function addSlides(target, style, qty) {
              for (var i=0; i < qty; i++) {
                  addSlide(target, style);
              }
          }

          // 1st ngRepeat demo
          vm.slides = [];
          addSlides(vm.slides, 'sports', 50);

          // 2nd ngRepeat demo
          vm.slides2 = [];
          addSlides(vm.slides2, 'sports', 10);

          // 3rd ngRepeat demo
          vm.slides3 = [];
          addSlides(vm.slides3, 'people', 50);

          // 4th ngRepeat demo
          vm.slides4 = [];
          addSlides(vm.slides4, 'city', 50);


          // 5th ngRepeat demo
          vm.slides6 = [];
          vm.carouselIndex6 = 0;
          addSlides(vm.slides6, 'sports', 10);
          vm.addSlide = function(at) {
              if(at==='head') {
                  vm.slides6.unshift(getSlide(vm.slides6, 'people'));
              } else {
                  vm.slides6.push(getSlide(vm.slides6, 'people'));
              }
          };
        }
    }
})();

/**=========================================================
 * Module: demo-dialog.js
 * Demo for multiple ngDialog Usage
 * - ngDialogProvider for default values not supported 
 *   using lazy loader. Include plugin in base.js instead.
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('DialogIntroCtrl', DialogIntroCtrl)
        .controller('DialogMainCtrl', DialogMainCtrl)
        .controller('InsideCtrl', InsideCtrl)
        .controller('SecondModalCtrl', SecondModalCtrl);

    DialogIntroCtrl.$inject = ['$scope', 'ngDialog', 'tpl'];
    // Called from the route state. 'tpl' is resolved before
    function DialogIntroCtrl($scope, ngDialog, tpl) {
        
        activate();

        ////////////////

        function activate() {
          // share with other controllers
          $scope.tpl = tpl;
          // open dialog window
          ngDialog.open({
            template: tpl.path,
            // plain: true,
            className: 'ngdialog-theme-default'
          });
        }
    }

    DialogMainCtrl.$inject = ['$scope', '$rootScope', 'ngDialog'];
    // Loads from view
    function DialogMainCtrl($scope, $rootScope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $rootScope.jsonData = '{"foo": "bar"}';
          $rootScope.theme = 'ngdialog-theme-default';

          $scope.directivePreCloseCallback = function (value) {
            if(confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.preCloseCallbackOnScope = function (value) {
            if(confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.open = function () {
            ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl', data: {foo: 'some data'} });
          };

          $scope.openDefault = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openDefaultWithPreCloseCallbackInlined = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                  return true;
                }
                return false;
              }
            });
          };



          $scope.openConfirm = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackOnScope = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: 'preCloseCallbackOnScope',
              scope: $scope
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
            ngDialog.openConfirm({
              template: 'dialogWithNestedConfirmDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(/*value*/) {

                var nestedConfirmDialog = ngDialog.openConfirm({
                  template:
                      '<p>Are you sure you want to close the parent dialog?</p>' +
                      '<div>' +
                        '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                        '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                      '</button></div>',
                  plain: true,
                  className: 'ngdialog-theme-default'
                });

                return nestedConfirmDialog;
              },
              scope: $scope
            })
            .then(function(value){
              console.log('resolved:' + value);
              // Perform the save here
            }, function(value){
              console.log('rejected:' + value);

            });
          };

          $scope.openInlineController = function () {
            $rootScope.theme = 'ngdialog-theme-default';

            ngDialog.open({
              template: 'withInlineController',
              controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;
                function count() {
                  $scope.exampleExternalData = 'Counter ' + (counter++);
                  timeout = $timeout(count, 450);
                }
                count();
                $scope.$on('$destroy', function () {
                  $timeout.cancel(timeout);
                });
              }],
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope
            });
          };

          $scope.openTemplateNoCache = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope,
              cache: false
            });
          };

          $scope.openTimed = function () {
            var dialog = ngDialog.open({
              template: '<p>Just passing through!</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
          };

          $scope.openNotify = function () {
            var dialog = ngDialog.open({
              template:
                '<p>You can do whatever you want when I close, however that happens.</p>' +
                '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
              plain: true
            });
            dialog.closePromise.then(function (data) {
              console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
            });
          };

          $scope.openWithoutOverlay = function () {
            ngDialog.open({
              template: '<h2>Notice that there is no overlay!</h2>',
              className: 'ngdialog-theme-default',
              plain: true,
              overlay: false
            });
          };
          $scope.clickToOpen = function () {
        ngDialog.open({ template: 'popupTmpl.html' });
};

          $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
          });
        }
    
    } // DialogMainCtrl


    InsideCtrl.$inject = ['$scope', 'ngDialog'];
    function InsideCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.dialogModel = {
            message : 'message from passed scope'
          };
          $scope.openSecond = function () {
            ngDialog.open({
              template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
              plain: true,
              closeByEscape: false,
              controller: 'SecondModalCtrl'
            });
          };
        }
    }

    SecondModalCtrl.$inject = ['$scope', 'ngDialog'];
    function SecondModalCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.closeSecond = function () {
            ngDialog.close();
          };
        }

    }


})();




/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable 
 * events and events creations
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('InfiniteScrollController', InfiniteScrollController)
        .factory('datasource', datasource);

    function InfiniteScrollController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

          vm.loadMore = function() {
            var last = vm.images[vm.images.length - 1];
            for(var i = 1; i <= 10; i++) {
              vm.images.push(last + i);
            }
          };
        }
    }
    
    datasource.$inject = ['$log', '$timeout'];
    function datasource(console, $timeout) {

        var get = function(index, count, success) {
            return $timeout(function() {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
        };
        return {
            get: get
        };
    }

})();

/**=========================================================
 * Module: masonry-deck.js
 * Demo for Angular Deck
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inject = ['RouteHelpers'];
    function MasonryDeckController(RouteHelpers) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.basepath = RouteHelpers.basepath;

          vm.photos = [
              {id: 'photo-1', name: 'Awesome photo', src: 'http://lorempixel.com/400/300/abstract'},
              {id: 'photo-2', name: 'Great photo', src: 'http://lorempixel.com/450/400/city'},
              {id: 'photo-3', name: 'Strange photo', src: 'http://lorempixel.com/400/300/people'},
              {id: 'photo-4', name: 'A photo?', src: 'http://lorempixel.com/400/300/transport'},
              {id: 'photo-5', name: 'What a photo', src: 'http://lorempixel.com/450/300/fashion'},
              {id: 'photo-6', name: 'Silly photo', src: 'http://lorempixel.com/400/300/technics'},
              {id: 'photo-7', name: 'Weird photo', src: 'http://lorempixel.com/410/350/sports'},
              {id: 'photo-8', name: 'Modern photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-9', name: 'Classical photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-10', name: 'Dynamic photo', src: 'http://lorempixel.com/420/300/abstract'},
              {id: 'photo-11', name: 'Neat photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-12', name: 'Bumpy photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-13', name: 'Brilliant photo', src: 'http://lorempixel.com/400/380/nature'},
              {id: 'photo-14', name: 'Excellent photo', src: 'http://lorempixel.com/480/300/technics'},
              {id: 'photo-15', name: 'Gorgeous photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-16', name: 'Lovely photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-17', name: 'A "wow" photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-18', name: 'Bodacious photo', src: 'http://lorempixel.com/400/300/abstract'}
          ];
        }
    }

    // Add class to img element when source is loaded
    function imageloaded () {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var cssClass = attrs.loadedclass;

          element.bind('load', function () {
              angular.element(element).addClass(cssClass);
          });
        }
    }

})();



/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];
    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
          vm.my_tree_handler = function(branch) {

            vm.output = 'You selected: ' + branch.label;

            if (branch.data && branch.data.description) {
              vm.output += '(' + branch.data.description + ')';
              return vm.output;
            }
          };

          // onSelect event handlers
          var apple_selected = function(branch) {
            vm.output = 'APPLE! : ' + branch.label;
            return vm.output;
          };

          var treedata_avm = [
            {
              label: 'Animal',
              children: [
                {
                  label: 'Dog',
                  data: {
                    description: 'man\'s best friend'
                  }
                }, {
                  label: 'Cat',
                  data: {
                    description: 'Felis catus'
                  }
                }, {
                  label: 'Hippopotamus',
                  data: {
                    description: 'hungry, hungry'
                  }
                }, {
                  label: 'Chicken',
                  children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
              ]
            }, {
              label: 'Vegetable',
              data: {
                definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                data_can_contain_anything: true
              },
              onSelect: function(branch) {
                vm.output = 'Vegetable: ' + branch.data.definition;
                return vm.output;
              },
              children: [
                {
                  label: 'Oranges'
                }, {
                  label: 'Apples',
                  children: [
                    {
                      label: 'Granny Smith',
                      onSelect: apple_selected
                    }, {
                      label: 'Red Delicous',
                      onSelect: apple_selected
                    }, {
                      label: 'Fuji',
                      onSelect: apple_selected
                    }
                  ]
                }
              ]
            }, {
              label: 'Mineral',
              children: [
                {
                  label: 'Rock',
                  children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                  label: 'Metal',
                  children: ['Aluminum', 'Steel', 'Copper']
                }, {
                  label: 'Plastic',
                  children: [
                    {
                      label: 'Thermoplastic',
                      children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                      label: 'Thermosetting Polymer',
                      children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }
                  ]
                }
              ]
            }
          ];
          
          var treedata_geography = [
            {
              label: 'North America',
              children: [
                {
                  label: 'Canada',
                  children: ['Toronto', 'Vancouver']
                }, {
                  label: 'USA',
                  children: ['New York', 'Los Angeles']
                }, {
                  label: 'Mexico',
                  children: ['Mexico City', 'Guadalajara']
                }
              ]
            }, {
              label: 'South America',
              children: [
                {
                  label: 'Venezuela',
                  children: ['Caracas', 'Maracaibo']
                }, {
                  label: 'Brazil',
                  children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                  label: 'Argentina',
                  children: ['Buenos Aires', 'Cordoba']
                }
              ]
            }
          ];

          vm.my_data = treedata_avm;
          vm.try_changing_the_tree_data = function() {
            if (vm.my_data === treedata_avm) {
              vm.my_data = treedata_geography;
            } else {
              vm.my_data = treedata_avm;
            }
            return vm.my_data;
          };
          
          var tree;
          // This is our API control variable
          vm.my_tree = tree = {};
          vm.try_async_load = function() {
            
            vm.my_data = [];
            vm.doing_async = true;
            
            // Request tree data via $resource
            var remoteTree = $resource('server/treedata.json');
            
            return remoteTree.get(function(res){
              
              vm.my_data = res.data;

              vm.doing_async = false;
            
              return tree.expand_all();
            
            // we must return a promise so the plugin 
            // can watch when it's resolved
            }).$promise;
          };
          
          // Adds a new branch to the tree
          vm.try_adding_a_branch = function() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
              label: 'New Branch',
              data: {
                something: 42,
                'else': 43
              }
            });
          };

        }
    }
})();


/**=========================================================
 * Module: nestable.js
 * Nestable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.items =  [
            {
              item: {text: 'a'},
              children: []
            },
            {
              item: {text: 'b'},
              children: [
                {
                  item: {text: 'c'},
                  children: []
                },
                {
                  item: {text: 'd'},
                  children: []
                }
              ]
            },
            {
              item: {text: 'e'},
              children: []
            },
            {
              item: {text: 'f'},
              children: []
            }
          ];

          vm.items2 =  [
            {
              item: {text: '1'},
              children: []
            },
            {
              item: {text: '2'},
              children: [
                {
                  item: {text: '3'},
                  children: []
                },
                {
                  item: {text: '4'},
                  children: []
                }
              ]
            },
            {
              item: {text: '5'},
              children: []
            },
            {
              item: {text: '6'},
              children: []
            }
          ];

        }
    }
})();

/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .directive('scrollable', scrollable);

    function scrollable () {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var defaultHeight = 250;
          element.slimScroll({
              height: (attrs.height || defaultHeight)
          });
        }
    }

})();

/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);

    SortableController.$inject = ['$scope'];

    function SortableController($scope) {

        activate();

        ////////////////

        function activate() {
            // Single List
            $scope.data1 = [{
                id: 1,
                name: 'Donald Hoffman'
            }, {
                id: 2,
                name: 'Wallace Barrett'
            }, {
                id: 3,
                name: 'Marsha Hicks'
            }, {
                id: 4,
                name: 'Roland Brown'
            }];

            $scope.add = function() {
                $scope.data1.push({
                    id: $scope.data1.length + 1,
                    name: 'Earl Knight'
                });
            };

            $scope.sortableOptions = {
                placeholder: 'box-placeholder m0'
            };
        }
    }

})();

/**=========================================================
 * Module: sweetalert.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SweetAlertController', SweetAlertController);

    SweetAlertController.$inject = ['SweetAlert'];
    function SweetAlertController(SweetAlert) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.demo1 = function() {
            SweetAlert.swal('Here\'s a message');
          };

          vm.demo2 = function() {
            SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
          };

          vm.demo3 = function() {
            SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
          };

          vm.demo4 = function() {
            SweetAlert.swal({   
              title: 'Are you sure?',   
              text: 'Your will not be able to recover this imaginary file!',   
              type: 'warning',   
              showCancelButton: true,   
              confirmButtonColor: '#DD6B55',   
              confirmButtonText: 'Yes, delete it!',
              closeOnConfirm: false
            },  function(){  
              SweetAlert.swal('Booyah!');
            });
          };

          vm.demo5 = function() {
            SweetAlert.swal({   
              title: 'Are you sure?',   
              text: 'Your will not be able to recover this imaginary file!',   
              type: 'warning',   
              showCancelButton: true,   
              confirmButtonColor: '#DD6B55',   
              confirmButtonText: 'Yes, delete it!',   
              cancelButtonText: 'No, cancel plx!',   
              closeOnConfirm: false,   
              closeOnCancel: false 
            }, function(isConfirm){  
              if (isConfirm) {     
                SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');   
              } else {     
                SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');   
              } 
            });
          };

          vm.demo6 = function() {
            SweetAlert.swal({   
              title: 'Sweet!',   
              text: 'Here\'s a custom image.',   
              imageUrl: 'http://oitozero.com/img/avatar.jpg' 
            });
          };
        }
    }
})();

/**=========================================================
 * Module: demo-toaster.js
 * Demos for toaster notifications
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('ToasterDemoCtrl', ToasterDemoCtrl);

    ToasterDemoCtrl.$inject = ['toaster'];
    function ToasterDemoCtrl(toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.toaster = {
              type:  'success',
              title: 'Title',
              text:  'Message'
          };

          vm.pop = function() {
            toaster.pop(vm.toaster.type, vm.toaster.title, vm.toaster.text);
          };
        }
    }
})();

/**=========================================================
 * Module: tour.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('TourCtrl', TourCtrl);

    TourCtrl.$inject = ['$scope'];
    function TourCtrl($scope) {

        activate();

        ////////////////

        function activate() {
          // BootstrapTour is not compatible with z-index based layout
          // so adding position:static for this case makes the browser
          // to ignore the property
          var section = angular.element('.wrapper > section');
          section.css({'position': 'static'});
          // finally restore on destroy and reuse the value declared in stylesheet
          $scope.$on('$destroy', function(){
            section.css({'position': ''});
          });
        }
    }
})();

/**=========================================================
 * Module: article.js
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('ArticleController', ArticleController);

    function ArticleController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.htmlContent = 'Article content...';

          vm.postDemo = {};
          vm.postDemo.tags = ['coding', 'less'];
          vm.availableTags = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
          vm.postDemo.categories = ['JAVASCRIPT','WEB'];
          vm.availableCategories = ['JAVASCRIPT','WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];

          vm.reviewers = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];


          vm.alerts = [
            { type: 'info', msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>' }
          ];

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CalendarController', CalendarController);

    CalendarController.$inject = ['$scope', '$compile', 'uiCalendarConfig'];
    function CalendarController($scope, $compile, uiCalendarConfig) {
        var vm = this;
        vm.title = 'CalendarController';

        activate();

        ////////////////

        function activate() {

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $scope.changeTo = 'Hungarian';
            /* event source that pulls from google.com */
            $scope.eventSource = {
                url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
                className: 'gcal-event', // an option!
                currentTimezone: 'America/Chicago' // an option!
            };
            /* event source that contains custom events on the scope */
            $scope.events = [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                backgroundColor: '#f56954', //red
                borderColor: '#f56954' //red
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                backgroundColor: '#f39c12', //yellow
                borderColor: '#f39c12' //yellow
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                backgroundColor: '#00c0ef', //Info (aqua)
                borderColor: '#00c0ef' //Info (aqua)
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: '#00a65a', //Success (green)
                borderColor: '#00a65a' //Success (green)
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: '#2f80e7', //Primary (light-blue)
                borderColor: '#2f80e7' //Primary (light-blue)
            }];
            /* event source that calls a function on every view switch */
            $scope.eventsF = function(start, end, timezone, callback) {
                var s = new Date(start).getTime() / 1000;
                var e = new Date(end).getTime() / 1000;
                var m = new Date(start).getMonth();
                var events = [{
                    title: 'Feed Me ' + m,
                    start: s + (50000),
                    end: s + (100000),
                    allDay: false,
                    className: ['customFeed']
                }];
                callback(events);
            };

            $scope.calEventsExt = {
                color: '#f00',
                textColor: 'white',
                events: [{
                    type: 'party',
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink
                }, {
                    type: 'party',
                    title: 'Lunch 2',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink
                }, {
                    type: 'party',
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink

                }]
            };
            /* alert on eventClick */
            $scope.alertOnEventClick = function(date, jsEvent, view) {
                $scope.alertMessage = (date.title + ' was clicked ');
            };
            /* alert on Drop */
            $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Droped');// to make dayDelta ' + delta);
            };
            /* alert on Resize */
            $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Resized'); // to make dayDelta ' + delta);
            };
            /* add and removes an event source of choice */
            $scope.addRemoveEventSource = function(sources, source) {
                var canAdd = 0;
                angular.forEach(sources, function(value, key) {
                    if (sources[key] === source) {
                        sources.splice(key, 1);
                        canAdd = 1;
                    }
                });
                if (canAdd === 0) {
                    sources.push(source);
                }
            };
            /* add custom event*/
            $scope.addEvent = function() {
                $scope.events.push({
                    title: 'Open Sesame',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    className: ['openSesame']
                });
            };
            /* remove event */
            $scope.remove = function(index) {
                $scope.events.splice(index, 1);
            };
            /* Change View */
            $scope.changeView = function(view, calendar) {
                uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
            };
            /* Change View */
            $scope.renderCalender = function(calendar) {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            };
            /* Render Tooltip */
            $scope.eventRender = function(event, element, view) {
                element.attr({
                    'tooltip': event.title,
                    'tooltip-append-to-body': true
                });
                $compile(element)($scope);
            };
            /* config object */
            $scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    buttonIcons: { // note the space at the beginning
                        prev: ' fa fa-caret-left',
                        next: ' fa fa-caret-right'
                    },
                    buttonText: {
                        today: 'today',
                        month: 'month',
                        week: 'week',
                        day: 'day'
                    },
                    eventClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventRender: $scope.eventRender
                }
            };

            $scope.changeLang = function() {
                if ($scope.changeTo === 'Hungarian') {
                    $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
                    $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
                    $scope.changeTo = 'English';
                } else {
                    $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    $scope.changeTo = 'Hungarian';
                }
            };
            /* event sources array*/
            // $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
            $scope.eventSources = [$scope.calEventsExt, $scope.eventsF, $scope.events];
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.extras')
        .service('LoadTreeService', LoadTreeService);

    LoadTreeService.$inject = ['$resource'];
    function LoadTreeService($resource) {
        // Loads the list of files to populate the treeview
        return $resource('server/editor/filetree.json');
    }

})();
/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];
    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
          // Setup the layout mode 
          $rootScope.app.useFullLayout = true;
          $rootScope.app.hiddenFooter = true;
          $rootScope.app.layout.isCollapsed = true;
          
          // Restore layout for demo
          $scope.$on('$destroy', function(){
              $rootScope.app.useFullLayout = false;
              $rootScope.app.hiddenFooter = false;
          });

        }

        function activate() {

          // Set the tree data into the scope
          vm.filetree_data = filetree;

          // Available themes
          vm.editorThemes = ['3024-day','3024-night','ambiance-mobile','ambiance','base16-dark','base16-light','blackboard','cobalt','eclipse','elegant','erlang-dark','lesser-dark','mbo','mdn-like','midnight','monokai','neat','neo','night','paraiso-dark','paraiso-light','pastel-on-dark','rubyblue','solarized','the-matrix','tomorrow-night-eighties','twilight','vibrant-ink','xq-dark','xq-light'];

          vm.editorOpts = {
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true,
            theme: 'mbo',
            viewportMargin: Infinity
          };

          vm.refreshEditor = 0;

          // Load dinamically the stylesheet for the selected theme
          // You can use ozLazyLoad to load also the mode js based 
          // on the file extension that is loaded (see handle_filetree)
          vm.loadTheme = function() {
            var BASE = 'vendor/codemirror/theme/';
            $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
            vm.refreshEditor = !vm.refreshEditor;
          };
          // load default theme
          vm.loadTheme(vm.editorOpts.theme);
          // Add some initial text
          vm.code = '// Open a file from the left menu \n' +
                        '// It will be requested to the server and loaded into the editor\n' +
                        '// Also try adding a New File from the toolbar\n';


          // Tree

          var selectedBranch;
          vm.handle_filetree = function(branch) {
            
            selectedBranch = branch;

            var basePath = 'server/editor/';
            var isFolder = !!branch.children.length;

            console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

            if ( ! isFolder ) {

              $http
                .get( basePath + branch.path )
                .success(function(response){
                  
                  console.log('Loaded.. ' + branch.path);
                  // set the new code into the editor
                  vm.code = response;
                  
                  vm.editorOpts.mode = detectMode(branch.path);
                  console.log( 'Mode is: ' + vm.editorOpts.mode);

                });
            }
          };

          function detectMode(file) {
            var ext = file.split('.');
            ext = ext ? ext[ext.length - 1] : '';
            switch (ext) {
              case 'html':  return 'htmlmixed';
              case 'css':   return 'css';
              default:      return 'javascript';
            }
          }

          var tree;
          tree = vm.filetree = {};

          // Adds a new branch to the tree
          vm.new_filetree = function() {
            var b;
            b = tree.get_selected_branch();

            // if we select a leaf -> select the parent folder
            if ( b && b.children.length === 0 ) {
              b = tree.get_parent_branch(b);
            }
            
            return tree.add_branch(b, {
              'label': 'another.html',
              'path': 'source/another.html'
            });
          };
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];
    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.items = [
            {
              todo: {title: 'Meeting with Mark at 7am.', description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. '},
              complete: true
            },
            {
              todo: {title: 'Call Sonya. Talk about the new project.', description: ''},
              complete: false
            },
            {
              todo: {title: 'Find a new place for vacations', description: ''},
              complete: false
            }
            ];
          
          vm.editingTodo = false;
          vm.todo = {};

          vm.addTodo = function() {
            
            if( vm.todo.title === '' ) return;
            if( !vm.todo.description ) vm.todo.description = '';
            
            if( vm.editingTodo ) {
              vm.todo = {};
              vm.editingTodo = false;
            }
            else {
              vm.items.push({todo: angular.copy(vm.todo), complete: false});
              vm.todo.title = '';
              vm.todo.description = '';
            }
          };
          
          vm.editTodo = function(index, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.todo = vm.items[index].todo;
            vm.editingTodo = true;
          };

          vm.removeTodo = function(index/*, $event*/) {
            vm.items.splice(index, 1);
          };
          
          vm.clearAll = function() {
            vm.items = [];
          };

          vm.totalCompleted = function() {
            return $filter('filter')(vm.items, function(item){
              return item.complete;
            }).length;
          };

          vm.totalPending = function() {
            return $filter('filter')(vm.items, function(item){
              return !item.complete;
            }).length;
          };

        }
    }
})();

/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.words = [
              {
                text: 'Lorem',
                weight: 13
                //link: 'http://themicon.co'
              }, {
                text: 'Ipsum',
                weight: 10.5
              }, {
                text: 'Dolor',
                weight: 9.4
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }
          ];
        }
    }
})();

/**=========================================================
 * Module: flatdoc.js
 * Creates the flatdoc markup and initializes the plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.flatdoc')
        .directive('flatdoc', flatdoc);

    function flatdoc() {

        var directive = {
            template: '<div role="flatdoc"><div role="flatdoc-menu"></div><div role="flatdoc-content"></div></div>',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {

            Flatdoc.run({
                fetcher: Flatdoc.file(attrs.src)
            });

            var $root = $('html, body');
            var menuLinks;

            var $doc = $(document).on('flatdoc:ready', function() {

                var docMenu = $('[role="flatdoc-menu"]');

                menuLinks = docMenu.find('a').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var $this = $(this);

                    docMenu.find('a.active').removeClass('active');
                    $this.addClass('active');

                    $root.animate({
                        scrollTop: $(this.getAttribute('href')).offset().top - ($('.topnavbar').height() + 10)
                    }, 800);
                });

            });

            // dettach all events
            scope.$on('$destroy', function() {
                menuLinks && menuLinks.off();
                $doc.off('flatdoc:ready');
            });

        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.hexPicker = {
              color: ''
            };

            vm.rgbPicker = {
              color: ''
            };

            vm.rgbaPicker = {
              color: ''
            };

            vm.nonInput = {
              color: ''
            };

            vm.resetColor = function() {
              vm.hexPicker = {
                color: '#ff0000'
              };
            };

            vm.resetRBGColor = function() {
              vm.rgbPicker = {
                color: 'rgb(255,255,255)'
              };
            };

            vm.resetRBGAColor = function() {
              vm.rgbaPicker = {
                color: 'rgb(255,255,255, 0.25)'
              };
            };

            vm.resetNonInputColor = function() {
              vm.nonInput = {
                color: '#ffffff'
              };
            };
        }
    }
})();
/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
})();

/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();
          
          // old usage support
          options.classInput = element.data('classinput') || options.classInput;
          
          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];
    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.reset = function() {
            vm.myImage        = '';
            vm.myCroppedImage = '';
            vm.imgcropType    = 'square';
          };

          vm.reset();

          var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
              $scope.$apply(function(/*$scope*/){
                vm.myImage=evt.target.result;
              });
            };
            if(file)
              reader.readAsDataURL(file);
          };
          
          angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            controller: ctrl,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {

          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;

          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {

            if ( angular.isDefined(self.steps[step]) ) {
                if(self.validate && step !== 1) { // no need to validate when move to first state
                    var scope = self.element.scope();
                    if(typeof scope.wizardValidate === 'function') {
                        var form = $(self.element).children().children('div').eq(step - 2).children('[ng-form]');
                        if ( ! scope.wizardValidate(form.attr('ng-form')))
                            return false;
                    }
                }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }

    }

    ctrl.$inject = ['$scope'];
    function ctrl($scope) {
        $scope.wizardValidate = function(formName) {
            if(angular.isDefined($scope[formName] )) {
                // Set submitted to perform validation
                $scope[formName].$setSubmitted(true);
                // return valid status of the subform
                return $scope[formName].$valid;
            }
        }
    }

})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};

          // Tags inputs
          // -----------------------------------
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // -----------------------------------

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg
          // -----------------------------------

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

          vm.person = {};
          vm.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];

          vm.address = {};
          vm.refreshAddresses = function(address) {
            if(!address) return;
            var params = {address: address};
            return $http.get(
              '//maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: skycons.js
 * Include any animated weather icon from Skycons
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon () {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var skycons = new Skycons({'color': (attrs.color || 'white')});

          element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

          skycons.add(element.children()[0], attrs.skycon);

          skycons.play();
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'whirl':              ['vendor/whirl/dist/whirl.css'],
            'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
            'animo':              ['vendor/animo.js/animo.js'],
            'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
            'modernizr':          ['vendor/modernizr/modernizr.custom.js'],
            'animate':            ['vendor/animate.css/animate.min.css'],
            'skycons':            ['vendor/skycons/skycons.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'weather-icons':      ['vendor/weather-icons/css/weather-icons.min.css',
                                   'vendor/weather-icons/css/weather-icons-wind.min.css'],
            'sparklines':         ['vendor/sparkline/index.js'],
            'wysiwyg':            ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                                   'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
            'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js'],
            'screenfull':         ['vendor/screenfull/dist/screenfull.js'],
            'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
            'vector-map-maps':    ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
            'loadGoogleMapsJS':   ['vendor/load-google-maps/load-google-maps.js'],
            'flot-chart':         ['vendor/Flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                   'vendor/Flot/jquery.flot.resize.js',
                                   'vendor/Flot/jquery.flot.pie.js',
                                   'vendor/Flot/jquery.flot.time.js',
                                   'vendor/Flot/jquery.flot.categories.js',
                                   'vendor/flot-spline/js/jquery.flot.spline.min.js'],
            'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
            'inputmask':          ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js'],
            'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
            'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                                   'vendor/codemirror/lib/codemirror.css'],
            // modes for common web files
            'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                                     'vendor/codemirror/mode/xml/xml.js',
                                     'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                                     'vendor/codemirror/mode/css/css.js'],
            'taginput' :          ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                                   'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
            'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            'chartjs':            ['vendor/Chart.js/Chart.js'],
            'morris':             ['vendor/raphael/raphael.js',
                                   'vendor/morris.js/morris.js',
                                   'vendor/morris.js/morris.css'],
            'loaders.css':          ['vendor/loaders.css/loaders.css'],
            'spinkit':              ['vendor/spinkit/css/spinkit.css']
          },
          // Angular based script (use the right module name)
          modules: [
            {name: 'toaster',                   files: ['vendor/angularjs-toaster/toaster.js',
                                                       'vendor/angularjs-toaster/toaster.css']},
            {name: 'localytics.directives',     files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                                       'vendor/chosen_v1.2.0/chosen.min.css',
                                                       'vendor/angular-chosen-localytics/dist/angular-chosen.js'],
                                                        serie: true},
            {name: 'ngDialog',                  files: ['vendor/ngDialog/js/ngDialog.min.js',
                                                       'vendor/ngDialog/css/ngDialog.min.css',
                                                       'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
            {name: 'ngWig',                     files: ['vendor/ngWig/dist/ng-wig.min.js'] },
            {name: 'ngTable',                   files: ['vendor/ng-table/dist/ng-table.min.js',
                                                        'vendor/ng-table/dist/ng-table.min.css']},
            {name: 'ngTableExport',             files: ['vendor/ng-table-export/ng-table-export.js']},
            {name: 'angularBootstrapNavTree',   files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']},
            {name: 'xeditable',                 files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                                                        'vendor/angular-xeditable/dist/css/xeditable.css']},
            {name: 'angularFileUpload',         files: ['vendor/angular-file-upload/dist/angular-file-upload.js']},
            {name: 'ngImgCrop',                 files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                                                        'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']},
            {name: 'ui.select',                 files: ['vendor/angular-ui-select/dist/select.js',
                                                        'vendor/angular-ui-select/dist/select.css']},
            {name: 'ui.codemirror',             files: ['vendor/angular-ui-codemirror/ui-codemirror.js']},
            {name: 'angular-carousel',          files: ['vendor/angular-carousel/dist/angular-carousel.css',
                                                        'vendor/angular-carousel/dist/angular-carousel.js']},
            {name: 'infinite-scroll',           files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']},
            {name: 'ui.bootstrap-slider',       files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                                                        'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                                                        'vendor/angular-bootstrap-slider/slider.js'], serie: true},
            {name: 'ui.grid',                   files: ['vendor/angular-ui-grid/ui-grid.min.css',
                                                        'vendor/angular-ui-grid/ui-grid.min.js']},
            {name: 'summernote',                files: ['vendor/bootstrap/js/modal.js',
                                                        'vendor/bootstrap/js/dropdown.js',
                                                        'vendor/bootstrap/js/tooltip.js',
                                                        'vendor/summernote/dist/summernote.css',
                                                        'vendor/summernote/dist/summernote.js',
                                                        'vendor/angular-summernote/dist/angular-summernote.js'
                                                        ], serie: true},
            {name: 'angular-rickshaw',          files: ['vendor/d3/d3.min.js',
                                                        'vendor/rickshaw/rickshaw.js',
                                                        'vendor/rickshaw/rickshaw.min.css',
                                                        'vendor/angular-rickshaw/rickshaw.js'], serie: true},
            {name: 'angular-chartist',          files: ['vendor/chartist/dist/chartist.min.css',
                                                        'vendor/chartist/dist/chartist.js',
                                                        'vendor/angular-chartist.js/dist/angular-chartist.js'], serie: true},
            {name: 'ui.map',                    files: ['vendor/angular-ui-map/ui-map.js']},
            {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                        'vendor/datatables/media/js/jquery.dataTables.js',
                                                        'vendor/datatables-buttons/js/dataTables.buttons.js',
                                                        //'vendor/datatables-buttons/css/buttons.bootstrap.css',
                                                        'vendor/datatables-buttons/js/buttons.bootstrap.js',
                                                        'vendor/datatables-buttons/js/buttons.colVis.js',
                                                        'vendor/datatables-buttons/js/buttons.flash.js',
                                                        'vendor/datatables-buttons/js/buttons.html5.js',
                                                        'vendor/datatables-buttons/js/buttons.print.js',
                                                        'vendor/angular-datatables/dist/angular-datatables.js',
                                                        'vendor/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js'],
                                                        serie: true},
            {name: 'angular-jqcloud',           files: ['vendor/jqcloud2/dist/jqcloud.css',
                                                        'vendor/jqcloud2/dist/jqcloud.js',
                                                        'vendor/angular-jqcloud/angular-jqcloud.js']},
            {name: 'angularGrid',               files: ['vendor/ag-grid/dist/styles/ag-grid.css',
                                                        'vendor/ag-grid/dist/ag-grid.js',
                                                        'vendor/ag-grid/dist/styles/theme-dark.css',
                                                        'vendor/ag-grid/dist/styles/theme-fresh.css']},
            {name: 'ng-nestable',               files: ['vendor/ng-nestable/src/angular-nestable.js',
                                                        'vendor/nestable/jquery.nestable.js']},
            {name: 'akoenig.deckgrid',          files: ['vendor/angular-deckgrid/angular-deckgrid.js']},
            {name: 'oitozero.ngSweetAlert',     files: ['vendor/sweetalert/dist/sweetalert.css',
                                                        'vendor/sweetalert/dist/sweetalert.min.js',
                                                        'vendor/angular-sweetalert/SweetAlert.js']},
            {name: 'bm.bsTour',                 files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                                                        'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                                                        'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'], serie: true},
            {name: 'ui.knob',                   files: ['vendor/angular-knob/src/angular-knob.js',
                                                        'vendor/jquery-knob/dist/jquery.knob.min.js']},
            {name: 'easypiechart',              files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']},
            {name: 'colorpicker.module',        files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                                                        'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js']},
            {name: 'ui.sortable',               files: ['vendor/jquery-ui/jquery-ui.min.js',
                                                        'vendor/angular-ui-sortable/sortable.js'], serie: true},
            {name: 'ui.calendar',               files: ['vendor/jquery-ui/jquery-ui.min.js',
                                                        'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js',
                                                        'vendor/fullcalendar/dist/fullcalendar.min.js',
                                                        'vendor/fullcalendar/dist/gcal.js',
                                                        'vendor/fullcalendar/dist/fullcalendar.css',
                                                        'vendor/angular-ui-calendar/src/calendar.js'], serie: true}
          ]
        })
        ;

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
(function() {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig)
        ;
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];
    function localeConfig(tmhDynamicLocaleProvider){
  
      tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');
      // tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
/**=========================================================
 * Module: locale.js
 * Demo for locale settings
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];
    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
          $rootScope.availableLocales = {
            'en': 'English',
            'es': 'Spanish',
            'de': 'German',
            'fr': 'French',
            'ar': 'Arabic',
            'ja': 'Japanese',
            'ko': 'Korean',
            'zh': 'Chinese'};
          
          $rootScope.model = {selectedLocale: 'en'};
          
          $rootScope.$locale = $locale;
          
          $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.folders = [
            {name: 'Inbox',   folder: 'inbox',   alert: 42, icon: 'fa-inbox' },
            {name: 'Starred', folder: 'starred', alert: 10, icon: 'fa-star' },
            {name: 'Sent',    folder: 'sent',    alert: 0,  icon: 'fa-paper-plane-o' },
            {name: 'Draft',   folder: 'draft',   alert: 5,  icon: 'fa-edit' },
            {name: 'Trash',   folder: 'trash',   alert: 0,  icon: 'fa-trash'}
          ];

          vm.labels = [
            {name: 'Red',     color: 'danger'},
            {name: 'Pink',    color: 'pink'},
            {name: 'Blue',    color: 'info'},
            {name: 'Yellow',  color: 'warning'}
          ];

          vm.mail = {
            cc: false,
            bcc: false
          };
          // Mailbox editr initial content
          vm.content = '<p>Type something..</p>';
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailFolderController', MailFolderController);

    MailFolderController.$inject = ['mails', '$stateParams'];
    function MailFolderController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          
          vm.folder = {};
          // no filter for inbox
          vm.folder.folder = $stateParams.folder === 'inbox' ? '' : $stateParams.folder;

          mails.all().then(function(mails){
            vm.mails = mails;
          });
        }
    }
})();

// A RESTful factory for retrieving mails from json file

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .factory('mails', mails);

    mails.$inject = ['$http'];
    function mails($http) {
        var service = {
            all: all,
            get: get
        };
        return service;

        ////////////////
        
        function readMails() {
          var path = 'server/mails.json';
          return $http.get(path).then(function (resp) {
            return resp.data.mails;
          });
        }

        function all() {
          return readMails();
        }

        function get(id) {
          return readMails().then(function(mails){
            for (var i = 0; i < mails.length; i++) {
              if (+mails[i].id === +id) return mails[i];
            }
            return null;
          });
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailViewController', MailViewController);

    MailViewController.$inject = ['mails', '$stateParams'];
    function MailViewController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          mails.get($stateParams.mid).then(function(mail){
            vm.mail = mail;
          });
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('BankCodeController', BankCodeController);

    BankCodeController.$inject = ['$scope', '$rootScope','$uibModal','bankcodeService','$stateParams', '$state','DTOptionsBuilder', 'DTColumnDefBuilder'];
    function BankCodeController($scope,$rootScope, $uibModal, bankcodeService,$stateParams, $state,DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.banks=bankcodeService.query();
  $scope.loadBanks = function () {
        $scope.banks=bankcodeService.query();
   }

 $rootScope.$on("CallLoadBanks", function(){
           $scope.loadBanks();
        });







  $scope.delete= function (bank) {
   bank.$remove().then(function () {
   $scope.loadBanks();

});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addbankcodes.html',
              controller: ModalOpenBankInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(bank) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editbankcodes.html',
        controller: ModalInstanceCtrl,
        resolve: {
           bank: function () {
             return bank;
           }
         }        
        // scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenBankInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService'];
          function ModalOpenBankInstanceCtrl($scope, $uibModalInstance, bankcodeService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
             
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
           
          $scope.bank=new bankcodeService();
             $scope.submitBankClose=function() {
          $scope.bank.$save().then(function(){

         
               $rootScope.$emit("CallLoadBanks", {});
               $scope.ok();
          },
          function() {
               $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
  
          };



            $scope.submitBank=function() {
          $scope.bank.$save().then(function(data){
               var response=angular.fromJson(data);
         
            if(response.Status=="1"){
                     $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
                $scope.SuccessMsg=false;
                $scope.errorMsg=response.Message;
              // vm.auth=true;
            }
             $rootScope.$emit("CallLoadBanks", {});
            
          },
          function() {
                 $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
  
          };
         
          }


           ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService','bank'];
          function ModalInstanceCtrl($scope, $uibModalInstance, bankcodeService,bank) {
          $scope.bank=bank;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


            $scope.updateBank=function(bank){
  
            
            bank.$update().then(function(){
                   $rootScope.$emit("CallLoadBanks", {});
            });
          

            };

         
          }
        }
    }

})();





/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
// (function() {
//     'use strict';

//     angular
//         .module('app.bootstrapui')
//         .controller('PayPointController', PayPointController);

//     PayPointController.$inject = ['$scope','$rootScope', '$uibModal','PaypointService','$stateParams', '$state'];
//     function PayPointController($scope,$rootScope, $uibModal, PaypointService,$stateParams, $state) {
//         var vm = this;

//         activate();

//         ////////////////

//         function activate() {



// $scope.points=PaypointService.query();


//  $scope.updatePayPoint=function(id){
  
//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   PaypointService.update({id: id}, $scope.point);

// };

//    $scope.loadPoints = function () {
//         $scope.points=PaypointService.query();
//    }

//  $rootScope.$on("CallParentMethod", function(){
//            $scope.loadPoints();
//         });

//     // $scope.delete=function(id) {

//     //     PaypointService.remove({id: id});
//     //     $scope.loadPoints();

//     //       };
          

//   $scope.delete= function (point) {
// point.$remove().then(function () {
//   $scope.loadPoints();
// // $scope.plist.splice($scope.plist.indexOf(code), 1);
// });
// }


//           $scope.open = function (size) {

//             var modalInstance = $uibModal.open({
//               templateUrl: 'PayPointContent.html',
//               controller: ModalOpenInstanceCtrl,
//               size: size
//             });





//             var state = $('#modal-state');
//             modalInstance.result.then(function () {
//               state.text('Modal dismissed with OK status');
//             }, function () {
//               state.text('Modal dismissed with Cancel status');
//             });
//           };




//   $scope.show = function(point) {
//       // $scope.x = x;
//       var modalInstance = $uibModal.open({
//         templateUrl: 'PayPointEdit.html',
//         controller: ModalInstanceCtrl,
//         resolve: {
//            point: function () {
//              return point;
//            }
//          }        
//         // scope : $scope
//       });
//     };

    



 


//           // Please note that $uibModalInstance represents a modal window (instance) dependency.
//           // It is not the same as the $uibModal service used above.

//           ModalOpenInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService'];
//           function ModalOpenInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService) {
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }

//           ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService','point'];
//           function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService,point) {
//             $scope.point=point;
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }
//         }
//     }

// })();



// (function() {
//     'use strict';

//     angular
//         .module('app.maintenance')
//         .factory('bankcodeService',  function($resource) {
//                 // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
//      var data=$resource('http://localhost:56135/api/bankbranchcode/:id', {id: '@id'},
//     { 'get':    {method:'GET', isArray:false},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'update': { method:'PUT' },
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} 
// });
//      return data
//     });
// })();


(function() {
    'use strict';

    angular
        .module('app.maintenance')
        .factory('bankcodeService', bankcodeService);

    bankcodeService.$inject = ['$resource','jadaApiUrl'];
    function bankcodeService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/bankbranchcode/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('FormulasController', FormulasController);

    FormulasController.$inject = ['$scope','$http', '$rootScope','$uibModal','formulasService','$stateParams', '$state','jadaApiUrl'];
    function FormulasController($scope, $http,$rootScope, $uibModal, formulasService,$stateParams, $state,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

 $scope.formulas=formulasService.query();



  $scope.loadFormulas = function () {
   
$scope.formulas=formulasService.query();
   }

 $rootScope.$on("CallLoadFormulas", function(){
           $scope.loadFormulas ();
        });


        $scope.delete= function (formula) {
                  formula.$remove().then(function () {
                  $scope.loadFormulas ();
            });
            }



$http.get(jadaApiUrl+'api/payrollcode').success(function(data) {
               $scope.pcodes = data;
         

            });
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addFormulas.html',
              controller: ModalOpenFormulaInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





$scope.show = function(formula) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editFormulas.html',
        controller: ModalInstanceCtrl,
        resolve: {
           formula: function () {
             return formula;
           }
         }        
        // scope : $scope
      });
    };
    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenFormulaInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','formulasService'];
          function ModalOpenFormulaInstanceCtrl($scope, $rootScope,$uibModalInstance, formulasService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.formula=new formulasService();
             $scope.submitFormula=function() {
          $scope.formula.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
            $rootScope.$emit("CallLoadFormulas", {});

          },
           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };


              $scope.closeFormula=function() {
          $scope.formula.$save().then(function(){
            $rootScope.$emit("CallLoadFormulas", {});
            $scope.ok();

          },
            function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };
         
          }


             ModalInstanceCtrl.$inject = ['$scope', '$rootScope','$uibModalInstance','formulasService','formula'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, formulasService,formula) {
          $scope.formula=formula;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            
           $scope.updateFormula=function(furmula){
             furmula.$update().then(function(){
                   $rootScope.$emit("CallLoadFormulas", {});
            });
          
              };
         
          }
        }
    }

})();


// (function() {
//     'use strict';

//     angular
//         .module('app.maintenance')
//         .factory('formulasService',  function($resource) {
//                 // return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
//      var data=$resource('http://localhost:56135/api/formula/:id', {id: '@id'},
//     { 'get':    {method:'GET', isArray:false},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'update': { method:'PUT' },
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} 
// });
//      return data
//     });
// })();


(function() {
    'use strict';

    angular
        .module('app.maintenance')
        .factory('formulasService', formulasService);

    formulasService.$inject = ['$resource','jadaApiUrl'];
    function formulasService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/formula/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('GlmappingController', GlmappingController);

    GlmappingController.$inject = ['$scope', '$rootScope','$uibModal','bankcodeService','$stateParams', '$state'];
    function GlmappingController($scope,$rootScope, $uibModal, bankcodeService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.banks=bankcodeService.query();
  $scope.loadBanks = function () {
        $scope.banks=bankcodeService.query();
   }

 $rootScope.$on("CallLoadBanks", function(){
           $scope.loadBanks();
        });







  $scope.delete= function (bank) {
   bank.$remove().then(function () {
   $scope.loadBanks();

});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addbankcodes.html',
              controller: ModalOpenBankInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(bank) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editbankcodes.html',
        controller: ModalInstanceCtrl,
        resolve: {
           bank: function () {
             return bank;
           }
         }        
        // scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenBankInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService'];
          function ModalOpenBankInstanceCtrl($scope, $uibModalInstance, bankcodeService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.bank=new bankcodeService();
             $scope.submitBank=function() {
          $scope.bank.$save().then(function(){
               $rootScope.$emit("CallLoadBanks", {});
               $scope.ok();
          });
  
          };
         
          }


           ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','bankcodeService','bank'];
          function ModalInstanceCtrl($scope, $uibModalInstance, bankcodeService,bank) {
          $scope.bank=bank;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


            $scope.updateBank=function(bank){
  
            
            bank.$update().then(function(){
                   $rootScope.$emit("CallLoadBanks", {});
            });
          

            };

         
          }
        }
    }

})();





/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
// (function() {
//     'use strict';

//     angular
//         .module('app.bootstrapui')
//         .controller('PayPointController', PayPointController);

//     PayPointController.$inject = ['$scope','$rootScope', '$uibModal','PaypointService','$stateParams', '$state'];
//     function PayPointController($scope,$rootScope, $uibModal, PaypointService,$stateParams, $state) {
//         var vm = this;

//         activate();

//         ////////////////

//         function activate() {



// $scope.points=PaypointService.query();


//  $scope.updatePayPoint=function(id){
  
//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   PaypointService.update({id: id}, $scope.point);

// };

//    $scope.loadPoints = function () {
//         $scope.points=PaypointService.query();
//    }

//  $rootScope.$on("CallParentMethod", function(){
//            $scope.loadPoints();
//         });

//     // $scope.delete=function(id) {

//     //     PaypointService.remove({id: id});
//     //     $scope.loadPoints();

//     //       };
          

//   $scope.delete= function (point) {
// point.$remove().then(function () {
//   $scope.loadPoints();
// // $scope.plist.splice($scope.plist.indexOf(code), 1);
// });
// }


//           $scope.open = function (size) {

//             var modalInstance = $uibModal.open({
//               templateUrl: 'PayPointContent.html',
//               controller: ModalOpenInstanceCtrl,
//               size: size
//             });





//             var state = $('#modal-state');
//             modalInstance.result.then(function () {
//               state.text('Modal dismissed with OK status');
//             }, function () {
//               state.text('Modal dismissed with Cancel status');
//             });
//           };




//   $scope.show = function(point) {
//       // $scope.x = x;
//       var modalInstance = $uibModal.open({
//         templateUrl: 'PayPointEdit.html',
//         controller: ModalInstanceCtrl,
//         resolve: {
//            point: function () {
//              return point;
//            }
//          }        
//         // scope : $scope
//       });
//     };

    



 


//           // Please note that $uibModalInstance represents a modal window (instance) dependency.
//           // It is not the same as the $uibModal service used above.

//           ModalOpenInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService'];
//           function ModalOpenInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService) {
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }

//           ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PaypointService','point'];
//           function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PaypointService,point) {
//             $scope.point=point;
//             $scope.ok = function () {
//               $uibModalInstance.close('closed');
              
//             };

//             $scope.cancel = function () {
//               $uibModalInstance.dismiss('cancel');
//             };
//             $scope.ppoint=new PaypointService();
//              $scope.submitPayPoint=function() {
//          $scope.ppoint.$save();
//          // var data=[];
//          // data["id"]="";
//          // data["code"]=$scope.ppoint.code;
//          // data["description"]=$scope.ppoint.description;
//          // console.log(data);
//  $rootScope.$emit("CallParentMethod", {});
              
//           // console.log('Saving paypoint: ' +$scope.ppoint.code);
//          // $scope.points.push(data);
//           };
         
//           }
//         }
//     }

// })();




(function() {
    'use strict';

    angular
        .module('app.maintenance')
        .factory('formulasService', formulasService);

    formulasService.$inject = ['$resource','jadaApiUrl'];
    function formulasService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/formula/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('ModalGmapController', ModalGmapController);

    ModalGmapController.$inject = ['$uibModal'];
    function ModalGmapController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            //var modalInstance =
            $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });

            
          };



          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$timeout'];
          function ModalInstanceCtrl($scope, $uibModalInstance, $timeout) {

            $uibModalInstance.opened.then(function () {
              var position = new google.maps.LatLng(33.790807, -117.835734);

              $scope.mapOptionsModal = {
                zoom: 14,
                center: position,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              // we use timeout to wait maps to be ready before add a markers
              $timeout(function(){
                // 1. Add a marker at the position it was initialized
                new google.maps.Marker({
                  map: $scope.myMapModal,
                  position: position
                });
                // 2. Trigger a resize so the map is redrawed
                google.maps.event.trigger($scope.myMapModal, 'resize');
                // 3. Move to the center if it is misaligned
                $scope.myMapModal.panTo(position);
              });

            });

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

          }

        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];
    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var position = [
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.787453, -117.835858)
            ];
          
          vm.addMarker = addMarker;
          // we use timeout to wait maps to be ready before add a markers
          $timeout(function(){
            addMarker(vm.myMap1, position[0]);
            addMarker(vm.myMap2, position[1]);
            addMarker(vm.myMap3, position[2]);
            addMarker(vm.myMap5, position[3]);
          });

          vm.mapOptions1 = {
            zoom: 14,
            center: position[0],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          vm.mapOptions2 = {
            zoom: 19,
            center: position[1],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          vm.mapOptions3 = {
            zoom: 14,
            center: position[2],
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          vm.mapOptions4 = {
            zoom: 14,
            center: position[3],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          // for multiple markers
          $timeout(function(){
            addMarker(vm.myMap4, position[3]);
            addMarker(vm.myMap4, position[4]);
          });

          // custom map style
          var MapStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#bdd1f9'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];
          vm.mapOptions5 = {
            zoom: 14,
            center: position[3],
            styles: MapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          ///////////////
          
          function addMarker(map, position) {
            return new google.maps.Marker({
              map: map,
              position: position
            });
          }

        }
    }
})();

/**=========================================================
 * Module: vector-map.js.js
 * Init jQuery Vector Map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['VectorMap'];
    function vectorMap (VectorMap) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
              seriesData: '=',
              markersData: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
          
          var defaultColors = {
              markerColor:  '#23b7e5',      // the marker points
              bgColor:      'transparent',      // the background
              scaleColors:  ['#878c9a'],    // the color of the region in the serie
              regionFill:   '#bbbec6'       // the base region color
          };

          var mapHeight   = attrs.height || '300',
              options     = {
                markerColor:  attrs.markerColor  || defaultColors.markerColor,
                bgColor:      attrs.bgColor      || defaultColors.bgColor,
                scale:        attrs.scale        || 1,
                scaleColors:  attrs.scaleColors  || defaultColors.scaleColors,
                regionFill:   attrs.regionFill   || defaultColors.regionFill,
                mapName:      attrs.mapName      || 'world_mill_en'
              };
          
          element.css('height', mapHeight);
          
          VectorMap.init( element , options, scope.seriesData, scope.markersData);
        }
    }

})();

/**=========================================================
 * Module: vector-map.js
 * Services to initialize vector map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .service('VectorMap', VectorMap);

    function VectorMap() {
        this.init = init;

        ////////////////

        function init($element, opts, series, markers) {
          $element.vectorMap({
            map:             opts.mapName,
            backgroundColor: opts.bgColor,
            zoomMin:         1,
            zoomMax:         8,
            zoomOnScroll:    false,
            regionStyle: {
              initial: {
                'fill':           opts.regionFill,
                'fill-opacity':   1,
                'stroke':         'none',
                'stroke-width':   1.5,
                'stroke-opacity': 1
              },
              hover: {
                'fill-opacity': 0.8
              },
              selected: {
                fill: 'blue'
              },
              selectedHover: {
              }
            },
            focusOn:{ x:0.4, y:0.6, scale: opts.scale},
            markerStyle: {
              initial: {
                fill: opts.markerColor,
                stroke: opts.markerColor
              }
            },
            onRegionLabelShow: function(e, el, code) {
              if ( series && series[code] )
                el.html(el.html() + ': ' + series[code] + ' visitors');
            },
            markers: markers,
            series: {
                regions: [{
                    values: series,
                    scale: opts.scaleColors,
                    normalizeFunction: 'polynomial'
                }]
            },
          });
        }
    }
})();

/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    function VectorMapController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };
          
          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();

/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 
    
    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;
        
    }

    //
    // Contrller definition
    // 
    
    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {
      
      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');

          var isOpen = navbarForm.hasClass('open');

          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            // .val('') // Empty input
            ;
        }
    }
})();

/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];
    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

          vm.notifyMsg = 'Some messages here..';
          vm.notifyOpts = {
            status: 'danger',
            pos: 'bottom-center'
          };

          // Service usage example
          $timeout(function(){
            
            Notify.alert( 
                'This is a custom message from notify..', 
                {status: 'success'}
            );
          
          }, 500);
        }
    }
})();

/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];
    function notify ($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              options: '=',
              message: '='
            }
        };
        return directive;

        function link(scope, element) {

          element.on('click', function (e) {
            e.preventDefault();
            Notify.alert(scope.message, scope.options);
          });
        }

    }

})();


/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

(function() {
    'use strict';
    angular
        .module('app.notify')
        .service('Notify', Notify);

    Notify.$inject = ['$timeout'];
    function Notify($timeout) {

        this.alert = notifyAlert;

        ////////////////

        function notifyAlert(msg, opts) {
            if ( msg ) {
                $timeout(function(){
                    $.notify(msg, opts || {});
                });
            }
        }
    }

})();

/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */
(function($){
    'use strict';
    var containers = {},
        messages   = {},
        notify     =  function(options){
            if ($.type(options) === 'string') {
                options = { message: options };
            }
            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) === 'string' ? {status:arguments[1]} : arguments[1]);
            }
            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            var id;
            if(group) {
                for(id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(id in messages) { messages[id].close(instantly); }
            }
        };
    var Message = function(options){
        // var $this = this;
        this.options = $.extend({}, Message.defaults, options);
        this.uuid    = 'ID'+(new Date().getTime())+'RAND'+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'
        ].join('')).data('notifyMessage', this);
        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }
        this.group = this.options.group;
        messages[this.uuid] = this;
        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on('click', '.uk-notify-message', function(){
                $(this).data('notifyMessage').close();
            });
        }
    };
    $.extend(Message.prototype, {
        uuid: false,
        element: false,
        timout: false,
        currentstatus: '',
        group: false,
        show: function() {
            if (this.element.is(':visible')) return;
            var $this = this;
            containers[this.options.pos].show().prepend(this.element);
            var marginbottom = parseInt(this.element.css('margin-bottom'), 10);
            this.element.css({'opacity':0, 'margin-top': -1*this.element.outerHeight(), 'margin-bottom':0}).animate({'opacity':1, 'margin-top': 0, 'margin-bottom':marginbottom}, function(){
                if ($this.options.timeout) {
                    var closefn = function(){ $this.close(); };
                    $this.timeout = setTimeout(closefn, $this.options.timeout);
                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }
            });
            return this;
        },
        close: function(instantly) {
            var $this    = this,
                finalize = function(){
                    $this.element.remove();
                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }
                    delete messages[$this.uuid];
                };
            if(this.timeout) clearTimeout(this.timeout);
            if(instantly) {
                finalize();
            } else {
                this.element.animate({'opacity':0, 'margin-top': -1* this.element.outerHeight(), 'margin-bottom':0}, function(){
                    finalize();
                });
            }
        },
        content: function(html){
            var container = this.element.find('>div');
            if(!html) {
                return container.html();
            }
            container.html(html);
            return this;
        },
        status: function(status) {
            if(!status) {
                return this.currentstatus;
            }
            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);
            this.currentstatus = status;
            return this;
        }
    });
    Message.defaults = {
        message: '',
        status: 'normal',
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };
    
    $.notify          = notify;
    $.notify.message  = Message;
    $.notify.closeAll = closeAll;
    
    return notify;
}(jQuery));

// /**=========================================================
//  * Module: access-login.js
//  * Demo for login api
//  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$scope','$http', '$state','$localStorage','jadaApiUrl'];
    function LoginFormController($scope, $http, $state,$localStorage,jadaApiUrl) {
$scope.formlg={};


  
$scope.buttonText="Login";
// $scope.login=function(){
//   $scope.authMsg = '';
// $scope.buttonText="Logging in. . .";
// authService.login($scope.formlg.userName,  $scope.
// formlg.password).then(function(data, status){
   
// alert(data);

//    // if ( !response.token ) {
//    //             vm.authMsg = 'Incorrect credentials.';
//    //              }else{
//    //              $state.go('app.dashboard');
//    //              }
              

// },function(error,status){
//  $scope.authMsg = 'Server Request Error';
// }).finally(function(){
// $scope.buttonText="Login";
// });
// }


    // $scope.login = function () {
    //                         var env = {
    //                             username:$scope.formlg.username,
    //                             DBName:$scope.formlg.DBName, 
    //                             password:$scope.formlg.password
    //                         };

    //                         $http({
    //                             method: 'POST',
    //                             url: 'http://localhost:9418/jada/login',
    //                             data: env,
    //                             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //                             transformRequest: function(obj) {
    //                               var str = [];
    //                               for(var p in obj)
    //                               str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //                               return str.join("&");
    //                             }
    //                         }).
    //                         then(function (data, status, headers, config) {
    //                             $scope.postStatus = 'success: ' + data;
    //                         },
    //                         function (error, status, headers, config) {
    //                             $scope.postStatus = 'error: ' + status;
    //                         });
                            
    //                     }






       $scope.login = function() {
            $scope.authMsg = '';

            if($scope.loginForm.$valid) {

              $http
                .post(jadaApiUrl+'api/login', {username: $scope.formlg.userName, password:$scope.formlg.password}).success(function(data){
               $scope.buttonText="Logging in. . .";
                  var response=angular.fromJson(data.response);
                  var userAccount=angular.fromJson(data.userAccount);



                  // alert(response.Message);  
                  if(response.Status=="1"){
                     if (data.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = { username: userAccount.userName, token: data.token ,accountRights:data.accountRights};
                        
                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;

                        // execute callback with true to indicate successful login
                      
                    }                    
                    $state.go('app.dashboard')
                  }  
                  else{
                    $scope.authMsg = response.Message;           
                  }

                    
                })
                // .then(function(result) {
                
                //   // assumes if ok, response is an object with some data, if not, a string with error
                //   // customize according to your api
                //   if ( !result.formlg) {
                //    $scope.authMsg = 'Incorrect credentials.';
                //   }else{
                //     // $state.go('app.dashboard');
                //       vm.authMsg = 'hellow';
                //   }
                //      alert(result.token);
                // }, function() {
                //   vm.authMsg = 'Server Request Error';
                // });
            
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

         
        }
    }


})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$scope','$http', '$state', 'register'];
    function RegisterFormController($scope,$http, $state,register) {
      // $scope.message=register.query();
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.auth=false;
             vm.account= new register();
  //     $scope.submitCompany = function() {
  //       $scope.company.$save(function(){
  //           console.log($scope.company.Company_Name);});
  // }
          vm.register = function() {
            vm.authMsg = '';
               vm.error='';

            if(vm.registerForm.$valid) {
              vm.account.$save(function(data){

            var response=angular.fromJson(data);
            console.log(response.Message);
            vm.authMsg=response.Message;
            if(response.Status=="1"){
                    vm.authMsg =response.Message;
            }else{
              vm.auth=false;
               
                   vm.error=response.Message;
              // vm.auth=true;
            }
            ;});

              // $http
              //   .post('api/account/register', {email: vm.account.email, password: vm.account.password})
              //   .then(function(response) {
              //     // assumes if ok, response is an object with some data, if not, a string with error
              //     // customize according to your api
              //     if (!response.account ) {
              //       vm.authMsg = response;
              //     }else{
              //       $state.go('app.dashboard');
              //     }
              //   }, function() {
              //     vm.authMsg = 'Server Request Error';
              //   });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.password.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              // vm.registerForm.account_agreed.$dirty = true;
              
            }
          };
        }
    }
})();

// (function () {
//     'use strict';

//     angular
//         .module('app.pages')
//         .factory('AuthenticationService', Service);

//     function Service($http, $localStorage) {
//         var service = {};

//                          service.authMsg="";
//         service.Login = Login;
//         service.Logout = Logout;

//         return service;

//         function Login(username, password, callback) {
//             $http.post('http://localhost:56135/api/login', { username: username, password: password })
//                 .success(function (response) {

//                     // login successful if there's a token in the response
//                     if (response.token) {
//                         // store username and token in local storage to keep user logged in between page refreshes
//                         $localStorage.currentUser = { username: username, token: response.token, isAuthenticated:true };


//                         // add jwt token to auth header for all requests made by the $http service
//                         $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

//                         // execute callback with true to indicate successful login
//                         callback(true);
//                     } else {
//                         // execute callback with false to indicate failed login
//                         callback(false);

//                          service.authMsg = response;
                     
//                     }
//                 });
//         }

//         function Logout() {
//             // remove user from local storage and clear http auth header
//             delete $localStorage.currentUser;
//             $http.defaults.headers.common.Authorization = '';
//         }
//     }
// })();


//    // $http
//    //              .post('api/account/register', {email: vm.account.email, password: vm.account.password})
//    //              .then(function(response) {
//    //                // assumes if ok, response is an object with some data, if not, a string with error
//    //                // customize according to your api
//    //                if (!response.account ) {
//    //                  vm.authMsg = response;
//    //                }else{
//    //                  $state.go('app.dashboard');
//    //                }
//    //              }, function() {
//    //                vm.authMsg = 'Server Request Error';
//    //              });
// angular.module('app.pages').factory('authService',
// ['AUTH_ENDPOINT','LOGOUT_ENDPOINT','$http','$cookieStore',
// function(AUTH_ENDPOINT,LOGOUT_ENDPOINT,$http,$cookieStore){
// var auth={};

// auth.login=function(username, password){
// 	var env = {
//                                 username:username,
                                                    
//                                 password:password
//                             };
//                          return $http({
//                                 method: 'POST',
//                                 url: 'http://localhost:56135/api/login',
//                                 data: env,
//                                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                                 transformRequest: function(obj) {
//                                   var str = [];
//                                   for(var p in obj)
//                                   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//                                   return str.join("&");
//                                 }
//                             })
//                            .then(function(response,status){

//                             alert(response.token);
//                             // login successful if there's a token in the response
//                     if (response.token) {
//                         // store username and token in local storage to keep user logged in between page refreshes
//                         $localStorage.currentUser = { username: username, token: response.token };

//                         // add jwt token to auth header for all requests made by the $http service
//                         $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;


//                     }
//                     //      auth.user=response.data;
//                     // $cookieStore.put('user',auth.user);
//                     //    return auth.postStatus = 'success: ' + status;
//                       },
//                             function (error, status, headers, config) {
//                              return   auth.postStatus = 'error: ' + status;
//                             });
                            
//                         }

// // return $http.post(AUTH_ENDPOINT,{env},
// // {
// //     headers: {
// //       'Content-Type': 'application/x-www-form-urlencoded'
    
// //     }
// //   },{
// //   	   transformRequest: function(obj) {
// //                                   var str = [];
// //                                   for(var p in obj)
// //                                   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
// //                                   return str.join("&");
// //                                 }
// //   }).then(function(response,status){
// // auth.user=response.data;
// // $cookieStore.put('user',auth.user);
// // return auth.user;
// // });
// // }
// auth.logout=function(){
// return $http.post(LOGOUT_ENDPOINT).then(function(response){
// auth.user=undefined;
// $cookieStore.remove('user');
// });
// }
// return auth;
// }]);

// angular.module('app.pages').value('AUTH_ENDPOINT',
// 'http://localhost:56135/api/login');
// angular.module('app.pages').value('LOGOUT_ENDPOINT',
// 'http://spblogger-sitepointdemos.rhcloud.com/logout');
// // 'http://spblogger-sitepointdemos.rhcloud.com/login');
// (function () {
//     'use strict';

//     angular
//         .module('app.pages')
//         .controller('AuthLoginController', Controller);

//     function Controller($location, AuthenticationService) {
//         var vm = this;

//         vm.login = login;

//         initController();

//         function initController() {
//             // reset login status
//             AuthenticationService.Logout();
//         };

//         function login() {


//             vm.loading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (result,status) {
              
//                 if (result === true) {
//                     $location.path('/app/dashboard');
//                 } else {
//                       vm.loading = false;
             



//                        vm.error = 'Username or password is incorrect';

//                 }
//             });
//         };
//     }

// })();



// /**=========================================================
//  * Module: access-login.js
//  * Demo for login api
//  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LogoutController', LoginFormController);

    LoginFormController.$inject = ['$scope','$http', '$state','$localStorage','jadaApiUrl'];
    function LoginFormController($scope, $http, $state,$localStorage,jadaApiUrl) {


 $scope.Logout=function() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
                $state.go('page.login');
        }


    }


})();

// (function() {
//     'use strict';

//     angular
//         .module('app.pages')
//         .factory('register',  function($resource) {
        
//         return $resource('http://localhost:56135/api/systemsetup');
//         // return $resource('http://localhost:9418/jada/Management/CompanyRegistration/');
//         // http://localhost:9418/jada/Authentication/CompanyRegistration
//     });
// })();





(function() {
    'use strict';

    angular
        .module('app.pages')
        .factory('register', register);

    register.$inject = ['$resource','jadaApiUrl'];
    function register($resource,jadaApiUrl) {
    	  return $resource(jadaApiUrl+'api/systemsetup');
    
          
       
    }

})();
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ExemptionsController', ExemptionsController);

    ExemptionsController.$inject = ['$scope','$http','$rootScope', '$uibModal','ExemptionsService','$stateParams', '$state','jadaApiUrl'];
    function ExemptionsController($scope,$http,$rootScope, $uibModal, ExemptionsService,$stateParams, $state,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;


 $scope.exemptemployees=ExemptionsService.query();




 $scope.loadExemptemployees = function () {
     
 $scope.exemptemployees=ExemptionsService.query();
   }

 $rootScope.$on("CallExemptemployees", function(){
           $scope.loadExemptemployees();
        });


$http.get(jadaApiUrl+'api/payrollcode').success(function(data) {
               $scope.pcodes = data;
         

            });

    // $scope.pcodes = [];
    //       $scope.loadpcodes = function() {
    //         return $scope.pcodes.length ? null : $http.get('http://localhost:56135/api/payrollcode').success(function(data) {
    //           $scope.pcodes = data;
    //         });
    //       };

$http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
            });





  $scope.delete= function (employee) {
employee.$remove().then(function () {
 $scope.loadExemptemployees();
});
}

         $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addExempt.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(exemptEmployee) {

      var modalInstance = $uibModal.open({
        templateUrl: 'EditExempt.html',
        controller: ModalInstanceCtrl,
        resolve: {
           exemptEmployee: function () {
             return exemptEmployee;
           }
         }        

      });
    };



   
 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenInstanceCtrl.$inject = ['$scope','$http','$rootScope', '$uibModalInstance','ExemptionsService','jadaApiUrl'];
          function ModalOpenInstanceCtrl($scope, $http,$rootScope,$uibModalInstance, ExemptionsService,jadaApiUrl) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.exempt=new ExemptionsService();
             $scope.submitExempt=function() {
          $scope.exempt.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallExemptemployees", {});
          },
           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          

             $scope.CloseExempt=function() {
          $scope.exempt.$save().then(function(){
           
                $rootScope.$emit("CallExemptemployees", {});
                  $scope.ok();
          }, function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };



    // $scope.employees = [];
    //       $scope.loademployees = function() {
    //         return $scope.employees.length ? null : $http.get('http://localhost:56135/api/employee').success(function(data) {
    //           $scope.employees = data;
    //         });
    //       };




          }



          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$http','$uibModalInstance','ExemptionsService','exemptEmployee','jadaApiUrl'];
          function ModalInstanceCtrl($scope, $rootScope,$http,$uibModalInstance, ExemptionsService,exemptEmployee,jadaApiUrl) {
          $scope.employee=exemptEmployee;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          

            //  $scope.updateExempt=function(employee){
            //  employee.$update().then(function(){
            //        $rootScope.$emit("CallLoadPayrollGroups", {});
            // });
          
            //   };

            
                $scope.updateExempt=function(employee){
             employee.$update().then(function(){
                 $rootScope.$emit("CallExemptemployees", {});
            });
          
              };
            


         
          }
        }
    }

})();




(function() {
    'use strict';

    angular
        .module('app.payrollcodes')
        .factory('ExemptionsService', ExemptionsService);

    ExemptionsService.$inject = ['$resource','jadaApiUrl'];
    function ExemptionsService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/exemption/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();





(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PayrollCodesController', PayrollCodesController);

    PayrollCodesController.$inject =['$scope','$http','$rootScope', '$uibModal','PayrollCodesService','$stateParams', '$state','jadaApiUrl'];
    function PayrollCodesController($scope,$http,$rootScope, $uibModal, PayrollCodesService,$stateParams, $state,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

$scope.plist=PayrollCodesService.query();


//  $scope.updatePayPoint=function(id){
  
//   $scope.buttonText="Updating. . ."; //Once clicked change button text
//   PayrollCodesService.update({id: id}, $scope.point);

// };

  $scope.loadPlist = function () {
        $scope.plist=PayrollCodesService.query();
   }

 $rootScope.$on("CallloadPlist", function(){
           $scope.loadPlist();
        });
    // $scope.delete=function(id) {

    //     PaypointService.remove({id: id});
    //     $scope.loadPoints();

    //       };
          
          $http.get(jadaApiUrl+'api/payrollcodegroup').success(function(data) {
              $scope.pgroups = data;
            });

  $scope.delete= function (code) {
code.$remove().then(function () {
  $scope.loadPlist();
// $scope.plist.splice($scope.plist.indexOf(code), 1);
});
}


          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addPCodes.html',
              controller: ModalOpenInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(code) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EditPCodes.html',
        controller: ModalInstanceCtrl,
        resolve: {
           code: function () {
             return code;
           }
         }        
        // scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.
      

       ModalOpenInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PayrollCodesService'];
          function ModalOpenInstanceCtrl($scope,$rootScope, $uibModalInstance, PayrollCodesService) {
            
            
            $scope.ok = function () {
              $uibModalInstance.close('closed');
              
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
         $scope.payrollcodes=new PayrollCodesService();
             $scope.submitPayrollCode=function() {
          $scope.payrollcodes.$save().then(function(data){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
             $rootScope.$emit("CallloadPlist", {});
          },
          function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
          
        
          };

              $scope.submitPayrollCodeClose=function() {
          $scope.payrollcodes.$save().then(function(){
             $rootScope.$emit("CallloadPlist", {});
             $scope.ok();
          },function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
          
        
          };
              
          // console.log('Saving paypoint: ' +$scope.ppoint.code);
         // $scope.points.push(data);
          
         
          }
          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PayrollCodesService','code'];
          function ModalInstanceCtrl($scope,$rootScope, $uibModalInstance, PayrollCodesService,code) {
            
            $scope.code=code;
           

            $scope.ok = function () {
              $uibModalInstance.close('closed');
              
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
      $scope.updatepayrollcodes=function(code){
 code.$update().then(function(){
                   $rootScope.$emit("CallloadPlist", {});
            });

};

         
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.payrollcodes')
        .factory('PayrollCodesService', PayrollCodesService);

    PayrollCodesService.$inject = ['$resource','jadaApiUrl'];
    function PayrollCodesService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollcode/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();






/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PayrollGroupController', PayrollGroupController);

   PayrollGroupController.$inject = ['$scope','$rootScope', '$uibModal','PayrollGroupService','$stateParams', '$state'];
    function PayrollGroupController($scope, $rootScope,$uibModal, PayrollGroupService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
$scope.groups=PayrollGroupService.query();


 $scope.loadPayrollGroups = function () {
        $scope.groups=PayrollGroupService.query();
   }

 $rootScope.$on("CallLoadPayrollGroups", function(){
           $scope.loadPayrollGroups();
        });


  
  $scope.delete= function (group) {
group.$remove().then(function () {
   $scope.loadPayrollGroups();
});
}
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'AddPgroups.html',
              controller: ModalOpenGroupInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





 $scope.show = function(codegroup) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EditPgroups.html',
        controller: ModalInstanceCtrl,
        resolve: {
           codegroup: function () {
             return codegroup;
           }
         }        
        // scope : $scope
      });
    };





 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenGroupInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PayrollGroupService'];
          function ModalOpenGroupInstanceCtrl($scope, $rootScope,$uibModalInstance, PayrollGroupService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            


           $scope.pgroup=new PayrollGroupService();
             $scope.submitPayrollGroup=function() {
            
            $scope.pgroup.$save().then(function(data){
                 var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
                $rootScope.$emit("CallLoadPayrollGroups", {});
            },
            function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };

           $scope.ClosePayrollGroup=function() {
            
            $scope.pgroup.$save().then(function(){
                $rootScope.$emit("CallLoadPayrollGroups", {});
                $scope.ok();
            },
                function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
    
          };
         
         
          }



          ModalInstanceCtrl.$inject = ['$scope','$rootScope', '$uibModalInstance','PayrollGroupService','codegroup'];
          function ModalInstanceCtrl($scope, $rootScope,$uibModalInstance, PayrollGroupService,codegroup) {
          $scope.group=codegroup;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            

             $scope.updatePayrollGroup=function(group){
             group.$update().then(function(){
                   $rootScope.$emit("CallLoadPayrollGroups", {});
            });
          
              };


           
          }
        }
    }

})();







(function() {
    'use strict';

    angular
        .module('app.payrollcodes')
        .factory('PayrollGroupService', PayrollGroupService);

    PayrollGroupService.$inject = ['$resource','jadaApiUrl'];
    function PayrollGroupService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollcodegroup/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();







/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];
    function Controller ($scope, $element, $timeout, $localStorage) {
      var storageKeyName = 'panelState';

      // Prepare the panel to be collapsible
      var $elem   = $($element),
          parent  = $elem.closest('.panel'), // find the first parent panel
          panelId = parent.attr('id');

      // Load the saved state if exists
      var currentState = loadPanelState( panelId );
      if ( typeof currentState !== 'undefined') {
        $timeout(function(){
            $scope[panelId] = currentState; },
          10);
      }

      // bind events to switch icons
      $element.bind('click', function(e) {
        e.preventDefault();
        savePanelState( panelId, !$scope[panelId] );

      });
  
      // Controller helpers
      function savePanelState(id, state) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(!data) { data = {}; }
        data[id] = state;
        $localStorage[storageKeyName] = angular.toJson(data);
      }
      function loadPanelState(id) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(data) {
          return data[id];
        }
      }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss () {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];
    function Controller ($scope, $element, $q, Utils) {
      var removeEvent   = 'panel-remove',
          removedEvent  = 'panel-removed';

      $element.on('click', function (e) {
        e.preventDefault();

        // find the first parent panel
        var parent = $(this).closest('.panel');

        removeElement();

        function removeElement() {
          var deferred = $q.defer();
          var promise = deferred.promise;
          
          // Communicate event destroying panel
          $scope.$emit(removeEvent, parent.attr('id'), deferred);
          promise.then(destroyMiddleware);
        }

        // Run the animation before destroy the panel
        function destroyMiddleware() {
          if(Utils.support.animation) {
            parent.animo({animation: 'bounceOut'}, destroyPanel);
          }
          else destroyPanel();
        }

        function destroyPanel() {

          var col = parent.parent();
          parent.remove();
          // remove the parent if it is a row and is empty and not a sortable (portlet)
          col
            .filter(function() {
            var el = $(this);
            return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
          }).remove();

          // Communicate event destroyed panel
          $scope.$emit(removedEvent, parent.attr('id'));

        }

      });
    }
})();



/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];
    function Controller ($scope, $element) {
      var refreshEvent   = 'panel-refresh',
          whirlClass     = 'whirl',
          defaultSpinner = 'standard';

      // catch clicks to toggle panel refresh
      $element.on('click', function (e) {
        e.preventDefault();

        var $this   = $(this),
            panel   = $this.parents('.panel').eq(0),
            spinner = $this.data('spinner') || defaultSpinner
            ;

        // start showing the spinner
        panel.addClass(whirlClass + ' ' + spinner);

        // Emit event when refresh clicked
        $scope.$emit(refreshEvent, panel.attr('id'));

      });

      // listen to remove spinner
      $scope.$on('removeSpinner', removeSpinner);

      // method to clear the spinner when done
      function removeSpinner (ev, id) {
        if (!id) return;
        var newid = id.charAt(0) === '#' ? id : ('#'+id);
        angular
          .element(newid)
          .removeClass(whirlClass);
      }
    }
})();



/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels.
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];
    function paneltool ($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

          var templates = {
            /* jshint multistr: true */
            collapse:'<a href="#" panel-collapse="" uib-tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus ng-no-animation"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus ng-no-animation"></em> \
                      </a>',
            dismiss: '<a href="#" panel-dismiss="" uib-tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
            refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" uib-tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
          };

          var tools = scope.panelTools || attrs;

          $timeout(function() {
            element.html(getTemplate(element, tools )).show();
            $compile(element.contents())(scope);

            element.addClass('pull-right');
          });

          function getTemplate( elem, attrs ){
            var temp = '';
            attrs = attrs || {};
            if(attrs.toolCollapse)
              temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id')) );
            if(attrs.toolDismiss)
              temp += templates.dismiss;
            if(attrs.toolRefresh)
              temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
            return temp;
          }
        }// link
    }

})();

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];
    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

          // PANEL COLLAPSE EVENTS
          // ----------------------------------- 

          // We can use panel id name for the boolean flag to [un]collapse the panel
          $scope.$watch('panelDemo1',function(newVal){
              
              console.log('panelDemo1 collapsed: ' + newVal);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            var secs = 3;
            
            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });

          // PANELS VIA NG-REPEAT
          // ----------------------------------- 

          $scope.panels = [
            {
              id: 'panelRepeat1',
              title: 'Panel Title 1',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat2',
              title: 'Panel Title 2',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat3',
              title: 'Panel Title 3',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            }
          ];
        }

    } //PanelsCtrl

})();


(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('DraggablePanelController', DraggablePanelController);

    DraggablePanelController.$inject = ['$timeout', '$localStorage'];

    function DraggablePanelController($timeout, $localStorage) {
        var vm = this;
        var storageKeyName = 'portletState';

        activate();

        ////////////////

        function activate() {

            vm.panels = [
                [{
                    id: 'panelPortlet1',
                    type: 'default',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet2',
                    type: 'primary',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet3',
                    type: 'success',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet4',
                    type: 'info',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet5',
                    type: 'warning',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet6',
                    type: 'danger',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet7',
                    type: 'inverse',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet8',
                    type: 'purple',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet9',
                    type: 'green',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }]
            ];

            vm.panelList1 = vm.panels[0];
            vm.panelList2 = vm.panels[1];
            vm.panelList3 = vm.panels[2];

            // https://github.com/angular-ui/ui-sortable
            vm.sortablePortletOptions = {
                connectWith: '.portlet-connect',
                handle: '.panel-heading',
                opacity: 0.7,
                placeholder: 'portlet box-placeholder',
                cancel: '.portlet-cancel',
                forcePlaceholderSize: true,
                iframeFix: false,
                tolerance: 'pointer',
                helper: 'original',
                revert: 200,
                forceHelperSize: true,
                update: savePortletOrder,
                create: loadPortletOrder
            };

            function savePortletOrder(event) {
                $timeout(function() {
                    $localStorage[storageKeyName] = angular.toJson(vm.panels);
                });
            }

            function loadPortletOrder(event) {
                var data = angular.fromJson($localStorage[storageKeyName]);
                if (data) {
                    $timeout(function() {
                        vm.panels = data;
                        vm.panelList1 = vm.panels[0];
                        vm.panelList2 = vm.panels[1];
                        vm.panelList3 = vm.panels[2];
                    });
                }
            }

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('BankFilesController', BankFilesController);

    BankFilesController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function BankFilesController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanySumarryController', CompanySumarryController);

    CompanySumarryController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function CompanySumarryController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.get({periodId:1});
        console.log( $scope.companysumaries);

          

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('CompanySummaryService', CompanySummaryService);

    CompanySummaryService.$inject = ['$resource','jadaApiUrl'];
    function CompanySummaryService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/CompanySummary/:periodId', {periodId: '@periodId'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();

(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('CompanyTotalsController', CompanyTotalsController);

    CompanyTotalsController.$inject = ['$scope','$resource', 'CompanyTotalsService'];
    function CompanyTotalsController($scope,$resource,CompanyTotalsService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companytotals=CompanyTotalsService.query();

          
          $scope.greaterThan = function(prop, val){
    return function(item){
      return item[prop] > val;
    }
}

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('CompanyTotalsService', CompanyTotalsService);

    CompanyTotalsService.$inject = ['$resource','jadaApiUrl'];
    function CompanyTotalsService($resource,jadaApiUrl) {
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('EvolutionController', EvolutionController);

    EvolutionController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function EvolutionController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
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
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('HelbService', HelbService);

    HelbService.$inject = ['$resource','jadaApiUrl'];
    function HelbService($resource,jadaApiUrl) {
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
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


        $scope.nhifs=NhifService.query();

          

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('NhifService', NhifService);

    NhifService.$inject = ['$resource','jadaApiUrl'];
    function NhifService($resource,jadaApiUrl) {
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
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
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('NssfService', NssfService);

    NssfService.$inject = ['$resource','jadaApiUrl'];
    function NssfService($resource,jadaApiUrl) {
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PartnerJournalController', PartnerJournalController);

    PartnerJournalController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function PartnerJournalController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$http','$resource', 'PayslipService','jadaApiUrl'];
    function PayslipController($http,$resource,PayslipService,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        // vm.persons=PayslipService.get({id:1});
        // console.log(vm.persons);
var id=1;
          

$http.get(jadaApiUrl+'api/payslipreport/'+id).success(function(data) {
              vm.persons = data;
              console.log(vm.persons);

            });


        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .factory('PayslipService', PayslipService);

    PayslipService.$inject = ['$resource','jadaApiUrl'];
    function PayslipService($resource,jadaApiUrl) {
     var data=$resource('http://localhost:56135/api/payslipreport/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('app.reports')
        .controller('SchedulerController', SchedulerController);

    SchedulerController.$inject = ['$scope','$resource', 'CompanySummaryService'];
    function SchedulerController($scope,$resource,CompanySummaryService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        $scope.companysumaries=CompanySummaryService.query();

          

        }
    }
})();
/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
   

      
        .config(routesConfig);


    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app.dashboard', {
              url: '/dashboard',
              title: 'Dashboard',
              authenticate: true,
              templateUrl: helper.basepath('dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons'),

          })
          .state('app.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.basepath('dashboard_v2.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.dashboard_v3', {
              url: '/dashboard_v3',
              title: 'Dashboard v3',
              controller: 'DashboardV3Controller',
              controllerAs: 'dash3',
              templateUrl: helper.basepath('dashboard_v3.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'vector-map', 'vector-map-maps')
          })
          .state('app.widgets', {
              url: '/widgets',
              title: 'Widgets',
              templateUrl: helper.basepath('widgets.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.buttons', {
              url: '/buttons',
              title: 'Buttons',
              templateUrl: helper.basepath('buttons.html')
          })
          .state('app.colors', {
              url: '/colors',
              title: 'Colors',
              templateUrl: helper.basepath('colors.html')
          })
          .state('app.localization', {
              url: '/localization',
              title: 'Localization',
              templateUrl: helper.basepath('localization.html')
          })
          .state('app.infinite-scroll', {
              url: '/infinite-scroll',
              title: 'Infinite Scroll',
              templateUrl: helper.basepath('infinite-scroll.html'),
              resolve: helper.resolveFor('infinite-scroll')
          })
          .state('app.navtree', {
              url: '/navtree',
              title: 'Nav Tree',
              templateUrl: helper.basepath('nav-tree.html'),
              resolve: helper.resolveFor('angularBootstrapNavTree')
          })
          .state('app.nestable', {
              url: '/nestable',
              title: 'Nestable',
              templateUrl: helper.basepath('nestable.html'),
              resolve: helper.resolveFor('ng-nestable')
          })
          .state('app.sortable', {
              url: '/sortable',
              title: 'Sortable',
              templateUrl: helper.basepath('sortable.html'),
              resolve: helper.resolveFor('ui.sortable')
          })
          .state('app.notifications', {
              url: '/notifications',
              title: 'Notifications',
              templateUrl: helper.basepath('notifications.html')
          })
          .state('app.carousel', {
              url: '/carousel',
              title: 'Carousel',
              templateUrl: helper.basepath('carousel.html'),
              resolve: helper.resolveFor('angular-carousel')
          })
          .state('app.ngdialog', {
              url: '/ngdialog',
              title: 'ngDialog',
              templateUrl: helper.basepath('ngdialog.html'),
              resolve: angular.extend(helper.resolveFor('ngDialog'),{
                tpl: function() { return { path: helper.basepath('ngdialog-template.html') }; }
              }),
              controller: 'DialogIntroCtrl'
          })
          .state('app.sweetalert', {
            url: '/sweetalert',
            title: 'SweetAlert',
            templateUrl: helper.basepath('sweetalert.html'),
            resolve: helper.resolveFor('oitozero.ngSweetAlert')
          })
          .state('app.tour', {
            url: '/tour',
            title: 'Tour',
            templateUrl: helper.basepath('tour.html'),
            resolve: helper.resolveFor('bm.bsTour')
          })
          .state('app.interaction', {
              url: '/interaction',
              title: 'Interaction',
              templateUrl: helper.basepath('interaction.html')
          })
          .state('app.spinners', {
              url: '/spinners',
              title: 'Spinners',
              templateUrl: helper.basepath('spinners.html'),
              resolve: helper.resolveFor('loaders.css', 'spinkit')
          })
          .state('app.dropdown-animations', {
              url: '/dropdown-animations',
              title: 'Dropdown Animations',
              templateUrl: helper.basepath('dropdown-animations.html')
          })
          .state('app.panels', {
              url: '/panels',
              title: 'Panels',
              templateUrl: helper.basepath('panels.html')
          })
          .state('app.portlets', {
              url: '/portlets',
              title: 'Portlets',
              templateUrl: helper.basepath('portlets.html'),
              resolve: helper.resolveFor('ui.sortable')
          })
          .state('app.maps-google', {
              url: '/maps-google',
              title: 'Maps Google',
              templateUrl: helper.basepath('maps-google.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.maps-vector', {
              url: '/maps-vector',
              title: 'Maps Vector',
              templateUrl: helper.basepath('maps-vector.html'),
              controller: 'VectorMapController',
              controllerAs: 'vmap',
              resolve: helper.resolveFor('vector-map', 'vector-map-maps')
          })
          .state('app.grid', {
              url: '/grid',
              title: 'Grid',
              templateUrl: helper.basepath('grid.html')
          })
          .state('app.grid-masonry', {
              url: '/grid-masonry',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('grid-masonry.html')
          })
          .state('app.grid-masonry-deck', {
              url: '/grid-masonry-deck',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('grid-masonry-deck.html'),
              resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
          })
          .state('app.typo', {
              url: '/typo',
              title: 'Typo',
              templateUrl: helper.basepath('typo.html')
          })
          .state('app.icons-font', {
              url: '/icons-font',
              title: 'Icons Font',
              templateUrl: helper.basepath('icons-font.html'),
              resolve: helper.resolveFor('icons')
          })
          .state('app.icons-weather', {
              url: '/icons-weather',
              title: 'Icons Weather',
              templateUrl: helper.basepath('icons-weather.html'),
              resolve: helper.resolveFor('weather-icons', 'skycons')
          })
          .state('app.form-standard', {
              url: '/form-standard',
              title: 'Form Standard',
              templateUrl: helper.basepath('form-standard.html')
          })
          .state('app.form-extended', {
              url: '/form-extended',
              title: 'Form Extended',
              templateUrl: helper.basepath('form-extended.html'),
              resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput','inputmask','localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'summernote')
          })
          .state('app.form-validation', {
              url: '/form-validation',
              title: 'Form Validation',
              templateUrl: helper.basepath('form-validation.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          .state('app.form-wizard', {
              url: '/form-wizard',
              title: 'Form Wizard',
              templateUrl: helper.basepath('form-wizard.html')
          })
          .state('app.form-upload', {
              url: '/form-upload',
              title: 'Form upload',
              templateUrl: helper.basepath('form-upload.html'),
              resolve: helper.resolveFor('angularFileUpload', 'filestyle')
          })
          .state('app.form-xeditable', {
              url: '/form-xeditable',
              templateUrl: helper.basepath('form-xeditable.html'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.form-imagecrop', {
              url: '/form-imagecrop',
              templateUrl: helper.basepath('form-imagecrop.html'),
              resolve: helper.resolveFor('ngImgCrop', 'filestyle')
          })
          .state('app.form-uiselect', {
              url: '/form-uiselect',
              templateUrl: helper.basepath('form-uiselect.html'),
              controller: 'uiSelectController',
              controllerAs: 'uisel',
              resolve: helper.resolveFor('ui.select')
          })
          .state('app.chart-flot', {
              url: '/chart-flot',
              title: 'Chart Flot',
              templateUrl: helper.basepath('chart-flot.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.chart-radial', {
              url: '/chart-radial',
              title: 'Chart Radial',
              templateUrl: helper.basepath('chart-radial.html'),
              resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
          })
          .state('app.chart-js', {
              url: '/chart-js',
              title: 'Chart JS',
              templateUrl: helper.basepath('chart-js.html'),
              resolve: helper.resolveFor('chartjs')
          })
          .state('app.chart-rickshaw', {
              url: '/chart-rickshaw',
              title: 'Chart Rickshaw',
              templateUrl: helper.basepath('chart-rickshaw.html'),
              resolve: helper.resolveFor('angular-rickshaw')
          })
          .state('app.chart-morris', {
              url: '/chart-morris',
              title: 'Chart Morris',
              templateUrl: helper.basepath('chart-morris.html'),
              resolve: helper.resolveFor('morris')
          })
          .state('app.chart-chartist', {
              url: '/chart-chartist',
              title: 'Chart Chartist',
              templateUrl: helper.basepath('chart-chartist.html'),
              resolve: helper.resolveFor('angular-chartist')
          })
          .state('app.table-standard', {
              url: '/table-standard',
              title: 'Table Standard',
              templateUrl: helper.basepath('table-standard.html')
          })
          .state('app.table-extended', {
              url: '/table-extended',
              title: 'Table Extended',
              templateUrl: helper.basepath('table-extended.html')
          })
          .state('app.table-datatable', {
              url: '/table-datatable',
              title: 'Table Datatable',
              templateUrl: helper.basepath('table-datatable.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.table-xeditable', {
              url: '/table-xeditable',
              templateUrl: helper.basepath('table-xeditable.html'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.table-ngtable', {
              url: '/table-ngtable',
              templateUrl: helper.basepath('table-ngtable.html'),
              resolve: helper.resolveFor('ngTable', 'ngTableExport')
          })
          .state('app.table-uigrid', {
              url: '/table-uigrid',
              templateUrl: helper.basepath('table-uigrid.html'),
              resolve: helper.resolveFor('ui.grid')
          })
          .state('app.table-angulargrid', {
              url: '/table-angulargrid',
              templateUrl: helper.basepath('table-angulargrid.html'),
              resolve: helper.resolveFor('angularGrid')
          })
          .state('app.contacts', {
              url: '/contacts',
              title: 'Contacts',
              templateUrl: helper.basepath('contacts.html')
          })
          .state('app.contact-details', {
              url: '/contact-details',
              title: 'Contact Details',
              templateUrl: helper.basepath('contact-details.html')
          })
          .state('app.projects', {
              url: '/projects',
              title: 'Projects',
              templateUrl: helper.basepath('projects.html')
          })
          .state('app.project-details', {
              url: '/project-details',
              title: 'Project Details',
              templateUrl: helper.basepath('project-details.html')
          })
          .state('app.team-viewer', {
              url: '/team-viewer',
              title: 'Team Viewer',
              templateUrl: helper.basepath('team-viewer.html')
          })
          .state('app.social-board', {
              url: '/social-board',
              title: 'Social Board',
              templateUrl: helper.basepath('social-board.html')
          })
          .state('app.vote-links', {
              url: '/vote-links',
              title: 'Vote Links',
              templateUrl: helper.basepath('vote-links.html')
          })
          .state('app.bug-tracker', {
              url: '/bug-tracker',
              title: 'Bug Tracker',
              templateUrl: helper.basepath('bug-tracker.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.faq', {
              url: '/faq',
              title: 'FAQ',
              templateUrl: helper.basepath('faq.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.help-center', {
              url: '/help-center',
              title: 'Help Center',
              templateUrl: helper.basepath('help-center.html')
          })
          .state('app.followers', {
              url: '/followers',
              title: 'Followers',
              templateUrl: helper.basepath('followers.html')
          })
          .state('app.settings', {
              url: '/settings',
              title: 'Settings',
              templateUrl: helper.basepath('settings.html'),
              resolve: helper.resolveFor('filestyle')
          })
          .state('app.plans', {
              url: '/plans',
              title: 'Plans',
              templateUrl: helper.basepath('plans.html')
          })
          .state('app.file-manager', {
              url: '/file-manager',
              title: 'File Manager',
              templateUrl: helper.basepath('file-manager.html'),
              resolve: helper.resolveFor('filestyle')
          })
          .state('app.timeline', {
              url: '/timeline',
              title: 'Timeline',
              templateUrl: helper.basepath('timeline.html')
          })
          .state('app.calendar', {
              url: '/calendar',
              title: 'Calendar',
              templateUrl: helper.basepath('calendar.html'),
              resolve: helper.resolveFor('moment', 'ui.calendar')
          })
          .state('app.invoice', {
              url: '/invoice',
              title: 'Invoice',
              templateUrl: helper.basepath('invoice.html')
          })
          .state('app.search', {
              url: '/search',
              title: 'Search',
              templateUrl: helper.basepath('search.html'),
              resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
          })
          .state('app.todo', {
              url: '/todo',
              title: 'Todo List',
              templateUrl: helper.basepath('todo.html'),
              controller: 'TodoController',
              controllerAs: 'todo'
          })
          .state('app.profile', {
              url: '/profile',
              title: 'Profile',
              templateUrl: helper.basepath('profile.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.code-editor', {
              url: '/code-editor',
              templateUrl: helper.basepath('code-editor.html'),
              controller: 'CodeEditorController',
              controllerAs: 'coder',
              resolve: {
                  deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                  filetree: ['LoadTreeService', function (LoadTreeService) {
                      return LoadTreeService.get().$promise.then(function (res) {
                          return res.data;
                      });
                  }]
              }
          })
          .state('app.template', {
              url: '/template',
              title: 'Blank Template',
              templateUrl: helper.basepath('template.html')
          })
          .state('app.documentation', {
              url: '/documentation',
              title: 'Documentation',
              templateUrl: helper.basepath('documentation.html'),
              resolve: helper.resolveFor('flatdoc')
          })
          // Forum
          // -----------------------------------
          .state('app.forum', {
              url: '/forum',
              title: 'Forum',
              templateUrl: helper.basepath('forum.html')
          })
          .state('app.forum-topics', {
              url: '/forum/topics/:catid',
              title: 'Forum Topics',
              templateUrl: helper.basepath('forum-topics.html')
          })
          .state('app.forum-discussion', {
              url: '/forum/discussion/:topid',
              title: 'Forum Discussion',
              templateUrl: helper.basepath('forum-discussion.html')
          })
          // Blog
          // -----------------------------------
          .state('app.blog', {
              url: '/blog',
              title: 'Blog',
              templateUrl: helper.basepath('blog.html'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.blog-post', {
              url: '/post',
              title: 'Post',
              templateUrl: helper.basepath('blog-post.html'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.articles', {
              url: '/articles',
              title: 'Articles',
              templateUrl: helper.basepath('blog-articles.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.article-view', {
              url: '/article/:id',
              title: 'Article View',
              templateUrl: helper.basepath('blog-article-view.html'),
              resolve: helper.resolveFor('ui.select', 'summernote')
          })
          // eCommerce
          // -----------------------------------
          .state('app.orders', {
              url: '/orders',
              title: 'Orders',
              templateUrl: helper.basepath('ecommerce-orders.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.order-view', {
              url: '/order-view',
              title: 'Order View',
              templateUrl: helper.basepath('ecommerce-order-view.html')
          })
          .state('app.products', {
              url: '/products',
              title: 'Products',
              templateUrl: helper.basepath('ecommerce-products.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.product-view', {
              url: '/product/:id',
              title: 'Product View',
              templateUrl: helper.basepath('ecommerce-product-view.html')
          })
          .state('app.checkout', {
              url: '/checkout',
              title: 'Checkout',
              templateUrl: helper.basepath('ecommerce-checkout.html')
          })
          // Mailbox
          // -----------------------------------
          .state('app.mailbox', {
              url: '/mailbox',
              title: 'Mailbox',
              abstract: true,
              templateUrl: helper.basepath('mailbox.html')
          })
          .state('app.mailbox.folder', {
              url: '/folder/:folder',
              title: 'Mailbox',
              templateUrl: helper.basepath('mailbox-inbox.html')
          })
          .state('app.mailbox.view', {
              url : '/{mid:[0-9]{1,4}}',
              title: 'View mail',
              templateUrl: helper.basepath('mailbox-view.html'),
              resolve: helper.resolveFor('ngWig')
          })
          .state('app.mailbox.compose', {
              url: '/compose',
              title: 'Mailbox',
              templateUrl: helper.basepath('mailbox-compose.html'),
              resolve: helper.resolveFor('ngWig')
          })
          //
          // Multiple level example
          // -----------------------------------
          .state('app.multilevel', {
              url: '/multilevel',
              title: 'Multilevel',
              template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1', {
              url: '/level1',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.item', {
              url: '/item',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p"> Menu item @ Level 1</div>'
          })
          .state('app.multilevel.level1.level2', {
              url: '/level2',
              title: 'Multilevel - Level2',
              template: '<div class="lead ba p">View @ Level 2'  + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3', {
              url: '/level3',
              title: 'Multilevel - Level3',
              template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3.item', {
              url: '/item',
              title: 'Multilevel - Level3 Item',
              template: '<div class="lead ba p"> Menu item @ Level 3</div>'
          })
          //
          // Single Page Routes
          // -----------------------------------
          .state('page', {
              url: '/page',
              templateUrl: 'app/pages/page.html',
              resolve: helper.resolveFor('modernizr', 'icons'),
              controller: ['$rootScope', function($rootScope) {
                  $rootScope.app.layout.isBoxed = false;
              }]
          })
          .state('page.login', {
              url: '/login',
              title: 'Login',
              templateUrl: 'app/pages/login.html'
          })
          .state('page.register', {
              url: '/register',
              title: 'Register',
              templateUrl: 'app/pages/register.html'
          })

           .state('page.registerwizard', {
              url: '/registration',
              title: 'Register',
              templateUrl: 'app/pages/registerwizard.html'
          })
          .state('page.recover', {
              url: '/recover',
              title: 'Recover',
              templateUrl: 'app/pages/recover.html'
          })
          .state('page.lock', {
              url: '/lock',
              title: 'Lock',
              templateUrl: 'app/pages/lock.html'
          })
          .state('page.404', {
              url: '/404',
              title: 'Not Found',
              templateUrl: 'app/pages/404.html'
          })
          .state('page.500', {
              url: '/500',
              title: 'Server error',
              templateUrl: 'app/pages/500.html'
          })
          .state('page.maintenance', {
              url: '/maintenance',
              title: 'Maintenance',
              templateUrl: 'app/pages/maintenance.html'
          })

          //
          // Horizontal layout
          // -----------------------------------
          .state('app-h', {
              url: '/app-h',
              abstract: true,
              templateUrl: helper.basepath( 'app-h.html' ),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-h.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.basepath('dashboard_v2.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })


           .state('app.payroll-details', {
              url: '/payroll-details',
              title: 'payroll-details',
              templateUrl: helper.basepath('company-payroll-details.html')
          })

             .state('app.leave-setup', {
              url: '/leavesetup',
              title: 'payroll-details',
              templateUrl: helper.basepath('leave-setup.html')
          })

              .state('app.Leave-transaction', {
              url: '/Leave-transaction',
              title: 'Leave-transaction',
                templateUrl: helper.basepath('Leave-transaction.html'),
                 resolve: helper.resolveFor('datatables')
             
          })
            .state('app.gl-mapping', {
              url: '/glMapping',
              title: 'gl mapping',
              templateUrl: helper.basepath('gl-mapping.html'),
               resolve: helper.resolveFor('xeditable')
          })

              .state('app.company-maintenance', {
              url: '/company-maintenance',
              title: 'company-maintenance',
              templateUrl: helper.basepath('company-maintenance.html')
          })


           .state('app.formula-setup', {
              url: '/formula-setup',
              title: 'formula-setup',
              templateUrl: helper.basepath('formula-setup.html'),
                resolve: helper.resolveFor('datatables')
          })
            .state('app.employee-setup', {
              url: '/employee details',
              title: 'employee details',
              templateUrl: helper.basepath('employee-setup.html')
          })


           .state('app.payroll-codes', {
              url: '/payroll-codes',
              title: 'payroll-codes',
              templateUrl: helper.basepath('payroll-codes.html'),
               resolve: helper.resolveFor('datatables')
          })

           .state('app.payroll-groups', {
              url: '/payrollgroups',
              title: 'payroll-codes',
              templateUrl: helper.basepath('payroll-groups.html'),
              resolve: helper.resolveFor('datatables')
          })


            .state('app.exemptions', {
              url: '/exemptions',
              title: 'exemptions',
              templateUrl: helper.basepath('exemptions.html'),
                resolve: helper.resolveFor('datatables')
          })



           .state('app.bankcodes', {
              url: '/bankcodes',
              title: 'bank codes',
              templateUrl: helper.basepath('bank-codes.html'),
                resolve: helper.resolveFor('datatables')
          })

           .state('app.payroll-process', {
              url: '/payroll_process',
              title: 'payroll process',
              templateUrl: helper.basepath('processpayroll.html'),
               resolve: helper.resolveFor('xeditable')
          })
           .state('app.process', {
              url: '/processing',
              title: 'payroll process',
              templateUrl: helper.basepath('payrollprocessing.html'),
              resolve: helper.resolveFor('xeditable')
          })

               .state('app.run', {
              url: '/run-payroll',
              title: 'payroll processing',
              templateUrl: helper.basepath('run.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.payroll-preview', {
              url: '/payroll-preview',
              title: 'preview payroll',
              templateUrl: helper.basepath('payroll-preview.html')
            
          })
          .state('app.payroll-approve', {
              url: '/payroll-approval',
              title: 'approve payroll',
              templateUrl: helper.basepath('payroll-approve.html')
            
          })


             .state('app.leaveposting', {
              url: '/leaveposting',
              title: 'Leave Posting',
              templateUrl: helper.basepath('leaveposting.html')
          })

             .state('app.endmonth', {
              url: '/endmonth',
              title: 'Close Month',
              templateUrl: helper.basepath('endmonth.html')
          })


          .state('app.employee-payroll', {
              url: '/employee setup',
              title: 'employee setup',
              templateUrl: helper.basepath('employee-payroll.html')
          })

       
            .state('app.company', {
              url: '/company',
              title: 'Company Details',
                templateUrl: helper.basepath('company.html')
             
          })


            .state('app.financialperiods', {
              url: '/financialperiods',
              title: 'Financial Periods',
                templateUrl: helper.basepath('financialperiods.html')
             
          })


            .state('app.companysummary', {
              url: '/company summary',
              title: 'companysummary',
                templateUrl: helper.basepath('company-summary.html')
             
          })

            .state('app.ctotals-review', {
              url: '/company-totals-review',
              title: 'Company totals',
                templateUrl: helper.basepath('ctotals-review.html')
             
          })

            .state('app.companytotals', {
              url: '/company totals',
              title: 'company totals',
                templateUrl: helper.basepath('company-totals.html'),
                resolve: helper.resolveFor('datatables')
             
          })

             .state('app.csummary-review', {
              url: '/company summary review',
              title: 'company totals',
                templateUrl: helper.basepath('csummary-review.html')
                
             
          })


            .state('app.paye', {
              url: '/paye',
              title: 'PAYE  Report',
                templateUrl: helper.basepath('paye.html')
             
          })

             .state('app.nhif', {
              url: '/nhif  reports',
              title: 'NHIF byproduct',
                templateUrl: helper.basepath('nhif.html')
             
          })



       

         .state('app.nssf', {
              url: '/nssf reports',
              title: 'NSSF schedule',
                templateUrl: helper.basepath('nssfschedule.html')
             
          })


         .state('app.helb', {
              url: '/helb  schedule',
              title: 'HELB schedule',
                templateUrl: helper.basepath('helb-schedule.html')
             
          })

          .state('app.scheduler', {
              url: '/schedules',
              title: 'schedules',
                templateUrl: helper.basepath('scheduler.html')
               
                
             
          })
          .state('app.bankfiles', {
              url: '/bankfiles',
              title: 'schedules',
                templateUrl: helper.basepath('bankfiles.html')

             
          })

           .state('app.payroll-journals', {
              url: '/payroll-journals',
              title: 'payroll journals',
                templateUrl: helper.basepath('payroll-journals.html')
             
          })


         .state('app.bulktrans_input', {
              url: '/bulktransactions',
              title: 'Bulk transaction item input',
                templateUrl: helper.basepath('bulk-input.html'),
                    resolve: helper.resolveFor('angularFileUpload', 'filestyle')
             
          })

           .state('app.payslip', {
              url: '/payslip',
              title: 'payslip',
                templateUrl: helper.basepath('payslip.html'),
                 resolve: helper.resolveFor('datatables')
             
          })

         .state('app.listings', {
              url: '/listings',
              title: 'list',
                templateUrl: helper.basepath('employeelist.html'),
                 resolve: helper.resolveFor('datatables')
             
          })

          .state('app.employee-groups', {
              url: '/Employee-groups',
              title: 'list',
                templateUrl: helper.basepath('employee-groups.html'),
                 resolve: helper.resolveFor('datatables')
             
          })
        .state('app.employee-category', {
              url: '/employee-category',
              title: 'employee-category',
                templateUrl: helper.basepath('employee-category.html'),
                 resolve: helper.resolveFor('datatables')
             
          })


          .state('app.batchemployees', {
              url: '/batchemployees',
              title: 'list',
                templateUrl: helper.basepath('batch-employees.html')
                 
             
          })
         .state('app.Payfrequency', {
              url: '/Payfrequency',
              title: 'Payfrequency',
                templateUrl: helper.basepath('payrollcodes-listings.html')
           
             
          })
       .state('app.departmentlistings', {
              url: '/departmentlistings',
              title: 'Departments',
                templateUrl: helper.basepath('departmentlisting.html'),
                resolve: helper.resolveFor('datatables')
             
          })


         .state('app.costcenters', {
              url: '/costcenters',
              title: 'cost centers',
                templateUrl: helper.basepath('costcenters.html'),
                 resolve: helper.resolveFor('datatables')
             
          })

         .state('app.paypointslistings', {
              url: '/paypointslistings',
              title: 'pay points',
                templateUrl: helper.basepath('paypoints.html'),
                resolve: helper.resolveFor('datatables')
             
          })

          .state('app.employeeinfo', {
              url: '/employee/:Employee',
              title: 'Employee details',
                templateUrl: helper.basepath('employee-info.html')
                 
             
          })

            .state('app.employee-edit', {
              url: '/employee/Update/:EmployeeId',
              title: 'Update Employee',
                templateUrl: helper.basepath('employee-update.html')

                 
             
          })


           .state('app.companyedit', {
              url: '/company:id',
              title: 'user details',
                templateUrl: helper.basepath('companyedit.html')
                 
             
          })
          //Annual Reports
 .state('app.p9a', {
              url: '/p9a',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p9a.html'),
                 
             
          })

 .state('app.p9b', {
              url: '/p9b',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p9b.html'),
                 
             
          })


 .state('app.p10', {
              url: '/p10',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p10.html'),
                 
             
          })
.state('app.p10a', {
              url: '/p10a',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p10a.html'),
                 
             
          })
  .state('app.p10b', {
              url: '/p10b',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p10b.html'),
                 
             
          })

 .state('app.p10c', {
              url: '/p10c',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p10c.html'),
                 
             
          })
 .state('app.p10d', {
              url: '/p10d',
              title: 'tax deduction card',
                templateUrl: helper.basepath('p10d.html'),
                 
             
          })

//User Adminisration
 .state('app.user_settings', {
              url: '/adminsettings',
              title: 'user settings',
                templateUrl: helper.basepath('user-settings.html'),
                    resolve: helper.resolveFor('datatables'),
                 
             
          })

 .state('app.task', {
              url: '/tasks',
              title: 'tasks',
                templateUrl: helper.basepath('task.html'),
                 
             
          })
.state('app.workflow', {
              url: '/workflow/:Id',
              title: 'workflow',
                templateUrl: helper.basepath('workflow.html'),
                 
             
          })

.state('app.payrollworkflow', {
              url: '/payrollworkflow',
              title: 'workflow',
                templateUrl: helper.basepath('payroll-workflow.html'),
                 
             
          })

 //Staff Portal 

 .state('app.leave', {
              url: '/leaves',
              title: 'leaves',
                templateUrl: helper.basepath('leave.html'),
                 
             
          })
 .state('app.timesheets', {
              url: '/timesheets',
              title: 'Timesheets',
                templateUrl: helper.basepath('timesheets.html'),
                 
             
          })
  .state('app.claims', {
              url: '/claims',
              title: 'Claims',
                templateUrl: helper.basepath('claims.html'),
                 
             
          })
  .state('app.mileage', {
              url: '/mileage',
              title: 'Mileage',
                templateUrl: helper.basepath('mileage.html'),
                 
             
          })




          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();


/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader,  Utils) {

        activate();

        ////////////////

        function activate() {
          var collapseList = [];

          // demo: when switch from collapse to hover, close all items
          var watchOff1 = $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
            if ( newVal === false && oldVal === true) {
              closeAllBut(-1);
            }
          });


          // Load menu from json file
          // -----------------------------------

          SidebarLoader.getMenu(sidebarReady);

          function sidebarReady(items) {
            $scope.menuItems = items;
          }

          // Handle sidebar and collapse items
          // ----------------------------------

          $scope.getMenuItemPropClasses = function(item) {
            return (item.heading ? 'nav-heading' : '') +
                   (isActive(item) ? ' active' : '') ;
          };

          $scope.addCollapse = function($index, item) {
            collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
          };

          $scope.isCollapse = function($index) {
            return (collapseList[$index]);
          };

          $scope.toggleCollapse = function($index, isParentItem) {

            // collapsed sidebar doesn't toggle drodopwn
            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

            // make sure the item index exists
            if( angular.isDefined( collapseList[$index] ) ) {
              if ( ! $scope.lastEventFromChild ) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
              }
            }
            else if ( isParentItem ) {
              closeAllBut(-1);
            }

            $scope.lastEventFromChild = isChild($index);

            return true;

          };

          // Controller helpers
          // -----------------------------------

            // Check item and children active state
            function isActive(item) {

              if(!item) return;

              if( !item.sref || item.sref === '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function(value) {
                  if(isActive(value)) foundActive = true;
                });
                return foundActive;
              }
              else
                return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
              index += '';
              for(var i in collapseList) {
                if(index < 0 || index.indexOf(i) < 0)
                  collapseList[i] = true;
              }
            }

            function isChild($index) {
              /*jshint -W018*/
              return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }

            $scope.$on('$destroy', function() {
                watchOff1();
            });

        } // activate
    }

})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function sidebar ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

          var currentState = $rootScope.$state.current.name;
          var $sidebar = element;

          var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
          var subNav = $();

          $sidebar.on( eventName, '.nav > li', function() {

            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

              subNav.trigger('mouseleave');
              subNav = toggleMenuItem( $(this), $sidebar);

              // Used to detect click and touch events outside the sidebar
              sidebarAddBackdrop();

            }

          });

          var eventOff1 = scope.$on('closeSidebarMenu', function() {
            removeFloatingNav();
          });

          // Normalize state when resize to mobile
          $win.on('resize.sidebar', function() {
            if( ! Utils.isMobile() )
          	asideToggleOff();
          });

          // Adjustment on route changes
          var eventOff2 = $rootScope.$on('$stateChangeStart', function(event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
          });

      	  // Autoclose when click outside the sidebar
          if ( angular.isDefined(attrs.sidebarAnyclickClose) ) {

            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';

            var watchOff1 = $rootScope.$watch('app.asideToggled', watchExternalClicks);

          }

          //////

          function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if ( newVal === true ) {
              $timeout(function(){ // render after current digest cycle
                wrapper.on(sbclickEvent, function(e){
                  // if not child of sidebar
                  if( ! $(e.target).parents('.aside').length ) {
                    asideToggleOff();
                  }
                });
              });
            }
            else {
              // dettach event
              wrapper.off(sbclickEvent);
            }
          }

          function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            if(!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
      	  }

          scope.$on('$destroy', function() {
            // detach scope events
            eventOff1();
            eventOff2();
            watchOff1();
            // detach dom events
            $sidebar.off(eventName);
            $win.off('resize.sidebar');
            wrapper.off(sbclickEvent);
          });

        }

        ///////

        function sidebarAddBackdrop() {
          var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
          $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
          });
        }

        // Open the collapse sidebar submenu items when on touch devices
        // - desktop only opens on hover
        function toggleTouchItem($element){
          $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // -----------------------------------
        function toggleMenuItem($listItem, $sidebar) {

          removeFloatingNav();

          var ul = $listItem.children('ul');

          if( !ul.length ) return $();
          if( $listItem.hasClass('open') ) {
            toggleTouchItem($listItem);
            return $();
          }

          var $aside = $('.aside');
          var $asideInner = $('.aside-inner'); // for top offset calculation
          // float aside uses extra padding on aside
          var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
          var subNav = ul.clone().appendTo( $aside );

          toggleTouchItem($listItem);

          var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
          var vwHeight = $win.height();

          subNav
            .addClass('nav-floating')
            .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top:      itemTop,
              bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

          subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
          });

          return subNav;
        }

        function removeFloatingNav() {
          $('.dropdown-backdrop').remove();
          $('.sidebar-subnav.nav-floating').remove();
          $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http'];
    function SidebarLoader($http) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          var menuJson = 'server/sidebar-menu.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Failure loading menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$scope'];
    function UserBlockController($scope) {

        activate();

        ////////////////

        function activate() {

          $scope.userBlockVisible = true;

          var detach = $scope.$on('toggleUserBlock', function(/*event, args*/) {

            $scope.userBlockVisible = ! $scope.userBlockVisible;

          });

          $scope.$on('$destroy', detach);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){


      // User Settings
      // -----------------------------------
      $rootScope.user = {
        name:     'John',
        job:      'ng-developer',
        picture:  'app/img/user/02.jpg'
      };

      // Hides/show user avatar on sidebar from any element
      $rootScope.toggleUserBlock = function(){
        $rootScope.$broadcast('toggleUserBlock');
      };

      // Global Settings
      // -----------------------------------
      $rootScope.app = {
        name: 'Jada',
        description: 'Jada Payroll',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: false,
          isFloat: false,
          asideHover: false,
          theme: null,
          asideScrollbar: false,
          isCollapsedText: false
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings
      if( angular.isDefined($localStorage.layout) )
        $rootScope.app.layout = $localStorage.layout;
      else
        $localStorage.layout = $rootScope.app.layout;

      $rootScope.$watch('app.layout', function () {
        $localStorage.layout = $rootScope.app.layout;
      }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }
       function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }

})();

/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$scope', '$http', '$window', '$timeout'];

    function AngularGridController($scope, $http, $window, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var resizeEvent = 'resize.ag-grid';
            var $win = $($window); // cache reference for resize

            // Basic
            var columnDefs = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100
            }];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150,
                filter: 'set',
                filterParams: {
                    cellHeight: 20,
                    values: irishAthletes
                }
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90,
                filter: 'number'
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100,
                filter: 'number'
            }];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }

            };

            // Pinning Example

            // https://www.ag-grid.com/javascript-grid-pinning/index.php
            var columnDefsPinned = angular.copy(columnDefs);
            columnDefsPinned[0].pinned = 'left';

            vm.gridOptions2 = {
                columnDefs: columnDefsPinned,
                rowData: null,
                pinnedColumnCount: 2,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res) {
                    // basic
                    vm.gridOptions.api.setRowData(res.data);
                    vm.gridOptions.api.sizeColumnsToFit();
                    // filter
                    vm.gridOptions1.api.setRowData(res.data);
                    vm.gridOptions1.api.sizeColumnsToFit();

                    // pinning
                    vm.gridOptions2.api.setRowData(res.data);
                    vm.gridOptions2.api.sizeColumnsToFit();
                });

            // turn off event
            $scope.$on('$destroy', function(){
                $win.off(resizeEvent);
            })

        }
    }
})();
/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datatable.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });


          vm.earnings = [{
              'Name': 'Salary',
              'Amount': 200000
             
            }, {
              'Name': 'Gross Pay',
              'Amount': 275000
             
            }
           
          ];

           vm.deductions = [{
              'Name': 'PAYE',
              'Amount': 123341
            
            }, {
              'Name': 'NSSF',
              'Amount': 8000
              
            }, {
              'Name': 'NHIF',
              'Amount': 3400
          
            }, {
              'Name': 'HELB',
              'Amount': 5000
             
            },
             {
              'Name': 'pension',
              'Amount': 20000
             
            },
             {
              'Name': 'sacco',
              'Amount': 7000
             
            },
             {
              'Name': 'insurance',
              'Amount': 3000
             
            },
             {
              'Name': 'Net Pay',
              'Amount': 122859
             
            }
          ];

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          vm.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                {extend: 'copy',  className: 'btn-sm' },
                {extend: 'csv',   className: 'btn-sm' },
                {extend: 'excel', className: 'btn-sm', title: 'XLS-File'},
                {extend: 'pdf',   className: 'btn-sm', title: $('title').text() },
                {extend: 'print', className: 'btn-sm' }
            ]);

          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
          // if no cache, request data and filter
          if ( ! self.cache ) {
            if ( api ) {
              api.get(function(data){
                self.cache = data;
                filterdata($defer, params);
              });
            }
          }
          else {
            filterdata($defer, params);
          }
          
          function filterdata($defer, params) {
            var from = (params.page() - 1) * params.count();
            var to = params.page() * params.count();
            var filteredData = self.cache.result.slice(from, to);

            params.total(self.cache.total);
            $defer.resolve(filteredData);
          }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];
    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
          var data = [
              {name: 'Moroni',  age: 50, money: -10   },
              {name: 'Tiancum', age: 43, money: 120   },
              {name: 'Jacob',   age: 27, money: 5.5   },
              {name: 'Nephi',   age: 29, money: -54   },
              {name: 'Enos',    age: 34, money: 110   },
              {name: 'Tiancum', age: 43, money: 1000  },
              {name: 'Jacob',   age: 27, money: -201  },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -52.5 },
              {name: 'Tiancum', age: 43, money: 52.1  },
              {name: 'Jacob',   age: 27, money: 110   },
              {name: 'Nephi',   age: 29, money: -55   },
              {name: 'Enos',    age: 34, money: 551   },
              {name: 'Tiancum', age: 43, money: -1410 },
              {name: 'Jacob',   age: 27, money: 410   },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -100  }
          ];

          // SELECT ROWS
          // ----------------------------------- 

          vm.data = data;

          vm.tableParams3 = new ngTableParams({
              page: 1,            // show first page
              count: 10          // count per page
          }, {
              total: data.length, // length of data
              getData: function ($defer, params) {
                  // use build-in angular filter
                  var filteredData = params.filter() ?
                          $filter('filter')(data, params.filter()) :
                          data;
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(filteredData, params.orderBy()) :
                          data;

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          vm.changeSelection = function(user) {
            console.info(user);
          };

          // EXPORT CSV
          // -----------------------------------  

          var data4 = [{name: 'Moroni', age: 50},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34}];

          vm.tableParams4 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: data4.length, // length of data4
              getData: function($defer, params) {
                  $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });


          // SORTING
          // ----------------------------------- 



          vm.tableParams = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              sorting: {
                  name: 'asc'     // initial sorting
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(data, params.orderBy()) :
                          data;
          
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          // FILTERS
          // ----------------------------------- 

          vm.tableParams2 = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              filter: {
                  name: '',
                  age: ''
                  // name: 'M'       // initial filter
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.filter() ?
                         $filter('filter')(data, params.filter()) :
                         data;

                  vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(vm.users);
              }
          });

          // AJAX
          
          var Api = $resource('server/table-data.json');

          vm.tableParams5 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: 0,           // length of data
              counts: [],         // hide page counts control
              getData: function($defer, params) {
                  
                  // Service using cache to avoid mutiple requests
                  ngTableDataService.getData( $defer, params, Api);
                  
                  /* direct ajax request to api (perform result pagination on the server)
                  Api.get(params.url(), function(data) {
                      $timeout(function() {
                          // update table params
                          params.total(data.total);
                          // set new data
                          $defer.resolve(data.result);
                      }, 500);
                  });
                  */
              }
          });
        }
    }
})();



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

/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];

    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic example
            // ----------------------------------- 

            vm.gridOptions = {
                rowHeight: 34,
                data: [{
                    'name': 'Wilder Gonzales',
                    'gender': 'male',
                    'company': 'Geekko',
                     'website': 'Geekko'
                }, {
                    'name': 'Georgina Schultz',
                    'gender': 'female',
                    'company': 'Suretech',
                      'website': 'Geekko'
                }, {
                    'name': 'Carroll Buchanan',
                    'gender': 'male',
                    'company': 'Ecosys',
                      'website': 'Geekko'
                }, {
                    'name': 'Valarie Atkinson',
                    'gender': 'female',
                    'company': 'Hopeli',
                      'website': 'Geekko'
                }, {
                    'name': 'Schroeder Mathews',
                    'gender': 'male',
                    'company': 'Polarium',
                      'website': 'Geekko'
                }, {
                    'name': 'Ethel Price',
                    'gender': 'female',
                    'company': 'Enersol',
                      'website': 'Geekko'
                }, {
                    'name': 'Claudine Neal',
                    'gender': 'female',
                    'company': 'Sealoud',
                      'website': 'Geekko'
                }, {
                    'name': 'Beryl Rice',
                    'gender': 'female',
                    'company': 'Velity',
                      'website': 'Geekko'
                }, {
                    'name': 'Lynda Mendoza',
                    'gender': 'female',
                    'company': 'Dogspa',
                      'website': 'Geekko'
                }, {
                    'name': 'Sarah Massey',
                    'gender': 'female',
                    'company': 'Bisba',
                      'website': 'Geekko'
                }, {
                    'name': 'Robles Boyle',
                    'gender': 'male',
                    'company': 'Comtract',
                      'website': 'Geekko'
                }, {
                    'name': 'Evans Hickman',
                    'gender': 'male',
                    'company': 'Parleynet',
                      'website': 'Geekko'
                }, {
                    'name': 'Dawson Barber',
                    'gender': 'male',
                    'company': 'Dymi',
                      'website': 'Geekko'
                }, {
                    'name': 'Bruce Strong',
                    'gender': 'male',
                    'company': 'Xyqag',
                      'website': 'Geekko'
                }, {
                    'name': 'Nellie Whitfield',
                    'gender': 'female',
                    'company': 'Exospace',
                      'website': 'Geekko'
                }, {
                    'name': 'Jackson Macias',
                    'gender': 'male',
                    'company': 'Aquamate',
                      'website': 'Geekko'
                }, {
                    'name': 'Pena Pena',
                    'gender': 'male',
                    'company': 'Quarx',
                      'website': 'Geekko'
                }, {
                    'name': 'Lelia Gates',
                    'gender': 'female',
                    'company': 'Proxsoft',
                      'website': 'Geekko'
                }, {
                    'name': 'Letitia Vasquez',
                    'gender': 'female',
                    'company': 'Slumberia',
                      'website': 'Geekko'
                }, {
                    'name': 'Trevino Moreno',
                    'gender': 'male',
                    'company': 'Conjurica',
                      'website': 'Geekko'
                }]
            };

            // Complex example
            // ----------------------------------- 

            var data = [];

            vm.gridOptionsComplex = {
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                columnDefs: [{
                    field: 'name',
                    width: '13%'
                }, {
                    field: 'address.street',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    width: '13%'
                }, {
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.avg,
                    aggregationHideLabel: true,
                    width: '13%'
                }, {
                    name: 'ageMin',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.min,
                    width: '13%',
                    displayName: 'Age for min'
                }, {
                    name: 'ageMax',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.max,
                    width: '13%',
                    displayName: 'Age for max'
                }, {
                    name: 'customCellTemplate',
                    field: 'age',
                    width: '14%',
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
                }, {
                    name: 'registered',
                    field: 'registered',
                    width: '20%',
                    cellFilter: 'date',
                    footerCellFilter: 'date',
                    aggregationType: uiGridConstants.aggregationTypes.max
                }],
                data: data,
                onRegisterApi: function(gridApi) {
                    vm.gridApi = gridApi;
                }
            };

            $http.get('server/uigrid-complex.json')
                .success(function(data) {
                    data.forEach(function(row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptionsComplex.data = data;
                });

            // Demo for pagination
            vm.gridOptions1 = {
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
                columnDefs: [{
                    name: 'name'

                }, {
                    name: 'gender'
                }, {
                    name: 'company'
                }]
            };

            $http.get('server/uigrid-100.json')
                .success(function(data) {
                    vm.gridOptions1.data = data;
                });

            // Demo for menu selection
            vm.gridOptions2 = {
                 rowHeight: 45,
                columnDefs: [{
                    field: 'name'
                }, {
                    field: 'gender',
                    visible: false
                }, 
                 {
                    field: 'website',
                    visible: true
                },
                {
                    field: 'bonus',
                      aggregationType: uiGridConstants.aggregationTypes.sum,

                    visible: true
                },
                {
                    field: 'company'
                }],
                enableGridMenu: true,
                enableSelectAll: true,
                     showColumnFooter: true,
            };

            $http.get('server/uigrid-100.json')
            .success(function (data) {
              vm.gridOptions2.data = data;
            });

        }
    }
})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('EmployeePostingController', EmployeePostingController);

    EmployeePostingController.$inject = ['$scope','$http', '$rootScope','$uibModal','employeePostingService','GetemployeeService', '$state','$resource','jadaApiUrl'];
    function EmployeePostingController($scope,$http, $rootScope, $uibModal, employeePostingService,GetemployeeService, $state,$resource,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;
        
        // $scope.currentemployee = $resource(jadaApiUrl + "api/employee/:id", { id: "@id" });

         $scope.searchEmployee=function(user) {

          if(user.period!=null && user.period!=""){
                  var employeeId=user.userId;
          var periodId=user.period;
          console.log("period - "+periodId+" employee - "+employeeId);
          $http.get(jadaApiUrl+'api/payrollpostingReport/'+employeeId+'/'+periodId).success(function(data) {
              $scope.oneUser = data;
              console.log($scope.oneUser
);

            });

          }
          
          //   $scope.oneUser = employeePostingService.get({employeeId:userId, periodId:period});
          // // $scope.oneUser=$scope.currentemployee.get({id:userId});
        

         };




 


 $scope.transactions=employeePostingService.query();



  $scope.loadTransactions = function () {
   
 $scope.transactions=employeePostingService.query();

   }

 $rootScope.$on("CallLoadTransactions", function(){
           $scope.loadTransactions ();
        });




  



    

$http.get(jadaApiUrl+'api/department').success(function(data) {
              $scope.departments = data;

            });

$http.get(jadaApiUrl+'api/employee').success(function(data) {
              $scope.employees = data;
          
            });


   $http.get(jadaApiUrl+'api/payrollcode').success(function(data) {
               $scope.pcodes = data;
         

            });

$scope.codeChange=function(id){
              
              for(var r=0;r<$scope.pcodes.length;r++){

                if(id==$scope.pcodes[r].id){
                  $scope.description=$scope.pcodes[r].description;
                }

              }

            }

 // $scope.departments = [];
 //          $scope.loaddepts = function() {
 //            return  $scope.departments.length ? null : $http.get('http://localhost:56135/api/department').success(function(data) {
 //              $scope.departments = data;
 //            });
 //          };


// $scope.loaddepts();




        $scope.delete= function (transaction) {
                  transaction.$remove().then(function () {
                   $scope.loadTransactions ();
            });
            }
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'addTransactions.html',
              controller: ModalOpenFormulaInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





$scope.show = function(transaction) {
      // $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'editTransaction.html',
        controller: ModalInstanceCtrl,
        resolve: {
           transaction: function () {
             return transaction;
           }
         }        
        // scope : $scope
      });
    };
    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenFormulaInstanceCtrl.$inject = ['$scope', '$http','$rootScope','$uibModalInstance','employeePostingService','jadaApiUrl'];
          function ModalOpenFormulaInstanceCtrl($scope, $http,$rootScope,$uibModalInstance, employeePostingService,jadaApiUrl) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.transaction=new employeePostingService();
             $scope.submitTransaction=function() {
          $scope.transaction.$save().then(function(){
             var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
            $rootScope.$emit("CallLoadTransactions", {});

          }, 
          function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };


            $scope.saveCloseTransaction=function() {
          $scope.transaction.$save().then(function(){
            $rootScope.$emit("CallLoadTransactions", {});
            $scope.ok();

          },
           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };

       
         
          }
            

             ModalInstanceCtrl.$inject = ['$scope', '$http', '$rootScope','$uibModalInstance','employeePostingService','transaction','jadaApiUrl'];
          function ModalInstanceCtrl($scope,$http, $rootScope,$uibModalInstance, employeePostingService,transaction,jadaApiUrl) {
          $scope.transaction=transaction;
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            

           $scope.updateTransaction=function(transaction){
             transaction.$update().then(function(){
                   $rootScope.$emit("CallLoadTransactions", {});
            });
          
              };


         
          }
        }
    }

})();



(function() {
    'use strict';

    angular
        .module('app.transactions')
        .factory('employeePostingService', employeePostingService);

    employeePostingService.$inject = ['$resource','jadaApiUrl'];
    function employeePostingService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollposting/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('EmpBulkTransController', EmpBulkTransController);

    EmpBulkTransController.$inject = ['$scope', '$uibModal','EmpcatService','$stateParams', '$state'];
    function EmpBulkTransController($scope, $uibModal, EmpcatService,$stateParams, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



$scope.users=EmpcatService.query();


 $scope.updateEmpCategory=function(userid){
    $scope.user=EmpcatService.get({user:userid});
  $scope.buttonText="Updating. . ."; //Once clicked change button text
  EmpcatService.update({user: userid}, $scope.user);
// $scope.oneuser.$update(function(){
//   console.log('Saving user: ' +$scope.oneuser.name);
// $state.go('app.userinfo'); //Once updated go to state `admin.postViewAll`
// });

};




    $scope.delete=function(user) {

        EmpcatService.remove({user: user});

          };
          
          $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'EmpBulkTransaction.html',
              controller: ModalInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };




  $scope.show = function(x) {
      $scope.x = x;
      var modalInstance = $uibModal.open({
        templateUrl: 'EmpCategoryEdit.html',
        controller: ModalInstanceCtrl,
        scope : $scope
      });
    };

    



 


          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance','EmpcatService'];
          function ModalInstanceCtrl($scope, $uibModalInstance, EmpcatService) {
          
            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
            $scope.Company=new EmpcatService();
             $scope.submitEmpCategoty=function() {
          $scope.Company.$save();
          console.log('Saving user: ' +$scope.Company.pin_number);
          };
         
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.transactions')
        .factory('GetemployeeService', GetemployeeService);

    GetemployeeService.$inject = ['$resource','jadaApiUrl'];
    function GetemployeeService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollposting/:employeeId/:periodId',
    { 'get':    {method:'GET',params:{ 
        employeeId:'@employeeId', 
        periodId: '@periodId'
    },isArray:true}

});
     return data
          
       
    }

})();



// findRange:{ 
//     url: '/RMAServerMav/webresources/com.pako.entity.rma/:id/:to', 
//     method: 'GET', 
//     params:{ 
//         id:'@id', 
//         to: '@to'
//     }
// }



/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.transactions')
        .controller('PayrollProcessController', PayrollProcessController);

   PayrollProcessController.$inject = ['$scope','$http','$rootScope', '$uibModal','PayrollProcessingService','$stateParams', '$state','$timeout','jadaApiUrl'];
    function PayrollProcessController($scope,$http, $rootScope,$uibModal, PayrollProcessingService,$stateParams, $state,$timeout,jadaApiUrl) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


$scope.groups=PayrollProcessingService.query();


 $scope.process= function () {
      $http.post(jadaApiUrl+'api/payrolltransaction');
      console.log('hellow');
   }



          
          

$scope.clickBtn = function() {
  $scope.loading = true; // start loading
  $timeout(function() {
    $scope.loading = false; // stop loading
  }, 2000);
}








 





      
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.transactions')
        .factory('PayrollProcessingService', PayrollProcessingService);

    PayrollProcessingService.$inject = ['$resource','jadaApiUrl'];
    function PayrollProcessingService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/payrollposting/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attributes) {
          element.on('click', function(){
            $timeout(function(){
              // all IE friendly dispatchEvent
              var evt = document.createEvent('UIEvents');
              evt.initUIEvent('resize', true, false, $window, 0);
              $window.dispatchEvent(evt);
              // modern dispatchEvent way
              // $window.dispatchEvent(new Event('resize'));
            }, attributes.triggerResize || 300);
          });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },

          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('TasksController', TasksController);

    TasksController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state','$uibModal', '$log', 'TaskService'];
        function TasksController($scope, $rootScope, $http, $stateParams, $state,$uibModal, $log, TaskService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

 var SuccessMsg;
 var errorMsg;

          //  var id=$stateParams.Id;

          //  console.log( id);
          //   if(id!=null){
          //  $scope.currentworkflow=TaskService.get({id:id});
          // }
           
         
 $scope.tasks=TaskService.query();




 $scope.loadTasks = function () {
     
 $scope.tasks=TaskService.query();
   }

 $rootScope.$on("CallLoadTasks", function(){
           $scope.loadTasks();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (task) {
task.$remove().then(function () {
$scope.loadTasks();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newTask.html',
              controller: ModalOpenTaskInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(task) {

      var modalInstance = $uibModal.open({
        templateUrl: 'EditTask.html',
        controller: ModalInstanceCtrl,
        resolve: {
           task: function () {
             return task;
           }
         }        

      });
    };


;
//   };

           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenTaskInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','TaskService'];
          function ModalOpenTaskInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, TaskService) {


            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


              $scope.task=new TaskService();
             $scope.submitTask=function() {
          $scope.task.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadTasks", {});
          },
           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };

           $scope.closeTask=function() {
          $scope.task.$save().then(function(){
           
                $rootScope.$emit("CallLoadTasks", {});
                $scope.ok();
          },function() {
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          
          
         
          }



          ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','TaskService','task'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, TaskService,task) {
            $scope.currenttask=task;


            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


                $scope.updateTask=function(currenttask){
             currenttask.$update().then(function(){
                 $rootScope.$emit("CallLoadTasks", {});
            });
          
              };
          }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .factory('TaskService', TaskService);

    TaskService.$inject = ['$resource','jadaApiUrl'];
    function TaskService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/task/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('UserAdminController', UserAdminController);

    UserAdminController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state', '$uibModal', '$log', 'userAdminService'];
        function UserAdminController($scope, $rootScope, $http, $stateParams, $state, $uibModal, $log,userAdminService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


  $scope.users=userAdminService.query();


 $scope.loadUsers = function () {
     
$scope.users=userAdminService.query();
}
 $rootScope.$on("CallLoadUsers", function(){
           $scope.loadUsers();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (user) {
usergroup.$remove().then(function () {
$scope.loadUsers();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'NewUser.html',
              controller: ModalOpenUserInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };



 $scope.show = function(user) {

      var modalInstance = $uibModal.open({
        templateUrl: 'EditUser.html',
        controller: ModalInstanceCtrl,
        resolve: {
           user: function () {
             return user;
           }
         }        

      });
    };


// $scope.show = function(x) {
//     $scope.x = x;
//     var modalInstance = $uibModal.open({
//       templateUrl: 'edit-user-setting.html',
//       controller: ModalInstanceCtrl,
//       scope : $scope
//     });
//   };

           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

             ModalOpenUserInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','userAdminService'];
          function ModalOpenUserInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, userAdminService) {


            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


              $scope.user=new userAdminService();
             $scope.submitUser=function() {
          $scope.user.$save().then(function(data){
              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadUsers", {});
          },

           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };


             $scope.submitUserClose=function() {
          $scope.user.$save().then(function(){
            
                $rootScope.$emit("CallLoadUsers", {});
                $scope.ok();
          },
          
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          
         
          }
  

          
  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','userAdminService','user'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, userAdminService,user) {
            $scope.currentgroup=user;
    

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


                $scope.updateUser=function(user){
             currentgroup.$update().then(function(){
                 $rootScope.$emit("CallLoadUsers", {});
            });
          
              };
          }


          

        }
    }

})();
// (function() {
//     'use strict';

//     angular
//         .module('app.useradministration')
//         .factory('userAdminService',  function($resource,jadaApiUrl) {
        
//         return $resource(jadaApiUrl+'users/:user', {user: '@user'}); 
       
//        // return $resource(' http://localhost:9418/jada/payroll/CompanyRegistrationData/');
//         // http://localhost:9418/jada/Authentication/CompanyRegistration
//     });
// })();


(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .factory('userAdminService', userAdminService);

    userAdminService.$inject = ['$resource','jadaApiUrl'];
    function userAdminService($resource,jadaApiUrl) {
          
        return $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'}); 
    }

})();

(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('UserGroupController', UserGroupController);

    UserGroupController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state', '$uibModal', '$log', 'UserGroupService'];
        function UserGroupController($scope, $rootScope, $http, $stateParams, $state, $uibModal, $log, UserGroupService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           var SuccessMsg;
            var errorMsg;


 $scope.usergroups=UserGroupService.query();


 // var id=$stateParams.Id;

 //           console.log( id);
 //            if(id!=null){
 //           $scope.currentworkflow=WorkflowService.get({id:id});
 //          }
           

 $scope.loadUserGroups = function () {
     
 $scope.usergroups=UserGroupService.query();
   }

 $rootScope.$on("CallLoadUserGroups", function(){
           $scope.loadUserGroups();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (usergroup) {
usergroup.$remove().then(function () {
$scope.loadUserGroups();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newUserGroup.html',
              controller: ModalOpenUserGroupInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(usergroup) {

      var modalInstance = $uibModal.open({
        templateUrl: 'EditUserGroup.html',
        controller: ModalInstanceCtrl,
        resolve: {
           usergroup: function () {
             return usergroup;
           }
         }        

      });
    };




           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenUserGroupInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','UserGroupService'];
          function ModalOpenUserGroupInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, UserGroupService) {
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


              $scope.usergroup=new UserGroupService();
             $scope.submitUserGroup=function() {
          $scope.usergroup.$save().then(function(data){
              var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadUserGroups", {});
          },

           function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };


             $scope.submitUserGroupClose=function() {
          $scope.usergroup.$save().then(function(){
            
                $rootScope.$emit("CallLoadUserGroups", {});
                $scope.ok();
          },
          
           function() {
                $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          
         
          }


  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','UserGroupService','usergroup'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, UserGroupService,usergroup) {
            $scope.currentgroup=usergroup;
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


                $scope.updateUserGroup=function(currentgroup){
             currentgroup.$update().then(function(){
                 $rootScope.$emit("CallLoadUserGroups", {});
            });
          
              };
          }
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app.companydetails')
        .factory('UserGroupService',  ["$resource", function($resource) {
               // return $resource('http://localhost:56135/api/exemption/:id', {id: '@id'});
//         //return $resource('http://localhost:9418/jada/payroll/CreateEmployeeGroups/');
     var data=$resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
    }]);
})();

// angular.module('app.companydetails').value('jadaApiUrl',
// 'http://localhost:56135/api/exemption/');



(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .controller('WorkflowController', WorkflowController);

    WorkflowController.$inject = ['$scope','$rootScope', '$http', '$stateParams', '$state', '$uibModal', '$log', 'WorkflowService'];
        function WorkflowController($scope, $rootScope, $http, $stateParams, $state, $uibModal, $log, WorkflowService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
 var SuccessMsg;
 var errorMsg;

 $scope.workflows=WorkflowService.query();


 // var id=$stateParams.Id;

 //           console.log( id);
 //            if(id!=null){
 //           $scope.currentworkflow=WorkflowService.get({id:id});
 //          }
           

 $scope.loadWorkflows = function () {
     
 $scope.workflows=WorkflowService.query();
   }

 $rootScope.$on("CallLoadWorkflows", function(){
           $scope.loadWorkflows();
        });




//$scope.oneuser=CompanyInfoService.get({user:1}); //Obtain the Post from backend. Search by Id




  $scope.delete= function (workflow) {
workflow.$remove().then(function () {
$scope.loadWorkflows();
});
}




   $scope.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: 'newWorkflow.html',
              controller: ModalOpenWorkflowInstanceCtrl,
              size: size
            });





            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };





    


 $scope.show = function(workflow) {

      var modalInstance = $uibModal.open({
        templateUrl: 'Editworkflow.html',
        controller: ModalInstanceCtrl,
        resolve: {
           workflow: function () {
             return workflow;
           }
         }        

      });
    };




           

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalOpenWorkflowInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','WorkflowService'];
          function ModalOpenWorkflowInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, WorkflowService) {
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };


              $scope.workflow=new WorkflowService();
             $scope.submitWorkflow=function() {
          $scope.workflow.$save().then(function(data){
            var response=angular.fromJson(data);
          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.SuccessMsg =response.Message;
            }else{
           
               $scope.SuccessMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
           
                $rootScope.$emit("CallLoadWorkflows", {});
          },function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
          

            $scope.closeWorkflow=function() {
          $scope.workflow.$save().then(function(){
           
                $rootScope.$emit("CallLoadWorkflows", {});
                $scope.ok();
          },function() {
             $scope.SuccessMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
        
          };
         
          }


  ModalInstanceCtrl.$inject = ['$scope', '$rootScope', '$http','$uibModalInstance','WorkflowService','workflow'];
          function ModalInstanceCtrl($scope,$rootScope, $http, $uibModalInstance, WorkflowService,workflow) {
            $scope.currentworkflow=workflow;
    //       if (x) {
    //     $scope.oneUser = { id : x};
    //    // $scope.oneUser = { name : x};


    // } else 
    // {
    //     $scope.thing = { name: null };
    // }

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          
         


                $scope.updateWorkflow=function(workflow){
             workflow.$update().then(function(){
                 $rootScope.$emit("CallLoadWorkflows", {});
            });
          
              };
          }
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.useradministration')
        .factory('WorkflowService', WorkflowService);

    WorkflowService.$inject = ['$resource','jadaApiUrl'];
    function WorkflowService($resource,jadaApiUrl) {
     var data=$resource(jadaApiUrl+'api/workflow/:id', {id: '@id'},
    { 'get':    {method:'GET', isArray:false},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'update': { method:'PUT' },
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} 
});
     return data
          
       
    }

})();
(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'angle',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function() {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log'];
    function Controller($log) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
          $log.log('I\'m a line from custom.js');
        }
    }
})();

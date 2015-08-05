'use strict';

angular.module('cryptichain')
  .directive('scroll', function ($window) {
      return function (scope, element, attrs) {
          angular.element($window).bind('scroll', function () {
              if (this.pageYOffset >= 200) {
                  scope.secondaryNavbar = true;
              } else {
                  scope.secondaryNavbar = false;
              }
              scope.$apply();
          });
      };
  });

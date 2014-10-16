angular.module('anguarjsde.colorpicker').directive('colorPicker', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/colorPicker.html',
    scope: {
      r: '@',
      g: '@',
      b: '@'
    }
  };
});
/**
 * Created by gerd on 15.10.14.
 */
angular.module('anguarjsde.colorpicker').controller('ColorPickerCtrl', function ($scope, $element, $attrs) {
  $scope.r = 127;
  $scope.g = 255;
  $scope.b = 120;

  console.debug($scope, $element, $attrs);

});
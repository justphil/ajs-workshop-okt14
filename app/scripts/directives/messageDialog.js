angular.module('bookMonkey').directive('messageDialog', function () {

  return {
    restrict: 'E',
    templateUrl: 'templates/messageDialog.html',
    scope: {
      visible: '=',
      title: '=',
      onYes: '&',
      onNo: '&'
    },
    transclude: true,
    link: function(scope) {
      scope.performYes = function() {
        scope.onYes({
          test: 'foo',
          two: 2
        });
      };
    }
  };

});
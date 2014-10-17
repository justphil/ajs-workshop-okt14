angular.module('bookMonkey').controller('BookDetailsCtrl', function($scope, $routeParams, bookDataService) {
  var isbn = $routeParams.isbn;

  bookDataService.getBookByIsbn(isbn).then(function(response) {
    $scope.book = response.data;
  });

});
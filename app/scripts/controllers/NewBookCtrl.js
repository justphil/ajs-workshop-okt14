angular.module('bookMonkey').controller('NewBookCtrl', function($scope, $location, bookDataService) {

  $scope.saveBook = function(book) {
    bookDataService.saveBook(book).then(function(response) {
      if (response.data) {
        $location.path('/books');
      }
    });
  };

});
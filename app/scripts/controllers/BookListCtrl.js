/**
 * Created by gerd on 16.10.14.
 */
angular.module('bookMonkey').controller('BookListCtrl', function ($scope, bookDataService) {
  bookDataService.getBooks().then(function(response) {
    $scope.books = response.data;
  });
});
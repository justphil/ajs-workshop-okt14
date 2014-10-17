/**
 * Created by gerd on 16.10.14.
 */
angular.module('bookMonkey').controller('BookListCtrl', function ($scope, bookDataService) {

  function initBookList() {
    bookDataService.getBooks().then(function(response) {
      $scope.books = response.data;
    });
  }

  initBookList();

  $scope.deleteBook = function(book) {
    console.log('deleting book...', book);
    $scope.dialogVisible = true;
    $scope.dialogTitle = 'Really?';
    $scope.bookToDelete = book;
  };

  $scope.cancelDeletion = function() {
    $scope.dialogVisible = false;
    delete $scope.dialogTitle;
    delete $scope.bookToDelete;
  };

  $scope.performDeletion = function(test, two) {
    console.log('performDeletion', test, two);
    bookDataService.deleteBookByIsbn($scope.bookToDelete.isbn).then(function(response) {
      if (response.data) {
        $scope.cancelDeletion();
      }
    }).then(initBookList);
  };

});
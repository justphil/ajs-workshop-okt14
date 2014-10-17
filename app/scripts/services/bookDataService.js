angular.module('bookMonkey').factory('bookDataService', function($http) {

  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

  // Private Implementations
  function getBooks() {
    return $http.get(baseUrl + '/books');
  }

  function getBookByIsbn(isbn) {
    return $http.get(baseUrl + '/books/' + isbn);
  }

  function saveBook(book) {
    return $http.post(baseUrl + '/books', book);
  }

  function deleteBookByIsbn(isbn) {
    return $http.delete(baseUrl + '/books/' + isbn);
  }

  // Revealing Module Pattern (Public API)
  return {
    getBooks: getBooks,
    getBookByIsbn: getBookByIsbn,
    saveBook: saveBook,
    deleteBookByIsbn: deleteBookByIsbn
  };

});
'use strict';

describe('Service: bookDataService', function() {
  var bookDataService, $rootScope;

  beforeEach(module('bookMonkey'));

  beforeEach(module(function($provide) {
    $provide.factory('dataEnhancer', function() {
      function enhance(b) {
        b.test = 'test';
        return b;
      }

      return {
        enhance: enhance
      }
    });
  }));

  beforeEach(inject(function(_$rootScope_, _bookDataService_) {
    $rootScope = _$rootScope_;
    bookDataService = _bookDataService_;
  }));



  describe('Duck Typing', function() {
    it('should exist', function() {
      expect(bookDataService).toBeDefined();
    });

    it('should contain a getBooks() function', function() {
      expect(angular.isFunction(bookDataService.getBooks)).toBe(true);
    });
  });

  describe('getBooks()', function() {
    it('should return an array of book objects', function() {
      var books;

      var promise = bookDataService.getBooks();
      expect(angular.isFunction(promise.then)).toBe(true);

      promise.then(function(response) {
        books = response.data;
      });

      // synchronously resolve the pending promise
      $rootScope.$apply();

      expect(books).toBeDefined();
      books.forEach(function(book) {
        expect(book.title).toBeDefined();
        expect(book.subtitle).toBeDefined();
        expect(book.isbn).toBeDefined();
        expect(book.test).toBeDefined();
        expect(book.test).toBe('test');
      });
    });

    it('should return a copy of the internal data structure', function() {
      expect(bookDataService.getBooks()).not.toBe(bookDataService.getBooks());
    });
  });

  describe('getBookByIsbn()', function() {
    it('should return the appropriate book object', function() {
      var isbn = '978-3-89864-829-5';
      var book;

      var promise = bookDataService.getBookByIsbn(isbn);
      expect(angular.isFunction(promise.then)).toBe(true);

      promise.then(function(response) {
        book = response.data;
      });

      $rootScope.$apply();

      expect(book.isbn).toBe(isbn);
    });
  });

  describe('saveBook()', function() {
    it('should properly save a new book object', function() {
      var book = {
        title: 'a',
        subtitle: 'b',
        isbn: 'test',
        author: 'c'
      };

      var bookSaved = false;

      bookDataService.saveBook(book).then(function(response) {
        bookSaved = response.data;
      });

      $rootScope.$apply();

      var savedBook;

      bookDataService.getBookByIsbn(book.isbn).then(function(response) {
        savedBook = response.data;
      });

      $rootScope.$apply();

      expect(savedBook).toEqual(book);
    });
  });

});
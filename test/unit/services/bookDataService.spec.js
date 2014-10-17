'use strict';

describe('Service: bookDataService', function() {
  var bookDataService, $httpBackend;

  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

  beforeEach(module('bookMonkey'));

  beforeEach(inject(function(_$httpBackend_, _bookDataService_) {
    $httpBackend = _$httpBackend_;
    bookDataService = _bookDataService_;
  }));

  // define trained responses
  beforeEach(function() {
    $httpBackend.when('GET', baseUrl + '/books').respond({});
    $httpBackend.when('POST', baseUrl + '/books').respond({});
    $httpBackend.when('GET', baseUrl + '/books/978-3-89864-829-5').respond({});
    $httpBackend.when('DELETE', baseUrl + '/books/978-3-89864-829-5').respond({});
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


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
      $httpBackend.expectGET(baseUrl + '/books');
      bookDataService.getBooks();
      $httpBackend.flush();
    });
  });

  describe('getBookByIsbn()', function() {
    it('should return the appropriate book object', function() {
      var isbn = '978-3-89864-829-5';
      $httpBackend.expectGET(baseUrl + '/books/' + isbn);
      bookDataService.getBookByIsbn(isbn);
      $httpBackend.flush();
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

      $httpBackend.expectPOST(baseUrl + '/books', book);
      bookDataService.saveBook(book);
      $httpBackend.flush();
    });
  });

  describe('deleteBookByIsbn()', function() {
    it('should properly delete an available book object', function() {
      var isbn = '978-3-89864-829-5';

      $httpBackend.expectDELETE(baseUrl + '/books/' + isbn);
      bookDataService.deleteBookByIsbn(isbn);
      $httpBackend.flush();
    });
  });

});
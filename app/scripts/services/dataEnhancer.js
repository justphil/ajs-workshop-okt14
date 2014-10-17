angular.module('bookMonkey').factory('dataEnhancer', function() {
    function enhance(book) {
      book.foobar = 'baz';
      return book;
    }

    return {
      enhance: enhance
    };
});
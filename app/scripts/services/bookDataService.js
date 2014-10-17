angular.module('bookMonkey').factory('bookDataService', function($q, dataEnhancer) {

  var books = [
    {
      "title": "JavaScript für Enterprise-Entwickler",
      "subtitle": "Professionell programmieren im Browser und auf dem Server",
      "isbn": "978-3-89864-728-1",
      "abstract": "JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.",
      "numPages": 302,
      "author": "Oliver Ochs",
      "publisher": {
        "name": "dpunkt.verlag",
        "url": "http://dpunkt.de/"
      },
      "tags": [
        "javascript",
        "enterprise",
        "nodejs",
        "web",
        "browser"
      ]
    },
    {
      "title": "Node.js & Co.",
      "subtitle": "Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln",
      "isbn": "978-3-89864-829-5",
      "abstract": "Nach dem Webbrowser erobert JavaScript nun auch den Webserver.",
      "numPages": 334,
      "author": "Golo Roden",
      "publisher": {
        "name": "dpunkt.verlag",
        "url": "http://dpunkt.de/"
      },
      "tags": [
        "javascript",
        "nodejs",
        "web",
        "realtime",
        "socketio"
      ]
    },
    {
      "title": "CoffeeScript",
      "subtitle": "Einfach JavaScript",
      "isbn": "978-3-86490-050-1",
      "abstract": "CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.",
      "numPages": 200,
      "author": "Andreas Schubert",
      "publisher": {
        "name": "dpunkt.verlag",
        "url": "http://dpunkt.de/"
      },
      "tags": [
        "coffeescript",
        "web"
      ]
    }
  ];

  // Private Implementations
  function getBooks() {
    var booksCopy = angular.copy(books);

    booksCopy.forEach(function(b) {
      dataEnhancer.enhance(b);
    });

    return $q.when({
      data: booksCopy
    });
  }

  function getBookByIsbn(isbn) {
    var book;

    var tmpArray = books.filter(function(book) {
      return isbn === book.isbn;
    });

    if (tmpArray.length > 0) {
      book = tmpArray[0];
    }

    return $q.when({
      data: book
    });
  }

  function saveBook(book) {
    books.push(book);
    return $q.when({
      data: true
    });
  }

  function deleteBookByIsbn(isbn) {
    var deleted = false;
    var i = books.length;
    while(i--) {
      if (books[i].isbn === isbn) {
        books.splice(i, 1);
        deleted = true;
        break;
      }
    }

    return $q.when({
      data: deleted
    });
  }

  // Revealing Module Pattern (Public API)
  return {
    getBooks: getBooks,
    getBookByIsbn: getBookByIsbn,
    saveBook: saveBook,
    deleteBookByIsbn: deleteBookByIsbn
  };

});
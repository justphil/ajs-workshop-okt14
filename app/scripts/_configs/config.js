/**
 * Created by gerd on 16.10.14.
 */
angular.module('bookMonkey').config(function ($routeProvider) {
$routeProvider
  .when('/books', {
    templateUrl: 'templates/views/book_list.html',
    controller: 'BookListCtrl'
  })
  .when('/books/:isbn', {
    templateUrl: 'templates/views/book_details.html',
    controller: 'BookDetailsCtrl'
  })
  .when('/newbook', {
    templateUrl: 'templates/views/book_new.html',
    controller: 'NewBookCtrl'
  })
  /* Default route */
  .otherwise({
    redirectTo: '/books'
  });
});
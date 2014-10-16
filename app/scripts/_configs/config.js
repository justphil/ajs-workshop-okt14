/**
 * Created by gerd on 16.10.14.
 */
angular.module('bookMonkey').config(function ($routeProvider) {
$routeProvider
  .when('/books', {
    templateUrl: 'templates/views/book_list.html',
    controller: 'BookListCtrl'
  })
  /* Default route */
  .otherwise({
    redirectTo: '/books'
  });
});
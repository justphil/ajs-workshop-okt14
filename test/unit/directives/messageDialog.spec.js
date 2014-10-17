'use strict';

describe('Directive: messageDialog', function() {

  var $compile, $rootScope, $filter;

  beforeEach(module('bookMonkey'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$filter_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $filter = _$filter_;
  }));

  var template = '<message-dialog visible="dialogVisible" title="dialogTitle"' +
                    'on-yes="performDeletion(test, two)"' +
                    'on-no="cancelDeletion()">' +
                    'Would you really like to delete the book {{bookToDelete.title}}?' +
                 '</message-dialog>';

  it('should get an own scope', function() {
    var parentScope = $rootScope.$new();
    var linkFn = $compile(template);
    var jqElem = linkFn(parentScope);
    parentScope.$apply();

    var directiveScope = getDirectiveScope(jqElem);
    expect(directiveScope.$id).not.toBe(parentScope.$id);
  });

  it('should get an isolated scope', function() {
    var parentScope = $rootScope.$new();
    var linkFn = $compile(template);
    var jqElem = linkFn(parentScope);
    parentScope.test = 'test';
    parentScope.$apply();

    var directiveScope = getDirectiveScope(jqElem);
    expect(parentScope.test).toBeDefined();
    expect(directiveScope.test).not.toBeDefined();
  });

  it('should properly render the title', function() {
    var parentScope = $rootScope.$new();
    var linkFn = $compile(template);
    var jqElem = linkFn(parentScope);
    parentScope.dialogTitle = 'abcdefgh';
    parentScope.$apply();

    var toUppercase = $filter('uppercase');

    expect(jqElem.find('div.title').text()).toBe(toUppercase(parentScope.dialogTitle));
  });

  function getDirectiveScope(jqElem) {
    return angular.element(jqElem.children()[0]).scope();
  }

});
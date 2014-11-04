'use strict';

describe('<%= classedName %>', () => {
  var <%= classedName %>, component;

  beforeEach(function () {
    <%= classedName %> = require('./<%= classedFileName %>.jsx');
    component = <%= classedName %>();
  });

  it('should create a new instance of <%= classedName %>', function () {
    expect(component).toBeDefined();
  });
});

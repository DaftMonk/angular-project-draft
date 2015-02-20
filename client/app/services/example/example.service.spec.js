describe('Service: example', function () {

  var example;

  beforeEach(module('testApp'));

  beforeEach(inject(function (_example_) {
    example = _example_;
  }));

  it('should exist', function () {
    expect(!!example).toBe(true);
  });

});

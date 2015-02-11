describe('Service: example', function () {

  beforeEach(module('testApp'));

  var example;
  beforeEach(inject(function (_example_) {
    example = _example_;
  }));

  it('should exist', function () {
    expect(!!example).toBe(true);
  });

});

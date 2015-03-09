import App from '../../app.module';

describe('Service: example', function () {

  var example;

  beforeEach(module(App.name));

  beforeEach(inject(function (_example_) {
    example = _example_;
  }));

  it('should exist', function () {
    expect(!!example).toBe(true);
  });

});

'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');

describe('test/alicloud-mns.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/alicloud-mns-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, alicloudMns')
      .expect(200);
  });

  it('should get object app.alicloudMns', () => {
    assert(app.alicloudMns);
  });

  it('should have function app.alicloudMns.receiveMessage', () => {
    assert(app.alicloudMns.receiveMessage);
  });
});

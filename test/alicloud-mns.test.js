'use strict';

const mock = require('egg-mock');

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
});

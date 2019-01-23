'use strict';

const mns = require('./lib/mns');

module.exports = app => {
  if (app.config.alicloudMns.app) mns(app);
};

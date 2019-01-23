'use strict';

const assert = require('assert');
const alicloudMns = require('@alicloud/mns');

module.exports = app => {
  app.addSingleton('alicloud-mns', createClient);
};

function createClient(config) {
  assert(config.accountId && config.accessKeyId && config.secretAccessKey && config.region,
    `[egg-alicloud-mns] 'accountId: ${config.accountId}', 'accessKeyId: ${config.accessKeyId}', 'secretAccessKey: ${config.secretAccessKey}', 'region: ${config.region}' are required on config`);

  let secure = config.secure;
  if (!secure || typeof secure !== 'boolean') {
    secure = true;
  }
  let internal = config.internal;
  if (!internal || typeof internal !== 'boolean') {
    internal = false;
  }
  let vpc = config.vpc;
  if (!vpc || typeof vpc !== 'boolean') {
    vpc = false;
  }

  return new alicloudMns(config.accountId, {
    region: config.region,
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.secretAccessKey,
    // optional & default
    secure, // use https or http
    internal, // use internal endpoint
    vpc, // use vpc endpoint
  });
}

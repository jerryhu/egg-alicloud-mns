'use strict';

const mns = require('./lib/mns');

module.exports = agent => {
  if (agent.config.alicloudMns.agent) mns(agent);
};

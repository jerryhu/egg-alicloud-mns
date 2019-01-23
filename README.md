# egg-alicloud-mns

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-alicloud-mns.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alicloud-mns
[travis-image]: https://img.shields.io/travis/eggjs/egg-alicloud-mns.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-alicloud-mns
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-alicloud-mns.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-alicloud-mns?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-alicloud-mns.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-alicloud-mns
[snyk-image]: https://snyk.io/test/npm/egg-alicloud-mns/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-alicloud-mns
[download-image]: https://img.shields.io/npm/dm/egg-alicloud-mns.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-alicloud-mns

<!--
Description here.
-->

## [中文说明](https://github.com/jerryhu/egg-alicloud-mns/blob/master/README.zh-CN.md)

## Install

```bash
$ npm i egg-alicloud-mns --save
```

Alicloud MNS Plugin for egg, support egg application access to Aliyun MNS.

This plugin is based on [mns-nodejs-sdk](https://github.com/aliyun/mns-nodejs-sdk),
please check the document of mns-nodejs-sdk for API details.

## Usage

```js
// {app_root}/config/plugin.js
exports.alicloudMns = {
  enable: true,
  package: 'egg-alicloud-mns',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.alicloudMns = {
  accountId: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: '', // e.g. 'cn-hangzhou',
  secure: true, // use https or http
  internal: false, // use internal endpoint
  vpc: false, // use vpc endpoint
};
```

See [config/config.default.js](config/config.default.js) for more details.


## Questions & Suggestions

Please open an issue [here](https://github.com/jerryhu/egg-alicloud-mns/issues).

## License

[MIT](LICENSE)

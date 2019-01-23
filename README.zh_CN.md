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

## 安装

```bash
$ npm i egg-alicloud-mns --save
```

阿里云MNS(消息服务)的eggjs插件, 支持eggjs应用访问阿里云的消息服务。
本插件基于阿里云官方的 [mns-nodejs-sdk](https://github.com/aliyun/mns-nodejs-sdk), SDK使用说明参考[mns-nodejs-sdk](https://github.com/aliyun/mns-nodejs-sdk)文档。

## 开启插件

```js
// config/plugin.js
exports.alicloudMns = {
  enable: true,
  package: 'egg-alicloud-mns',
};
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。
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

## 提问交流

请到 [egg issues](https://github.com/jerryhu/egg-alicloud-mns/issues) 异步交流。

## License

[MIT](LICENSE)

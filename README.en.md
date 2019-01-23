# egg-alicloud-mns

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/egg-alicloud-mns.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alicloud-mns
<!--
Description here.
-->

Read this in other languages: [简体中文](https://github.com/jerryhu/egg-alicloud-mns/blob/master/README.zh-cn.md)

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

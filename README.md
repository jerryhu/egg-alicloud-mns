# egg-alicloud-mns
阿里云MNS(消息服务)的eggjs插件, 支持eggjs应用访问阿里云的消息服务。
本插件基于阿里云官方的 [mns-nodejs-sdk](https://github.com/aliyun/mns-nodejs-sdk), SDK使用说明参考[mns-nodejs-sdk](https://github.com/aliyun/mns-nodejs-sdk)文档。

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/egg-alicloud-mns.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alicloud-mns

<!--
Description here.
-->
Read this in other languages: [English](https://github.com/jerryhu/egg-alicloud-mns/blob/master/README.en.md)

## 安装

```bash
$ npm i egg-alicloud-mns --save
```

## 开启插件

```js
// config/plugin.js
exports.alicloudMns = {
  enable: true,
  package: 'egg-alicloud-mns',
};
```

## 详细配置
```js
// {app_root}/config/config.default.js
exports.alicloudMns = {
  client: {
    accountId: '',
    accessKeyId: '',
    secretAccessKey: '',
    region: '', // e.g. 'cn-hangzhou',
    secure: true, // use https or http
    internal: false, // use internal endpoint
    vpc: false, // use vpc endpoint
  },
};
```

## 提问交流

请到 [issues](https://github.com/jerryhu/egg-alicloud-mns/issues) 异步交流。

## License

[MIT](LICENSE)

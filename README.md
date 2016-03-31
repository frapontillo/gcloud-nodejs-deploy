gcloud-nodejs-deploy
====================

[![NPM version][npm-version-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Apache License][license-image]][license-url]

`gcloud preview app deploy` with version from your package.json

--------------------

```shell
npm install -g gcloud-nodejs-deploy
```

## How to use

Launch `gcloud-nodejs-deploy` in an already set-up Google Cloud NodeJS project.
Read [how to run NodeJS applications on managed Docker instances on Google Cloud]
(https://cloudplatform.googleblog.com/2016/03/Node.js-on-Google-App-Engine-goes-beta.html).

The utility will deploy your application as an image tagged with the version number
in your `package.json`.

Deploying from `gcloud-nodejs-deploy` will also shield you from bad version numbers
that won't be accepted as image tags on Google Cloud.

## License

```
Copyright 2016 Francesco Pontillo

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[npm-url]: https://npmjs.org/package/gcloud-nodejs-deploy
[npm-version-image]: http://img.shields.io/npm/v/gcloud-nodejs-deploy?style=flat

[travis-image]: http://img.shields.io/travis/frapontillo/gcloud-nodejs-deploy.svg?style=flat
[travis-url]: https://travis-ci.org/frapontillo/gcloud-nodejs-deploy

[license-image]: http://img.shields.io/badge/license-Apache_2.0-blue.svg?style=flat
[license-url]: LICENSE

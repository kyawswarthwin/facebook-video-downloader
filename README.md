# facebook-video-downloader

## Installation

    npm i facebook-video-downloader

## Usage

```js
'use strict';

const getDownloadUrl = require('facebook-video-downloader');

getDownloadUrl('https://www.facebook.com/facebook/videos/10153231379946729/')
  .then(console.log)
  .catch(console.error);
```

'use strict';

const axios = require('axios');

function getDownloadUrl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios(url);
      const hd_src = data.match(/hd_src:"([\s\S]*?)"/)[1];
      const hd_size = parseInt((await axios.head(hd_src)).headers['content-length']);
      const sd_src = data.match(/sd_src:"([\s\S]*?)"/)[1];
      const sd_size = parseInt((await axios.head(sd_src)).headers['content-length']);
      resolve({
        hd: {
          url: hd_src,
          fileSize: hd_size
        },
        sd: {
          url: sd_src,
          fileSize: sd_size
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = getDownloadUrl;

// var fetch = require( 'node-fetch');
// const  fs = require('fs');
// const _ = require('underscore');
// const https = require('https');

// const url = 'https://text-to-speech-demo.ng.bluemix.net/api/v3/synthesize'
// const params = {
//   text: 'text',
//   voice: 'en-US_AllisonV3Voice',
//   download: 'true',
//   accept: 'audio/mp3',
// }
// var options = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: {
//     "Cache-Control": "no-cache",
//     Accept: "*/*",
//     "Accept-Encoding": "gzip, deflate, br",
//     "Connection": "keep-alive",
//     'Host': 'text-to-speech-demo.ng.bluemix.net',
//     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
//     "Accept-Encoding": "identity;q=1, *;q=0",
//     "Sec-Fetch-Site": "same-origin",
//     "Sec-Fetch-Mode": "no-cors",
//     "Sec-Fetch-Dest": "audio",
//     "Referer": "https://text-to-speech-demo.ng.bluemix.net/",
//     "Accept-Language": "en-US,en;q=0.9",
//     "Range": "bytes=0-"
//   }
// };

// console.log(url + '?' + new URLSearchParams(params).toString())
// const data = fetch(url + '?' + new URLSearchParams(params).toString(), options).then(console.log)
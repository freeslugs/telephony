const request = require('request')

export default async (req, res) => {
  const url = 'https://text-to-speech-demo.ng.bluemix.net/api/v3/synthesize'
  const params = {
    text: req.query.text,
    voice: 'en-US_AllisonV3Voice',
    download: 'true',
    accept: 'audio/mp3',
  }

  // console.log(url + '?' + new URLSearchParams(params).toString())
  const proxy = request({ url: url + '?' + new URLSearchParams(params).toString() })
  
  proxy.on('response', proxyResponse => {
    res.writeHead(200, {
    "Accept-Ranges": "bytes",
    'Content-Type': 'audio/mp3'});
   }).pipe(res)
  // catch errors with proxy.on('error', err => {})
  req.pipe(proxy)
}

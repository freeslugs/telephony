const axios = require('axios').default;
const request = require('request')

export default async (req, res) => {
  
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWY2ZjA5MDItNjJkYS00MzQxLTlkMDItMzA4MDEzMTJhMGJhIiwidHlwZSI6ImFwaV90b2tlbiJ9.pCsOPwREbokHmvH5SfbV3LQLi2UDtQpHFvdR6h8ctK0"

  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/audio/text_to_speech',
    headers: {
      authorization: 'Bearer ' + apiKey,
    },
    data: {
      providers: 'amazon',
      language: 'en',
      text: req.query.text,
      option: 'FEMALE'
    }
  };

  const response = await axios.request(options)
  const proxy = request(response.data.amazon.audio_resource_url)
  
  proxy.on('response', proxyResponse => {
    res.writeHead(200, {
    "Accept-Ranges": "bytes",
    'Content-Type': 'audio/mp3'});
   }).pipe(res)
  // catch errors with proxy.on('error', err => {})
  req.pipe(proxy)
}

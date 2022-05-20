const vlc_password = 'test';
const vlc_ip = "localhost";
const vlc_port = "8080"


const express = require('express')
const request = require('request');
const app = express()
const port = 3000

var vlc_data = {}


app.get('/', (req, res) => {
  
    request('http://:' + vlc_password + '@' + vlc_ip + ':' + vlc_port + '/requests/status.json', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        vlc_data = body;
      });
      
    res.send(vlc_data)
    

})

app.listen(port, () => {
  console.log(`VLC reachable on ${port}`)
})
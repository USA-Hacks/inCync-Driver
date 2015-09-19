var request = require('request')
var seconds = 1;

var cyncDriver = "https://api.parse.com/1/functions/test";
var cyncHeaders = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': 'w2xsWBBHSdJg7UkZAyA0We19GMbV9rMPKwnRBYv6',
  'X-Parse-REST-API-Key': 'GWZTomC5WNZwDFgYAZAyXvex2ECtE3u9hjzT0F1W'
};

(function() {
  var timeout = setInterval(function() {
    request({
      headers: cyncHeaders,
      uri: cyncDriver,
      body: "{}",
      method: 'POST'
    }, function (err, res, body) {
      // We should probably really do something here, but nah, it's ok, so instead I am going to write a massive
      // paragraph about how awesome this code is. I mean... just look at the god damn elegance, isn't it friggin
      // beautiful. I wish I could deploy this as an npm package called sexy, because then, everyone can just
      // require('sexy');
    });
  }, seconds*1000);
})();

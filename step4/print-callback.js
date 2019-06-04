var https = require('https');   

function getHTML (options, callback) {
    https.get(options, function (response) {
        
        var answer = ""

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
          console.log('Chunk Received. Length:', data.length)
          answer += data;
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
            callback(answer);
        });
      
      });
  
  }
  
  function printHTML (html) {
    console.log("answer:" , html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
  getHTML(requestOptions, printHTML)
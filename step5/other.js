var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  function printHTML (html) {
    console.log("answer:" , html);
  }
  
  
  getHTML(requestOptions, printHTML);
'use strict'
let unirest = require('unirest');

function setBucket(bucketName, ticketId, apiKey) {
  console.log(ticketId);

  let API_KEY = apiKey;
  let FD_ENDPOINT = "movavi";
  let PATH = "/api/v2/tickets";
  let URL = "https://" + FD_ENDPOINT + ".freshdesk.com" + PATH + "/" + ticketId;

  let fields = {
    'custom_fields': {
      'cf_bucket': bucketName
    }
  };

  let Request = unirest.put(URL);

  Request.auth({
    user: API_KEY,
    pass: "X",
    sendImmediately: true
  })
    .type('json')
    .send(fields)
    .end(function (response) {
      // console.log(response.body);
        console.log("update.email Response Status : " + response.status);
      if (response.status != 200) {
        console.log('----------------------------');
        console.log(response.body);
        console.log('----------------------------');
        console.log("update.email X-Request-Id :" + response.headers['x-request-id']);
      }
    });
}

function check(words_arr, ticketContent) {
  let isFound = false;
  words_arr.forEach(word => {
    if (ticketContent.includes(word)) {
      isFound = true;
    }    
  });
  return isFound;
}

exports = {
    setBucket: setBucket,
    check: check
}
var https = require("https");

var hostname = "";
var path = "";
var apiKey = "";

var predict = function predict(dataInput) {

    return new Promise((resolve, reject) => {

        if (typeof apiKey == "undefined" || apiKey.length == 0) {
            reject("API Key not set! Set API key first!");
        }

        if (typeof hostname == "undefined" || hostname.length == 0) {
            reject("Host name not set! Set host name first!");
        }

        if (typeof path == "undefined" || path.length == 0) {
            reject("Path not set! Set path first!");
        }

        var data = {
            Inputs: dataInput , GlobalParameters: {}
        }

        var dataString = JSON.stringify(data)

        var method = 'POST'
        var headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey };

        var options = {
            host: hostname,
            port: 443,
            path: path,
            method: 'POST',
            headers: headers
        };

        var reqPost = https.request(options, function (res) {
            res.on('data', function (d) {
                var jsonObject = JSON.parse(d);
                resolve(jsonObject.Results.output1.value);
            });
        });

        reqPost.write(dataString);
        reqPost.end();
        reqPost.on('error', function (e) {
            reject(e);
        });

    });
}

exports.setAPIKey = function (key) {
    apiKey = key;
}

exports.setHostAndPath = function (newHostname, newPath) {
    hostname = newHostname;
    path = newPath;
}

exports.predict = predict;
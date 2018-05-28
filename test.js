var ml = require('./index');

var data = {
    "ColumnNames": ["operator", "number1", "number2", "result"],
    "Values": [["minus", "50", "15", "35"], ["plus", "20", "50", "70"]]
}

// Set API Key here
ml.setAPIKey("<your-api-key-here>");

var hostname = "ussouthcentral.services.azureml.net";
var path = "/workspaces/d6591b016ab34582b55ef6d3fea46aed/services/a6fc3256145b4b33a0657ebe439e3f8e/execute?api-version=2.0&details=true"
ml.setHostAndPath(hostname, path);

var prediction = ml.predict(data).then(printResult);

function printResult(predictions) {
    console.dir(predictions);
}
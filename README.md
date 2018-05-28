# Azure Machine Learning Web Service Wrapper

A library that makes it easy to call a published machine learning model from Node.js.

Set your API key, host and path according to your Azure ML subscription. See `test.js` for an example:

```
var ml = require('./index');

var data = {
    "ColumnNames": ["operator", "number1", "number2", "result"],
    "Values": [["minus", "50", "15", "35"], ["plus", "20", "50", "70"]]
}

// Set API Key here
ml.setAPIKey("yz08LlHadvd9w4sDzdq/kRUXpOVI7+MwHoq9DWS8CPFbJ0nVQ12VUf1ShIzq6aedHFL/YssZkA9iEeRI/LxcSA==");

var hostname = "ussouthcentral.services.azureml.net";
var path = "/workspaces/d6591b016ab34582b55ef6d3fea46aed/services/a6fc3256145b4b33a0657ebe439e3f8e/execute?api-version=2.0&details=true"
ml.setHostAndPath(hostname, path);

var prediction = ml.predict(data).then(printResult);

function printResult(predictions) {
    console.dir(predictions);
}
```

Have fun predicting :-)
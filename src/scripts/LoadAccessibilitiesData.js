var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "ap-northeast-2"
});

console.log("Writing entries to Accessibilities table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var accessibilitiesData = 
  JSON.parse(fs.readFileSync('../components/data/check_list_acc.json', 'utf8'));

accessibilitiesData.forEach(function(Accessibility) {
  var params = {
    TableName: "Accessibility",
    Item: {
      "text": Accessibility.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for accessibility",
                    Accessibility.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", Accessibility.text, "to table.")
  })
});
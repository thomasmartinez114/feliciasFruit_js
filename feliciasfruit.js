var businessName = "Felicia's Fruit Stand";
var businessMotto = "Buy Felicia!";

var fruitNames = ["Apple","Orange", "Pear", "Grape"];
var fruitPrices = [1.00, 1.25, 1.50, 1.75];
var fruitSales = [50, 25, 15, 10];

for (var i = 0; i < fruitNames.length; i = i + 1) {
   console.log("Total", fruitNames[i], "sales are", fruitPrices[i] * fruitSales[i]);
}
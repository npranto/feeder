'use strict'

const jsonfile = require('jsonfile');
const newsSourceJSON = "./../sources/news-sources.json";


let returnJSON;

jsonfile.readFile(newsSourceJSON, function(err, obj) {
  console.dir(obj)
  returnJSON = obj;
  console.log("returnJSON", returnJSON);
  returnJSON['NEW'] = "HELLO WORLD";
  jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
})

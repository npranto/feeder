'use strict'

const jsonfile = require('jsonfile');
const uuidV4 = require('uuid/v4');

const newsSourceJSON = "./../sources/news-sources.json";

let returnJSON = {};

function getAllNewsSources(){
  returnJSON = jsonfile.readFileSync(newsSourceJSON);
  return returnJSON;
}

function addNewsSourcesIds(){
  jsonfile.readFile(newsSourceJSON, function(err, obj) {
    returnJSON = obj;
    for(let i=0; i<returnJSON.newsSources.length; i++){
      let currSource = returnJSON.newsSources[i];
      currSource['id'] = uuidV4();
    }
    jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
  })
}

addNewsSourcesIds();

'use strict'

const jsonfile = require('jsonfile');
const uuidV4 = require('uuid/v4');

const newsSourceJSON = "./../sources/news-sources.json";

let returnJSON;

function reset(){
  returnJSON = {};
}

function getAllNewsSources(){
  jsonfile.readFile(newsSourceJSON, function(err, obj) {
    returnJSON = obj;
    console.log(returnJSON);
    return returnJSON;
  })
}

function addNewsSourcesIds(){
  jsonfile.readFile(newsSourceJSON, function(err, obj) {
    returnJSON = obj;
    console.log(returnJSON);
    // for(let i=0; i<returnJSON.newsSources.length; i++){
    //   let currSource = returnJSON.newsSources[i];
    //   currSource['id'] = uuidV4();
    // }
    // console.log(returnJSON);
    // jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
  })
}


getAllNewsSources();
// addNewsSourcesIds();
// reset();

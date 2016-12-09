'use strict'

/*
 SCRIPT
  populateNewsSources.js

 USAGE
  By default, running populateNewsSources.js will create an "id" key with a random uuid value for each newsSource
  objects inside news-sources.json.

 COMMAND
  - go into project directory on command line
  - move to 'assets/scripts'
  - run 'npm run-script pop-source-ids'
*/

const jsonfile = require('jsonfile');
const uuidV4 = require('uuid/v4');
var _ = require('lodash');


const newsSourceJSON = "./../sources/news-sources.json";

let returnJSON = {};

function getAllNewsSources(){
  returnJSON = jsonfile.readFileSync(newsSourceJSON);
  return returnJSON;
}

function addNewsSourcesIds(){
  jsonfile.readFile(newsSourceJSON, function(err, obj) {
    returnJSON = obj;
    _.map(returnJSON.newsSources, function (currNewsSource) {
      currNewsSource['id'] = uuidV4();
    })
    jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
  })
}

function createNewsSourceObjWithLogoUrl() {
  jsonfile.readFile(newsSourceJSON, function(err, obj) {
    returnJSON = obj;
    _.map(returnJSON.newsSources, function (currNewsSource) {

      let currLogoUrl = currNewsSource.newsSourceLogo;

      let newsSourceFormat = getNewsSourceFormat(currLogoUrl);
      console.log(newsSourceFormat);

      let newsSourceTitle = getNewsSourceTitle(newsSourceFormat);
      console.log(newsSourceTitle);

      let updatedNewsSourceLogo = updateNewsSourceLogo(currLogoUrl);
      console.log(updatedNewsSourceLogo);

    })

    // jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
  })
}
function getNewsSourceFormat (currLogoUrl) {
  return _.replace(_.replace(currLogoUrl, '/Users/npranto/Downloads/feeder/assets/img/news-sources/', ''), '.png', '');
}
function getNewsSourceTitle(newsSourceFormat) {
  return newsSourceFormat.toUpperCase().split('-').join(' ');
}
function updateNewsSourceLogo(currLogoUrl) {
  return _.replace(currLogoUrl, '/Users/npranto/Downloads/feeder/', '');
}


///////////////////
createNewsSourceObjWithLogoUrl();
// addNewsSourcesIds();

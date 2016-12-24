'use strict'

/*
 SCRIPT
 populateNewsSources.js

 USAGE
 By default, running populateNewsSources.js will create generate an "id" key with a random uuid value inside news-sources.json

 COMMAND
 - go into project directory on command line
 - move to 'assets/scripts'
 - run 'npm run-script pop-source-ids'
 */

const jsonfile = require('jsonfile');
const uuidV4 = require('uuid/v4');
const _ = require('lodash');


const newsSourceJSON = "./../sources/news-sources.json";
let returnJSON = {};

// function getAllNewsSources() {
//     returnJSON = jsonfile.readFileSync(newsSourceJSON);
//     return returnJSON;
// }

function addNewsSourcesIds() {
    jsonfile.readFile(newsSourceJSON, function (err, obj) {
        returnJSON = obj;
        _.map(returnJSON.newsSources, function (currNewsSource) {
            currNewsSource['sourceId'] = uuidV4();
        });
        jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
    })
}

///////////////////
addNewsSourcesIds();

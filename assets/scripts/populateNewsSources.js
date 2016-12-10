'use strict'

/*
 SCRIPT
 populateNewsSources.js

 USAGE
 By default, running populateNewsSources.js will create news source objects with just "newsSourceLogo" property as an
 object inside news-sources.json. It will also generate an "id" key with a random uuid value within that object as well.

 COMMAND
 - go into project directory on command line
 - move to 'assets/scripts'
 - run 'npm run-script pop-source-ids'
 */

const jsonfile = require('jsonfile');
const uuidV4 = require('uuid/v4');
var _ = require('lodash');


const newsSourceJSON = "../sources/news-sources.json";

let returnJSON = {};

function getAllNewsSources() {
    returnJSON = jsonfile.readFileSync(newsSourceJSON);
    return returnJSON;
}

function addNewsSourcesIds() {
    jsonfile.readFile(newsSourceJSON, function (err, obj) {
        returnJSON = obj;
        _.map(returnJSON.newsSources, function (currNewsSource) {
            currNewsSource['id'] = uuidV4();
        })
        jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
    })
}

function createNewsSourceObjWithLogoUrl() {
    jsonfile.readFile(newsSourceJSON, function (err, obj) {
        if (err || (obj === undefined)) {
            const errorMessage = "[UNDEFINED] -- Check JSON Object for corrections";
            console.log(errorMessage);
            throw err;
            // const errorMessage = "[UNDEFINED] -- Check JSON Object for corrections";
            // return errorMessage + err;
        }
        returnJSON = obj;
            _.map(returnJSON.newsSources, function (currNewsSource) {
                if ((Object.keys(currNewsSource).length === 4) &&
                    (currNewsSource['newsSourceFormat']) &&
                    (currNewsSource['newsSourceTitle']) &&
                    (currNewsSource['newsSourceLogo'])
                ) {
                    let currLogoUrl = currNewsSource.newsSourceLogo;

                    let newsSourceFormat = getNewsSourceFormat(currLogoUrl);
                    let newsSourceTitle = getNewsSourceTitle(newsSourceFormat);
                    let updatedNewsSourceLogo = updateNewsSourceLogo(currLogoUrl);

                    currNewsSource['newsSourceFormat'] = newsSourceFormat;
                    currNewsSource['newsSourceTitle'] = newsSourceTitle;
                    currNewsSource['newsSourceLogo'] = updatedNewsSourceLogo;
                }
            })
            jsonfile.writeFileSync(newsSourceJSON, returnJSON, {spaces: 2});
    })
}
function getNewsSourceFormat(currLogoUrl) {
    return _.replace(_.replace(currLogoUrl, 'feeder/assets/img/news-sources/', ''), '.png', '');
}
function getNewsSourceTitle(newsSourceFormat) {
    return newsSourceFormat.toUpperCase().split('-').join(' ');
}
function updateNewsSourceLogo(currLogoUrl) {
    return _.replace(currLogoUrl, 'feeder/', '');
}


///////////////////
createNewsSourceObjWithLogoUrl();
addNewsSourcesIds();

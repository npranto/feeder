'use strict'

const jsonfile = require('jsonfile');
let newsSourceJSON = "./../data/news-sources.json";

jsonfile.readFile(newsSourceJSON, function(err, obj) {
  console.dir(obj)
})

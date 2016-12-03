angular.module('feeder')
  .constant('newsAPI', {
    "apiKey": "apiKey=API_KEY",
    "and": "&",
    "article": {
      "endpoint": "https://newsapi.org/v1/articles?",
      "source": "source=",
      "sortBy":{
        "top":"sortBy=top",
        "latest":"sortBy=latest",
        "popular":"sortBy=popular",
      },
    }
  })

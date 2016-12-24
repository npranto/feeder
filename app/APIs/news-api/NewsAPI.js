export default class NewsAPI {

    constructor() {
        this.apiKey = "apiKey=API_KEY",
        this.and =  "&",
        this.article =  {
            endpoint: "https://newsapi.org/v1/articles?",
            source: "source=",
            sortBy: {
                top: "sortBy=top",
                latest: "sortBy=latest",
                popular: "sortBy=popular",
            },
        }
    }

}


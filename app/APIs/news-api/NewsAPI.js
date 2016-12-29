export default class NewsAPI {

    constructor() {
        this.apiKey = "apiKey=981b122a68d54125b9ed9d2165e3b268",
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
        this.source = {
            endpoint: "https://newsapi.org/v1/sources?",
            category: "category="
        }
    }

}

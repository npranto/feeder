export default class NewsAPI {

    constructor() {
        this.apiKey = "apiKey=981b122a68d54125b9ed9d2165e3b268",
        this.and =  "&",
        this.article =  {
            endpoint: "https://newsapi.org/v1/articles?",
            source: "source=",
            sortBy: "sortBy="
        }
        this.source = {
            endpoint: "https://newsapi.org/v1/sources?",
            category: "category="
        }
    }

}

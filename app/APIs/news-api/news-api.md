DOCUMENTATION

Endpoints

    Using News API is simple. There are only 2 endpoints:
        GET https://newsapi.org/v1/articles
        GET https://newsapi.org/v1/sources
       
Articles

    GET https://newsapi.org/v1/articles
        Provides a list of live article metadata from a news source or blog (99% of the time this is the one you want!).

        Parameters
            source	(required) - The identifer for the news source or blog you want headlines from. Use the /sources endpoint to locate this or use the sources index.
            apiKey	(required) - Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
            sortBy	(optional) - Specify which type of list you want. The possible options are top, latest and popular. Note: not all options are available for all sources. Default: top.
                top	Requests a list of the source's headlines sorted in the order they appear on its homepage.
                latest	Requests a list of the source's headlines sorted in chronological order, newest first.
                popular	Requests a list of the source's current most popular or currently trending headlines.
    
    Request
        GET https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=API_KEY
        
    Result
        status	(string) - If the request was successful or not. Options: ok, error. In the case of error a message property will be populated.
        source	(string) - The identifier of the source requested.
        sortBy	(string) - Which type of article list is being returned. Options: top, latest, popular.
        articles	(array) The list of headline metadata requested.
            author	(string) - The author of the article.
            description	(string) - A description or preface for the article.
            title	(string) - The headline or title of the article.
            url	(string) - The direct URL to the content page of the article.
            urlToImage	(string) - The URL to a relevant image for the article.
            publishedAt	(string) - The best attempt at finding a date for the article, in UTC (+0).

Sources

    GET https://newsapi.org/v1/sources
        Provides a list of the news sources and blogs available on News API. You will need this to programmatically locate the identifier for the source you want articles from when querying the /articles endpoint.
    
        Parameters
            category	(optional) - The category you would like to get sources for.
            Possible options: business, entertainment, gaming, general, music, science-and-nature, sport, technology.
            Default: empty (all sources returned)
            language	(optional) - The 2-letter ISO-639-1 code of the language you would like to get sources for.
            Possible options: en, de, fr.
            Default: empty (all sources returned)
            country	(optional) - The 2-letter ISO 3166-1 code of the country you would like to get sources for.
            Possible options: au, de, gb, in, it, us.
            Default: empty (all sources returned)
    
    Request  
        GET https://newsapi.org/v1/sources?language=en
    
    Result:
        status	(string) - If the request was successful or not. Options: ok, error. In the case of error a message property will be populated.
        sources	(array) - A list of the news sources and blogs available on News API.
            id	(string) - The unique identifier for the news source. This is needed when querying the /articles endpoint to retrieve article metadata.
            name	(string) - The display-friendly name of the news source.
            description	(string) - A brief description of the news source and what area they specialize in.
            url	(string) - The base URL or homepage of the source.
            category	(string) - The topic category that the source focuses on.
            Possible options: business, entertainment, gaming, general, music, science-and-nature, sport, technology
            language	(string) - The 2-letter ISO-639-1 code for the language that the source is written in.
            Possible options: en, de, fr
            country	(string) - The 2-letter ISO 3166-1 code of the country that the source mainly focuses on.
            Available options: au, de, gb, in, it, us
            urlsToLogos	(object) - An object containing URLs to the source's logo. The logo is available in three sizes - small, medium and large.
                small	The URL to a small (width 200px) image of the source's logo.
                medium	The URL to a medium (width 400px) image of the source's logo.
                large	The URL to a large (width 600px) image of the source's logo.
            sortBysAvailable	(array) - The available headline lists for the news source. The possible options are top, latest and popular.
                top	Indicates this source can return a list of headlines sorted in the order they appear on the source' homepage.
                latest	Indicates this source can return a list of headlines sorted in chronological order, newest first.
                popular	Indicates this source can return a list of its current most popular headlines.


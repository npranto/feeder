import _ from 'lodash';
import moment from 'moment';
import getColors from 'get-image-colors';


export default class HomeController {

    constructor(HomeServices, NewsAPI) {
        this.HomeServices = HomeServices;
        this.NewsAPI = NewsAPI;

        this.newsCategories = [
            "Business",
            "Entertainment",
            "Gaming",
            "General",
            "Music",
            "Science & Nature",
            "Sport",
            "Technology"
        ];

        this.showNewsStory = false;
        this.showNewsCategory = false;
        this.showProgressBar = false;

        this.currentSourceId = "";

        this.coverColor = "background: white";

        this.randomHeadlines = [];

        this.getAllNewsSources();
        this.getRandomHeadlines();

    }

    getRandomHeadlines(){
        this.showNewsStory = true;

        const NEWS_LIMIT = 3;
        let counter = 0;
        let randomSourcesFormat = [];
        let routes = [];

        // gets news sources info from news-sources.json
        this.HomeServices.getAllNewsSources().then((response) => {
            let newsSources = response.data.newsSources;

            // gets 10 unique newsSourceFormat and stores them in randomSourcesFormat
            while(counter < NEWS_LIMIT){
                let randomValue = _.random(newsSources.length);
                if (_.indexOf(randomSourcesFormat, randomValue) === -1){
                    let eachRoute = this.NewsAPI.article.endpoint +
                        this.NewsAPI.article.source +
                        newsSources[randomValue].newsSourceFormat +
                        this.NewsAPI.and +
                        this.NewsAPI.article.sortBy +
                        'top' +
                        this.NewsAPI.and +
                        this.NewsAPI.apiKey;
                    routes.push(eachRoute);
                    counter++;
                }
            }

            console.log(routes);

            // window.$.when(
            //     window.$.ajax({
            //         url: routes.pop(),
            //         success: (data) => {
            //             this.randomHeadlines = _.union(this.randomHeadlines, data.articles);
            //         }
            //     }),
            //     window.$.ajax({
            //         url: routes.pop(),
            //         success: (data) => {
            //             this.randomHeadlines = _.union(this.randomHeadlines, data.articles);
            //         }
            //     }),
            //     window.$.ajax({
            //         url: routes.pop(),
            //         success: (data) => {
            //             this.randomHeadlines = _.union(this.randomHeadlines, data.articles);
            //         }
            //     })
            // ).then(() => {
            //     console.log("HEADLINES: ", this.randomHeadlines);
            //     this.articles = this.randomHeadlines;
            //     this.articles = this.formatArticles(this.articles);
            //     this.articles = this.addReactionProps(this.articles);
            //     this.articles = this.addActionProps(this.articles);
            //     console.log(this.articles);
            //     this.showNewsStory = true;
            //     this.showNewsCategory = false;
            // });

        })
    }

    changeReactionStatus(reaction, story) {
        console.log(story);
        if (reaction === "heart") {
            story.disableHeart = !story.disableHeart;
            story.disableDislike = false;
        } else {
            story.disableDislike = !story.disableDislike;
            story.disableHeart = false;
        }
    }

    changeActionStatus(action, story) {
        if (action === "interesting") {
            story.showInterest = !story.showInterest;
        } else {
            story.saveNewsStory = !story.saveNewsStory;
        }
    };

    alterTLPGalleryDisplay(sourceId) {
        console.log(this.currentSourceId);
        this.showNewsSourcesGallery = !this.showNewsSourcesGallery;
        this.currentSourceId = sourceId;
        console.log(this.currentSourceId);
    }

    getNewsBySourceId(sortBy) {
        // change view by article or category
        this.showNewsStory = true;
        this.showNewsCategory = false;
        this.showProgressBar = true;

        setTimeout(() => {
            this.HomeServices.getAllNewsSources().then((response) => {
                let newsSources = response.data.newsSources;
                _.map(newsSources, (newsSourceObj) => {
                    if (newsSourceObj.sourceId === this.currentSourceId) {
                        this.newsSource = newsSourceObj;
                        this.colorizeCover(newsSourceObj.newsSourceLogo);
                        this.HomeServices.getNewsFromSource(newsSourceObj.newsSourceFormat, sortBy)
                            .then((response) => {
                                this.showProgressBar = false;
                                this.articles = this.formatArticles(response.data.articles);
                                this.articles = this.addReactionProps(response.data.articles);
                                this.articles = this.addActionProps(response.data.articles);
                                console.log(this.articles);
                                // this.colorizeCover(newsSourceObj.newsSourceLogo);
                            })
                    }
                })
            })
        }, 1500);
        this.showNewsSourcesGallery = !this.showNewsSourcesGallery;
    }

    addReactionProps(articles){
        _.map(articles, (article) => {
            // adds 'disableHeart' and 'disableDislike' properties to each article
            article.disableHeart = false;
            article.disableDislike = false;
            return article;
        })
        return articles;
    }
    addActionProps(articles){
        _.map(articles, (article) => {
            // adds 'showInterest' and 'saveNewsStory' properties to each article
            article.showInterest = false;
            article.saveNewsStory = false;
            return article;
        })
        return articles;
    }

    formatArticles(articles) {
        _.map(articles, (article) => {

            // formats story description by adding ellipsis at the end
            let eachDesc = article.description;
            while (article.description && (article.description.length > 0) && (!this.isLetter(eachDesc.charAt(eachDesc.length - 1)))) {
                eachDesc = eachDesc.slice(0, -1);
            }
            eachDesc = eachDesc + "... ";
            article.description = eachDesc;

            // formats published date for each story using moment.js library
            article.publishedAt = moment(article.publishedAt).fromNow();
            return article;
        })
        return articles;
    }

    isLetter(char) {
        return (char.length === 1) && (char.match(/[a-z]/i));
    }

    colorizeCover(logoPath) {
        getColors(logoPath, (err, colors) => {
            if (err) {throw err}
            else {
                console.log(colors);
                this.setCoverColor(colors);
            }
        })
    }

    setCoverColor(colors) {
        let result = "";
        let allColors = [];

        _.map(colors, (color)=>{
            let eachColor = "rgba" + "(" +color._rgb.join() + ")";
            allColors.push(eachColor);
        })

        result = "background: radial-gradient(circle, " +  allColors.join() + ")";
        this.coverColor = result;
    }


    getNewsByCategory(category){
        // change view by article or category
        this.showNewsStory = false;
        this.showNewsCategory = true;
        this.showProgressBar = true;

        let currCategory = this.formatCategory(category);
        this.HomeServices.getNewsByCategory(currCategory)
            .then((response) => {
                this.showProgressBar = false;
                this.sources = response.data.sources;
                this.addNewsTags(this.sources);
                console.log("SOURCES...", this.sources);
            })
    }

    formatCategory(category){
        return category.toLowerCase().replace(/ /g , '-').replace(/&/g , 'and');
    }

    addNewsTags(sources){
      let allTags = [];
      _.map(sources, (source)=>{
        if (source.category) {
          allTags.push(source.category);
        }
        _.map(source.sortBysAvailable, (sortBy)=>{
          allTags.push(sortBy);
        })
        source.tags = allTags;
        allTags = [];
      })
    }

    getAllNewsSources() {
        this.HomeServices.getAllNewsSources()
            .then((response) => {
                this.newsSources = response.data.newsSources;
            })
    }


}

HomeController.$inject = ['HomeServices', 'NewsAPI'];

import _ from 'lodash';
import moment from 'moment';

export default class HomeController {

    constructor(HomeServices) {
        this.HomeServices = HomeServices;
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
        this.getAllNewsSources();
    }

    changeReactionStatus(reaction) {
        if (reaction === "heart") {
            this.disableHeart = !this.disableHeart;
            this.disableDislike = false;
        } else {
            this.disableDislike = !this.disableDislike;
            this.disableHeart = false;
        }
    }

    changeActionStatus(action) {
        if (action === "interesting") {
            this.showInterest = !this.showInterest;
        } else {
            this.saveNewsStory = !this.saveNewsStory;
        }
    };


    alterTLPGalleryDisplay(sourceId) {
        this.showNewsSourcesGallery = !this.showNewsSourcesGallery;
        this.getNewsBySourceId(sourceId);
    }

    getNewsBySourceId(sourceId) {
        setTimeout(() => {
            this.HomeServices.getAllNewsSources().then((response) => {
                let newsSources = response.data.newsSources;
                _.map(newsSources, (newsSourceObj) => {
                    if (newsSourceObj.sourceId === sourceId) {
                        this.newsSource = newsSourceObj;
                        this.HomeServices.getNewsFromSource(newsSourceObj.newsSourceFormat)
                            .then((response) => {
                                this.articles = this.formatArticles(response.data.articles);
                                console.log(this.articles);
                            })
                    }
                })
            })
        }, 1500);
    }

    formatArticles(articles) {
        _.map(articles, (article) => {

            // formats story description by adding ellipsis at the end
            let eachDesc = article.description;
            while (!this.isLetter(eachDesc.charAt(eachDesc.length - 1))) {
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

    getNewsByCategory(category){
        let currCategory = this.formatCategory(category);
        this.HomeServices.getNewsByCategory(currCategory)
            .then((response) => {
                this.sources = response.data.sources;
                console.log(this.sources);
            })
    }

    formatCategory(category){
        return category.toLowerCase().replace(/ /g , '-').replace(/&/g , 'and');
    }

    getAllNewsSources() {
        this.HomeServices.getAllNewsSources()
            .then((response) => {
                this.newsSources = response.data.newsSources;
            })
    }

}

HomeController.$inject = ['HomeServices'];

























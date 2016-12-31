import _ from 'lodash';
import moment from 'moment';
import getColors from 'get-image-colors';


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

        this.showNewsStory = false;
        this.showNewsCategory = false;
        this.showProgressBar = false;

        this.currentSourceId = "";

        this.coverColor = "background: white";

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
                                console.log(this.articles);
                                // this.colorizeCover(newsSourceObj.newsSourceLogo);
                            })
                    }
                })
            })
        }, 1500);
        this.showNewsSourcesGallery = !this.showNewsSourcesGallery;
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

        result = "background: linear-gradient(to right, " +  allColors.join() + ")";
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

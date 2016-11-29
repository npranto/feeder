Structure of Feeder

    app/
    ----- shared/   // acts as reusable components or partials of our site
    ---------- news-story/
    --------------- newsStoryDirective.js
    --------------- newsStoryController.js
    --------------- news-story.html
    ----- components/   // each component is treated as a mini view
    ---------- home/
    --------------- homeController.js
    --------------- homeService.js
    --------------- home-view.html
    ----- app.module.js
    ----- app.routes.js
    assets/
    ----- img/      // Images and icons for your app
    ---------- cnn.png
    ---------- feeder-logo.png
    ---------- latest-news-icon.png.png
    ---------- popular-news-icon.png
    ---------- top-news-icon.png    
    ----- css/      // All styles and style related files (SCSS or LESS files)
    ---------- partials/
    --------------- home.css
    --------------- news-story.css
    ---------- format.css
    ---------- main.css
    ---------- material-box-shadows.css
    ----- js/       // JavaScript files written for your app that are not for angular
    ----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
    index.html

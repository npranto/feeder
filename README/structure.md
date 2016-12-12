Structure of Feeder

    app/

    ----- APIs/
    ---------- news-api/
    --------------- news-api.md
    --------------- newsAPI.js
    ----- app.loaders/
    ---------- includeLodashLibrary.js
    ----- shared/   // acts as reusable components or partials of our site
    ---------- news-story/
    --------------- newsStoryDirective.js
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
    ---------- news-sources/[ALL NEWS SOURCE LOGOS]
    ---------- TLP-blocks/
    --------------- latest-news-icon.png
    --------------- popular-news-icon.png
    --------------- top-news-icon.png
    ---------- feeder-logo.png
    ----- css/      // All styles and style related files (SCSS or LESS files)
    ---------- partials/
    --------------- home.css
    --------------- news-story.css
    ---------- format.css
    ---------- main.css
    ---------- material-box-shadows.css
    ----- scripts/      // All local scripts to run locally on the command line
    ---------- node_modules/
    ---------- package.json
    ---------- populateNewsSources.js
    node_modules/
    README
    ----- structure.md   // map of file structure of feeder
    .gitignore
    index.html
    package.json

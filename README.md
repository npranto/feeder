# feeder
Feeder - All You Need to Know

Structure of Feeder

    app/
    ----- APIs/
    ---------- news-api/
    --------------- news-api.md
    --------------- NewsAPI.js
    ----- components/   // each component is treated as a mini view
    ---------- home/
    --------------- home.html
    --------------- HomeController.js
    --------------- homeRoutes.js
    --------------- HomeServices.js
    --------------- index.js
    ----- shared/   // acts as reusable components or partials of our site
    ---------- news-story/
    --------------- news-story.html
    --------------- NewsCategoryDirective.js

    ----- app.module.js
    ----- app.routes.js

    assets/
    ----- css/      // All styles and style related files (SCSS or LESS files)
    ---------- partials/
    --------------- home.css
    --------------- news-story.css
    ---------- format.css
    ---------- main.css
    ---------- material-box-shadows.css
    ----- img/      // Images and icons for your app
    ---------- news-sources/[ALL NEWS SOURCE LOGOS]
    ---------- TLP-blocks/
    --------------- latest-news-icon.png
    --------------- popular-news-icon.png
    --------------- top-news-icon.png
    ---------- feeder-logo.png
    ----- scripts/      // All local scripts to run locally on the command line
    ---------- node_modules/
    ---------- package.json
    ---------- populateNewsSources.js
    ----- sources/      news-source data
    ---------- news-sources.json

    node_modules/

    README
    ----- structure.md   // map of file structure of feeder

    .babelrc
    .gitignore
    index.html
    package.json
    webpack.config.js

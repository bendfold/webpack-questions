# webpack-questions
## Background image path issue

I have 3 npm tasks set up.
``serve``
``static`` (this won't go into the final set up, just for testing)
``prod``

My output folder structure looks like this
	
	dist
	|---images
	|---styles (prod only)
		index.html
		app.js

If I run ``serve`` or ``static``, the images paths in the HTML and CSS are as expected and everything works fine, because the CSS is just in the head of the page.

However, if I run ``prod`` only the HTML image path is correct.

The ``background-image`` in the CSS looks like this: ``images/ubuntu-512.png``.

Whereas I want it to look like this: ``../images/ubuntu-512.png``.

I guess this must be some mistake I have made in the configuration options for ExtractTextPlugin?

### WINDOWS RESULT
On Windows the build completes but the background image paths are broken.
There are no errors in the terminal.

### MAC RESULT
On Mac the build errors out with the following messages, the HTML and JS build but the CSS is not there at all.

    ERROR in ./~/css-loader?{"importLoaders":1}!./~/stylus-loader?{"use":[null]}!./src/styles/app.styl
    Module build failed: Error: Plugin should be a function
        at /Users/owen/_dev/webpack-questions/node_modules/stylus-loader/index.js:68:17

AND

    ERROR in ./src/styles/app.styl
    Module build failed: ModuleBuildError: Module build failed: Error: Plugin should be a function
        at /Users/owen/_dev/webpack-questions/node_modules/stylus-loader/index.js:68:17

AND

    ERROR in /Users/owen/_dev/webpack-questions/node_modules/extract-text-webpack-plugin/loader.js??ref--3-0!/Users/owen/_dev/webpack-questions/node_modules/style-loader/index.js!/Users/owen/_dev/webpack-questions/node_modules/style-loader/index.js!/Users/owen/_dev/webpack-questions/node_modules/css-loader/index.js??ref--3-3!/Users/owen/_dev/webpack-questions/node_modules/stylus-loader/index.js??ref--3-4!/Users/owen/_dev/webpack-questions/src/styles/app.styl doesn't export content

AND

    ERROR in ./~/css-loader?{"importLoaders":1}!./~/stylus-loader?{"use":[null]}!./src/styles/app.styl
    Module build failed: Error: Plugin should be a function
        at /Users/owen/_dev/webpack-questions/node_modules/stylus-loader/index.js:68:17






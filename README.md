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

If I run ``serve`` or ``static``, the images paths in the HTML and CSS are as expected and everything works fine.

However, if I run ``prod`` only the HTML image path is correct, because the CSS is just in the head of the page.

The ``background-image`` in the CSS looks like this: ``images/ubuntu-512.png``.

Whereas I want it to look like this: ``../images/ubuntu-512.png``.

I guess this must be some mistake I have made in the configuration options for ExtractTextPlugin?



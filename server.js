var express = require('express')
	app = express(),
    port = process.env.PORT || 3000;

//var app = express();

// tell express where to look for static assets
//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${ port }`);
});
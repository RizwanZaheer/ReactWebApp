var express = require('express'),
	app = express(),
    port = process.env.PORT || 3000;


// tell express where to look for static assets
//app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
	if (req.header['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${ port }`);
});

var express = require('express'),
    path = require('path'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    if (!req.hostname.match(/^www\./)) {
        res.redirect(301, 'http://www.moistflap.com');
    }
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});

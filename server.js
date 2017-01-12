

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('babel-register');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Localhost');


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.post('/api/auth', function(req, res) {
    if(!req.body.hasOwnProperty('username') ||
        !req.body.hasOwnProperty('password')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }
    const username = req.body.username;
    const password = req.body.password;

    models.User.findOne({ 'name': username, 'password' : password }, 'name', function (err, user) {
        if (err) return res.send(false);
        else return user == null? res.send(false) : res.send(user.id);

    })

});


app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

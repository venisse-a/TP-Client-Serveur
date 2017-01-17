var API = require('json-api');
var APIError = API.types.Error;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('babel-register');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect('mongodb://localhost/Localhost');


app.set('port', process.env.PORT || 3000);
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


var models = {
    User: require('./Models/user').model,
    Vehicle: require('./Models/vehicle').model
};

var registry_templates = {
    users: require('./Models/user').registry,
    vehicles: require('./Models/vehicle').registry

};

var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry(registry_templates, { dbAdapter: adapter });

var docs = new API.controllers.Documentation(registry, { name: 'Library API' });
var controller = new API.controllers.API(registry);
var front = new API.httpStrategies.Express(controller, docs);

var apiReqHandler = front.apiRequest.bind(front);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
    res.header('Access-Control-Allow-Methods',
        'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

const db = [
    'users',
    'vehicles'
];

app.options('*', function(req, res) {
    res.send();
});

app.get('/api', front.docsRequest.bind(front));

app.route(`/api/:type(${db.join('|')})`).get(apiReqHandler).post(apiReqHandler)
    .patch(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id`).get(apiReqHandler).patch(apiReqHandler)
    .delete(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id/relationships/:relationship`)
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler)
    .delete(apiReqHandler);

app.post('/login', function(req, res) {
    models.User.findOne({ 'username' :  req.body.username, 'password':req.body.password }, function(err, user) {
        if (err)
            res.redirect('http://localhost:3000/login');
        else if (user == null)
            res.redirect('http://localhost:3000/login');
        else
            res.redirect('http://localhost:3000/profile');
            res.send(user);
    })
});

app.post('/register', function(req, res) {
    models.User.findOne({ 'username' :  req.body.username, 'password':req.body.password }, function(err, user) {
        if (user)
            res.redirect('http://localhost:3000/register');
        else
            var user_add = new User({
                username: req.body.username,
                password: req.body.password
            });
            res.redirect('http://localhost:3000/profile');
            res.send(user_add);
    })
});

app.post('/vehicle', function(req, res) {
    models.Vehicle.findOne({ 'reference' :  req.body.reference }, function(err, vehicle) {
        if (vehicle){
            res.redirect('http://localhost:3000/profile');
            console.log('Vehicle reference already exists');
        }
        else {

            var vehicle_add = new Vehicle({
                reference: req.body.reference,
                user: this.props.user,
                start: req.body.start,
                end:req.body.end,
                start_time:req.body.date
            });
            res.redirect('http://localhost:3000/profile');
            res.send(vehicle_add);
        }
    })
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});




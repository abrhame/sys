var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {

  const os = require('os');
  const host = os.hostname();
  const patform = os.patform;
  const arch = os.arch();
  const cpus = os.cpus();
  const network = os.networkInterfaces();
  const uptime = os.uptime();

  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline,
    host:host
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(3007);
console.log(`Server is listening on "http://localhost:3007"`);
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' and 'assets' folders
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');

const routes = require('./server/routes/soccerRouters.js');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

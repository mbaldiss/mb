const express = require('express');
const router = require('./app/routes/api-route');

const app = express();

app.use('/', router);

app.listen(3000, function(){
    console.log('listening in port 3000...');
});


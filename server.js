
const express = require('express');

const serverConfig = require('config\server.config.js')

const app = express();

// ()=> is a callback function
app.listen(serverConfig.PORT,()=>{
    console.log('Server started on port ${serverConfig.PORT} ');
});


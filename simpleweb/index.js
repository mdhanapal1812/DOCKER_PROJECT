const express  = require('express');

    const app = express();

    app.get('/',(req,res)=>{
        res.send('This is my first basic docker project to understand the working of docker.');
    });

    app.listen(8080, () =>{
        console.log('Listening on port 8080');
    });
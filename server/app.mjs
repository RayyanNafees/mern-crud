import express from 'express'
// import open from 'open';

// const express = require('express');

var app = express()
app.use(express.static('./client/build/'))

app.get('/', (req, res)=> res.render('index.html'))

app.get('/t', (req, res)=> res.send('index.html'))


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});

// export default app;
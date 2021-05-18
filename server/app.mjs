import express from 'express'
// import open from 'open';

// const express = require('express');

var app = express()
app.use(express.static('./client/build/'))

app.get('/', (req, res)=> res.render('index.html'))

app.get('/t', (req, res)=> res.send('index.html'))


export default app;
// app.listen(3000, ()=> {
//     console.log('Hosting at http://localhost:3000/');
//     open('http://localhost:3000/');
// })
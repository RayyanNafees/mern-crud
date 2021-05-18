import express, {static as _static} from 'express'
import open from 'open';

var app = express()
app.use(_static('./client/build/'))

app.get('/', (req, res)=> res.render('index.html'))

// app.listen(3000, ()=> {
//     console.log('Hosting at http://localhost:3000/');
//     open('http://localhost:3000/');
// })
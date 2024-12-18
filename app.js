const express = require('express');
const app = express();
const port = 3001;

const bacheca = require ('./data/blog')
app.use(express.static('public'))

app.get('/', (req,res) => {
  res.send('Server del mio blog')
});

app.get('/bacheca', (req,res) => {
  const listPost= bacheca.map(cibo => cibo.titolo)
  const counterFood = listPost.length
  let newArray = {
    "list" : listPost,
    "length" : counterFood
  }
  res.json(newArray)
})

app.get('/img', (req,res) => {
  const title = req.query.titolo;
  const image = bacheca.filter(photo => photo.title == title).immagine
  console.log(image)
  res.send(`<img src=${image}>`)
})

app.listen(port, () => {
  console.log( 'la porta sta funzionando')
})
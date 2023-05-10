import express from 'express';
import { createPage } from './pages/helper.js';

const app = express();

app.use('/', express.static('public'));

app.get('/', function (req, res) {
    res.write(createPage('Home', 'home'))
})

app.get('/artista', function (req, res) {
    res.write(createPage('Perfil de Artista', 'artista'))
})

app.get('/comprador', function (req, res) {
    res.write(createPage('Perfil de Comprador', 'comprador'))
})

app.listen(1234);
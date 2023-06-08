import express from 'express';
import UsersRoute from './routes/users.routes.js';
import UsersRouteApi from './api/routes/users.api.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/api', express.json());

app.use('/', express.static('public'));

app.use(UsersRoute);

app.use('/api', UsersRouteApi);

app.listen(1234, function(){ 
    console.log('Servidor corriendo en el host http://localhost:1234')
})
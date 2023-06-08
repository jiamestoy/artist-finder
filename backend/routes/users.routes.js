import express from 'express';
import * as controller from '../controllers/users.controllers.js';

const route = express.Router();

route.get('/', controller.getHome);
route.get('/artists', controller.getArtists);
route.get('/artists/:idArtist', controller.getArtistProfile);
route.get('/buyers', controller.getBuyers);
route.get('/buyers/:idBuyer', controller.getBuyerProfile);
route.get('/login', controller.getLogin);
route.get('/success', controller.createNewUserSuccessPage);
route.get('/signup', controller.getSignup);

export default route;
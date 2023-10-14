import express from 'express';
import Contacts from '../controllers/Contacts';

const routes = express.Router()

routes.post(
    '/contact/create',
    Contacts.create,
  );

export default routes;
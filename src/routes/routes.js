import express from 'express';
import Contacts from '../controllers/Contacts';

const routes = express.Router()

routes.post(
    '/contact/create',
    Contacts.create,
);

routes.get(
    '/contact/fetch/:contactId',
    Contacts.fetchById,
);

export default routes;
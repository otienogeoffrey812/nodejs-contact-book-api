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

routes.get(
    '/contacts/fetchAll',
    Contacts.fetchAll,
);

export default routes;
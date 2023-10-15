import express from 'express';
const app = express()
import routes from './routes/routes';
import db from './database/models';

app.use(express.json())

db.sequelize.sync();

// prefix route api/v1
const routeBase = '/api/v1';

app.use(routeBase, routes);

export default app;
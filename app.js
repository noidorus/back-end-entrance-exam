import express, { json } from 'express';
import process from 'node:process';
import routes from './src/routes/index.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 3000;
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API пример',
      version: '1.0.0',
      description: 'Пример REST API с CRUD-операциями для ресурса "Cartes.io"',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: `Локальный сервер, использующий порт ${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

app.use(json());
app.use('/docs', serve, setup(specs));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

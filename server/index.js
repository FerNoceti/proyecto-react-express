import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/api', (req, res) => {
  res.send({ message: 'Hello' });
});


// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

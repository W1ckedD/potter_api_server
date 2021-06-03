const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/connectDB');
connectDB();
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));

app.get('/api', (req, res) => res.json({ devServer: 'Express', path: '/' }));
app.get('/', (req, res) => res.json({ app: 'Express' }));


const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`));
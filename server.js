const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ app: 'Express' }));


const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`));
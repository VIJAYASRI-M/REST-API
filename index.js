require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const dbConnection = require('./dbConnection.js');
const router = require('./routes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
dbConnection();

app.use('/todos',router);

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Node MongoDB Project' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});




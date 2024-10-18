require('dotenv').config();
const express = require('express');
const bookRouter = require('./routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const app = express();
const port = process.env.PORT || 3000;

// Load and parse the YAML file
const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname,'api', 'openapi.yaml'), 'utf8'));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Books Api Project' });
});

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/books', bookRouter);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

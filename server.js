const express = require('express');
const morgan = require('morgan');
const resourcesRouter = require('./src/routes/resources');
const { errorHandler, notFound } = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());            // body parsing
app.use(morgan('dev'));            // request logging

app.use('/api/resources', resourcesRouter);

app.use(notFound);                 // 404 handler
app.use(errorHandler);             // centralized error logging/response

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));


module.exports = app;

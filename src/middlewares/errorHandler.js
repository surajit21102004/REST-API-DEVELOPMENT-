const winston = require('winston');

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

exports.notFound = (req, res, next) => {
  res.status(404).json({ success:false, error: 'Route not found' });
};

exports.errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const payload = {
    success: false,
    error: err.message || 'Internal Server Error'
  };
  if (err.details) payload.details = err.details;
  logger.error({ message: err.message, stack: err.stack, path: req.path });
  res.status(status).json(payload);
};

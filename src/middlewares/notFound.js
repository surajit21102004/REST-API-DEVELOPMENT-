const Joi = require('joi');

const resourceSchema = Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().optional()
});

const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ success:false, error: error.message });
  next();
};

module.exports = { resourceSchema, validateBody };

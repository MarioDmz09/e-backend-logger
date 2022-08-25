const joi = require('joi');
const validateRequest = require('../services/dataValidator');

module.exports = validateCreateAplication = async (req, res, next) => {
  const schema = joi.object({
    id: joi.string().required(),
  });
  await validateRequest(schema, req.body, res, next);
}
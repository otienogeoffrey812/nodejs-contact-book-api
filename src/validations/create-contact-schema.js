const Joi = require('joi');

const createCompanyWalletSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  mobileNumber: Joi.string().min(12).regex(/(^\+254)[0-9]{9}$/).required(),
  emailAddress: Joi.alternatives().conditional('emailAddress', {
    is: "",
    then: Joi.any(),
    otherwise: Joi.string().email().lowercase().required(),
  }),
});

exports.validateTask = (task) => createCompanyWalletSchema.validate(task);

import joi from "joi-oid";

const schemaRecordsCreated = joi.object({
  user: joi.objectId().required().messages({
    "any.required": "User ID is required",
    "string.base": "User ID must be a valid ObjectId",
    "string.hex": "User ID must be a valid ObjectId",
  }),
  date: joi.date().default(Date.now).messages({
    "date.base": "Date must be a valid date",
  }),
  description: joi.string().min(5).max(255).required().messages({
    "string.base": "Description must be a string",
    "string.min": "Description must be at least 5 characters long",
    "string.max": "Description must not exceed 255 characters",
    "any.required": "Description is required",
  }),
  value: joi.number().min(0).max(10).required().messages({
    "number.base": "Value must be a number",
    "number.min": "Value must be a positive value",
    "number.max": "Value must must not exceed 10 digits",
    "any.required": "Value is required",
  }),
  isActive: joi.boolean().default(true).messages({
    "boolean.base": "Active status must be a boolean",
  }),
});

export default schemaRecordsCreated;

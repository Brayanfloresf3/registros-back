import joi from "joi-oid";

const schemaPropertyCreated = joi.object({
  name: joi.string().min(3).max(50).required().messages({
    "string.base": "Name must be a string",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name must not exceed 50 characters",
    "any.required": "Name is required",
  }),
  type: joi.string().min(3).max(20).required().messages({
    "string.base": "Type must be a string",
    "string.min": "Type must be at least 3 characters long",
    "string.max": "Type must not exceed 20 characters",
    "any.required": "Type is required",
  }),
  value: joi.number().min(0).required().messages({
    "number.base": "Value must be a number",
    "number.min": "Value must be a positive number",
    "any.required": "Value is required",
  }),
  user: joi.objectId().required().messages({
    "any.required": "User ID is required",
    "string.base": "User ID must be a valid ObjectId",
    "string.hex": "User ID must be a valid ObjectId",
  }),
});

export default schemaPropertyCreated;

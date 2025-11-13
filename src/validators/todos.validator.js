const { body, param } = require("express-validator");
const { generateValidator } = require("./base.validator");

class TodosValidator {
  static get getAll() {
    return generateValidator([]);
  }

  static get create() {
    return generateValidator([
      body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be string")
        .isLength({ min: 1 })
        .withMessage("Title should not be empty"),
      body("description")
        .optional()
        .isString()
        .withMessage("Description should be string"),
    ]);
  }

  static get update() {
    return generateValidator([
      param("id")
        .notEmpty()
        .withMessage("Param id is required")
        .isUUID()
        .withMessage("Invalid uuid of param id"),
      body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be string")
        .isLength({ min: 1 })
        .withMessage("Title should not be empty"),
      body("description")
        .optional()
        .isString()
        .withMessage("Description should be string"),
    ]);
  }

  static get delete() {
    return generateValidator([
      param("id")
        .notEmpty()
        .withMessage("Param id is required")
        .isUUID()
        .withMessage("Invalid uuid of param id"),
    ]);
  }
}

module.exports = TodosValidator;

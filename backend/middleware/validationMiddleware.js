import { check, validationResult } from "express-validator";

// Middleware for validating registration data
const validateRegister = [
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Middleware for validating login data
const validateLogin = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validateRegister, validateLogin };

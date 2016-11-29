
/**
 * Field configuration for Authentication field
 * @type {Object}
 */
export const AuthFields = {
  email: {
    required: true,
    pattern: 'isEmail'
  },
  password: {
    required: true,
    pattern: ''
  }
};
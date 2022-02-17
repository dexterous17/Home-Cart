module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de601236c51eeef0fc44dd9cf4cf85ac'),
  },
});

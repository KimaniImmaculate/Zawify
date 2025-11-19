module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'devsecret',
  mongoURI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/zawify',
  port: process.env.PORT || 4000
};


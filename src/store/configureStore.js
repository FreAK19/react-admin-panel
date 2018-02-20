if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod.js');
} else if (process.env.NODE_ENV === 'development') {
  module.exports = require('./store.dev.js');
} else {
  throw new Error('Unrecognized node environment');
}

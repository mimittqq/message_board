const path = require('path');

module.exports = {
  ROOT: path.join(__dirname, './app'),
  SERVER_ROOT: path.join(ROOT, './server'),
  CLIENT_ROOT: path.join(ROOT, './client'),
};
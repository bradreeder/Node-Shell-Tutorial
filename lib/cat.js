module.exports = (file) => {
  const fs = require('fs');

  const readStream = fs.createReadStream(file || process.argv[2]);
  readStream.pipe(process.stdout);
};

module.exports = {
  getFileSync(id) {
    return require('fs').readFileSync(`${id}.txt`, 'utf8');
  },
  getFile(id, cb) {
    return require('fs').readFile(`${id}.txt`, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        cb(data);
      }
    });
  },
  increment(o, k, v) {
    o[k] = (o[k] || 0) + v;
    return o;
  }
};

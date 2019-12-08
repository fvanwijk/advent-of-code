const path = require('path');

export function getFileSync(dir: string, id: string) {
  return require('fs').readFileSync(path.resolve(dir, `${id}.txt`), 'utf8').trim();
}

export function getFile(id: string, cb: (data: []) => any) {
  return require('fs').readFile(path.resolve(__dirname, `${id}.txt`), 'utf8', (err: Error, data: []) => {
    if (err) {
      console.log(err);
    } else {
      cb(data);
    }
  });
}

export function increment(o: any, k: string, v: number) {
  o[k] = (o[k] || 0) + v;
  return o;
}

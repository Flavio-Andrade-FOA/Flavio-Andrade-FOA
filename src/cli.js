import {getFile4} from './main.js';
import fs from 'fs';

const path = process.argv;
console.log(path[2], 'helooooo');



async function processText(args) {
  const path = args[2];
  const params = args[3];

  console.log(path, 'helooooo caminho');
  console.log(params, 'helooooo params');


  try {
    fs.lstatSync(path);
  } catch (error) {
    if(error.code === 'ENOENT'){
      console.log('file or direct no exist');
      return;
    }
  }

  if(fs.lstatSync(path).isFile()) {
    const result = await getFile4(path);
    console.log(result);

  }else if (fs.statSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    console.log(files);
    files.forEach(async (file) => {
      const post = await getFile4(`${path}/${file}`);
      console.log(file, post);
    });
  }

}


processText(path);


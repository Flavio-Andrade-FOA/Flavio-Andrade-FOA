import {getFile4} from './main.js';
import { httpValidate } from './http.js';
import fs from 'fs';
import chalk from 'chalk';

const path = process.argv;
console.log(path[2], 'helooooo');

function printLinks(validate, links, arquivo = '') {
  if(validate){
    console.log(
      chalk.yellow('Lista de Links validada'),
      chalk.black.bgBlue(arquivo),
      httpValidate(links)
    );
  }else {
    console.log(
      chalk.yellow('Lista de Links sem validar'),
      chalk.black.bgBlue(arquivo),
      links
    );
  }
}


async function processText(args) {
  const path = args[2];
  const params = args[3] === '--validate';

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
    printLinks(params,result);

  }else if (fs.statSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);

    files.forEach(async (file) => {
      const post = await getFile4(`${path}/${file}`);
      printLinks(params, post, file);
    });
  }

}


processText(path);


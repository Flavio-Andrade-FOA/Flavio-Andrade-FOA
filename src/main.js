import chalk from 'chalk';
import fs from 'fs';

// console.log(fs);
console.log(chalk.bgGreen('Hello my Frends'));

export class getFile {

    constructor(path) {
        this.path = path;
    }

    handleError(err){
        throw new Error(chalk.red(err.message));
    }

    getFilee(){
        fs.readFile(this.path, 'utf-8', function(err, data) {
            if (err) {
                this.handleError(err);
            }
            console.log(chalk.blue(data));
        });
    }
}

function handleError(err) {
    throw new Error(chalk.red(err.message));
}

export const getFile2 = async (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            return handleError(err);
        }
        console.log(chalk.green(data));
    });
};

// getFile2('./data/post1.md');



export function getFile3(path) {
    const encoding = 'utf-8';

    fs.promises
        .readFile(path, encoding)
        .then(function (data) {
            console.log('get3',data);
        }).catch(handleError);
}

export async function getFile4(path) {
    const encoding = 'utf-8';
    try {
        const result = await fs.promises.readFile(path, encoding);
        console.log(extraiLinks(result));
    } catch (error) {
        handleError(error);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

//getFile4('./data/post1.md');

export function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const links = [...texto.matchAll(regex)];
    return links.map((item) => ({[item[1]]: item[2]}));
}
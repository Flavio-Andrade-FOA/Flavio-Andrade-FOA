import chalk from 'chalk';
import fs from 'fs';

// console.log(fs);
console.log(chalk.bgGreen('Hello my Frends'));

export class getFile {

    constructor(path) {
        this.path = path;
    }

    handleError(err){
        console.log(err.message);
    }

    getFilee(){
        fs.readFile(this.path, 'utf-8', function(err, data) {
            if (err) {
                return this.handleError(err);
            }
            console.log(data);
        });
    }
}

const getFile2 = async (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(data);
    });
};

getFile2('./data/post1.md');

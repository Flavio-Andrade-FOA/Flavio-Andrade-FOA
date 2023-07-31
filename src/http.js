import fs from 'fs';

function extraiLinks(arrLinks){
  return arrLinks.map((item) => Object.values(item).join());
}

async function testLinks(arrLinks) {
  const arrStatus = await Promise.all(
    arrLinks.map(async(url) => {
      try {
        const statusCCode = await fetch(url);
        return statusCCode.status;

      } catch (error) {
        if(error.cause.code === 'ENOTFOUND'){
          return 'Link nao encontrado';

        } else {
          return 'Ocorreu um Erro na Busca';
        }
      }
    })
  );
  return arrStatus;

}

export async function httpValidate(links) {
  const result = await extraiLinks(links);
  const test = await testLinks(result);

  const parsedResult = links.map((item, index)=> ({
    ...item,
    'status': test[index]
  }));
  return parsedResult;
}
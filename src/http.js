function extraiLinks(arrLinks){
  return arrLinks.map((item) => Object.values(item).join());
}

export function httpValidate(links) {
  const result = extraiLinks(links);
  return result;
}
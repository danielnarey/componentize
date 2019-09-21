import throwIf from './throw-if';


const getElem = (doc, id) => {
  const elem = doc.getElementById(id);

  throwIf(
    !elem,
    `setComponent > doc.getElementById('${id}') returned ${elem}.`,
  );
  
  return elem;
};


export default getElem;

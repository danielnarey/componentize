import _addListeners from './add-listeners-internal';
import getElem from './get-elem';


const addListeners = (doc, id, listeners) => {
  const elem = getElem(doc, id);

  _addListeners(elem, listeners);
};


export default addListeners;

import _addListeners from './add-listeners-internal';
import getElem from './get-elem';
import render from './render';


const updatable = (
  doc,
  id,
  view,
  data = {},
  listeners = {},
) => {
  const elem = getElem(doc, id);

  render(elem, view, data);
  _addListeners(elem, listeners);
  
  return (update) => render(elem, view, update);
};


export default updatable;

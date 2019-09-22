import _addListeners from './add-listeners-internal';
import getElem from './get-elem';
import render from './render';


const setStatic = (
  doc,
  id,
  view,
  data = {},
  listeners = {},
) => {
  const elem = getElem(doc, id);

  render(elem, view, data);
  _addListeners(elem, listeners);
};


export default setStatic;

import _addListeners from './add-listeners-internal';
import getElem from './get-elem';
import render from './render';
import recursiveRender from './recursive-render';


const setMergeable = (
  doc,
  id,
  view,
  data = {},
  listeners = {},
  merge = (a, b) => ({ ...a, ...b }),
) => {
  const elem = getElem(doc, id);

  render(elem, view, data);
  _addListeners(elem, listeners);

  return recursiveRender(elem, view, data, merge);
};


export default setMergeable;

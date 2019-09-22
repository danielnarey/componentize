import deepEqual from 'dequal';
import render from './render';


const recursiveRender = (elem, view, data, merge) => (update) => {
  const merged = merge(data, update);

  if (!deepEqual(data, merged)) {
    render(elem, view, merged);
  }

  return recursiveRender(elem, view, merge, merged);
};


export default recursiveRender;

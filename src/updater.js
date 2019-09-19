/* eslint no-param-reassign: ["error", { "props": false }] */

import deepEqual from 'dequal';


const updater = (elem, view, merge) => (data) => (update) => {
  const merged = merge(data, update);

  if (!deepEqual(data, merged)) {
    try {
      elem.innerHTML = view(merged);
    } catch (err) {
      throw new Error(
        `On calling an updater on the component at id=${elem.id}, passing the merged data to the view function failed with message: ${err.message}`,
      );
    }
  }

  return updater(elem, view, merge)(merged);
};


export default updater;

/* eslint no-param-reassign: ["error", { "props": false }] */

import deepEqual from 'dequal';
import tryCatch from './try-catch';

const updater = (elem, view, merge) => (data) => (update) => {
  const merged = merge(data, update);

  if (!deepEqual(data, merged)) {
    tryCatch(
      () => elem.innerHTML = view(merged),
      (err) => `updater at id='${elem.id}' > view(merged) failed with message: ${err.message}`,
    );
  }

  return updater(elem, view, merge)(merged);
};


export default updater;

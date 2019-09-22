/* eslint no-param-reassign: ["error", { "props": false }] */

import tryCatch from './try-catch';


const render = (elem, view, data) => {
  tryCatch(
    () => { elem.innerHTML = view(data); },
    (err) => `componentize > view(data) failed with message: ${err.message}`,
  );
};


export default render;

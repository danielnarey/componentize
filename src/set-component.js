import throwIf from './throw-if';
import tryCatch from './try-catch';
import updater from './updater';


const setComponent = (
  doc,
  id,
  view,
  data = {},
  listeners = {},
  merge = (a, b) => ({ ...a, ...b }),
) => {
  const elem = doc.getElementById(id);

  throwIf(
    !elem,
    `setComponent > doc.getElementById('${id}') returned ${elem}.`,
  );

  tryCatch(
    () => elem.innerHTML = view(data),
    (err) => `setComponent > view(data) failed with message: ${err.message}`,
  );
  
  tryCatch(
    () => {
      for (let [key, value] of Object.entries(listeners)) {
        elem.addEventListener(key, value);
      }
    },
    (err) => `setComponent > adding event listeners failed with message: ${err.message}`
  );

  return updater(elem, view, merge)(data);
};


export default setComponent;

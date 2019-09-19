import throwIf from './throw-if';
import tryCatch from './try-catch';


const setRoot = (
  doc,
  view, 
  data = {},
) => {
  const rootElem = doc.getElementById('root');

  throwIf(
    !rootElem,
    `setRoot > doc.getElementById('root') returned ${rootElem}.`,
  );

  tryCatch(
    () => rootElem.innerHTML = view(data),
    (err) => `setRoot > view(data) failed with message: ${err.message}`,
  );
};


export default setRoot;

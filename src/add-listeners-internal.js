import tryCatch from './try-catch';


const _addListeners = (elem, listeners) => {
  tryCatch(
    () => {
      Object.entries(listeners).forEach(([key, value]) => {
        elem.addEventListener(key, value);
      });
    },
    (err) => `componentize > adding event listeners to ${elem.id} failed with message: ${err.message}`,
  );
};


export default _addListeners;

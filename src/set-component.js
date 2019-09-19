import updater from './updater';


const setComponent = (
  doc,
  id,
  view,
  data = {},
  merge = (a, b) => ({ ...a, ...b }),
) => {
  const elem = doc.getElementById(id);

  if (!elem) {
    throw new Error(
      `On calling setComponent(doc, id, view, [data, [merge]]) with id="${id}", doc.getElementById(id) returned ${elem}.`,
    );
  }

  try {
    elem.innerHTML = view(data);
  } catch (err) {
    throw new Error(
      `On calling setComponent(doc, id, view, [data, [merge]]) with id="${id}", passing data to the view function failed with message: ${err.message}`,
    );
  }

  return updater(elem, view, merge)(data);
};


export default setComponent;

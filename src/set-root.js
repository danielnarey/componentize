const setRoot = (
  doc,
  view, 
  data = {},
) => {
  const rootElem = doc.getElementById('root');

  if (!rootElem) {
    throw new Error(
      `On calling setRoot(doc, view, [data]), doc.getElementById("root") returned ${rootElem}.`,
    );
  }

  try {
    rootElem.innerHTML = view(data);
  } catch (err) {
    throw new Error(
      `On calling setRoot(doc, view, [data]), passing data to the view function failed with message: ${err.message}`,
    );
  }
};


export default setRoot;

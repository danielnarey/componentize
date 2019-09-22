const throwIf = (test, msg) => {
  if (test) {
    throw new Error(msg);
  }
};


export default throwIf;

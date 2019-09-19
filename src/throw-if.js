export default (test, msg) => {
  if (test) {
    throw new Error(msg);
  }
};

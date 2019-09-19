export default (call, msg) => {
  try {
    call();
  } catch (err) {
    throw new Error(msg(err));
  }
};

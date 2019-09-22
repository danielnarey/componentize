const tryCatch = (call, msg) => {
  try {
    call();
  } catch (err) {
    throw new Error(msg(err));
  }
};


export default tryCatch;

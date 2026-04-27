const logger = (req, res, next) => {
  console.log("start");
  next();
  console.log("end");
};

export default logger;

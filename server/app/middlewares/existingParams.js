const checkRequiredParams = (params) => {
  return (req, res, next) => {
    for (const param in params) {
      if (!req.body[params[param]]) {
        res.status(400).send({ message: params[param] + " is not exist" });
        return;
      }
    }

    next();
  };
};

module.exports = checkRequiredParams;
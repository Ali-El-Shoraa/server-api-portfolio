const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // stack: process.env.
  });
};

module.exports = {
  errorHandler,
};

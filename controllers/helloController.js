exports.hello = (req, res) => {
  console.log('Hello from the server!');

  return res.status(200).json({
    status: 'Success',
    message: 'Hello from the server!',
  });
};

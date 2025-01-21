const testUserController = (req, res) => {
  try {
    res.status(200).send({
      status: "sucess",
      message: "test user data API",
    });
  } catch (error) {
    console.log("error in test API", error);
  }
};

module.exports = { testUserController };

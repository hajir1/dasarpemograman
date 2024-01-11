import register from "../service/user-service.js";

const registered = async (req, res, next) => {
  try {
    const data = await register(req.body);
    res.status(201).json({
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      error: "Bad request",
    });
    next(error);
  }
};

export default {
  registered,
};

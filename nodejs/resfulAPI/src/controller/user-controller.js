import register from "../service/user-service";

const registered = async (req, res, next) => {
  try {
    const data = await register(req.body);
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    next(e);
  }
};

export default {
  registered,
};

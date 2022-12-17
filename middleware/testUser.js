import { BadRequestError } from "../errors/index.js";

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Demo users cannot modify dummy data");
  }
  next();
};

export default testUser;

import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../setup/database.js";
import { ResponseError } from "../error/response-error.js";
import bycrpt from "bcrypt";
const register = async (request) => {
  const user = validate(registerUserValidation, request);
  const countUser = await prismaClient.users.count({
    where: {
      username: validate.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "username or password allready exist");
  } 
  user.passwords = await bycrpt.hash(user.passwords, 10);
  return prismaClient.users.create({
    data: user,
    select:{
      username:true,
      name:true
    }
  });
};
export default register
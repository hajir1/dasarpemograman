import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../setup/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  try {
    const user = validate(registerUserValidation, request);

    const existingUser = await prismaClient.users.findUnique({
      where: {
        username: user.username,
      },
    });

    if (existingUser) {
      throw new ResponseError(400, "Username already exists");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await prismaClient.users.create({
      data: {
        username: user.username,
      },
      select: {
        username: true,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error); // Log kesalahan untuk pemantauan
    if (error instanceof ResponseError) {
      throw error; // Kembalikan kesalahan yang sudah di-handle dengan benar
    } else {
      throw new ResponseError(500, "Internal Server Error"); // Tangani kesalahan yang tidak terduga
    }
  }
};

export default register;

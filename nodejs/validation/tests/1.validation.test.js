import Joi from "joi";
describe("joi", () => {
  it("should be validation schema", () => {
    const schema = Joi.string().min(3).max(100).required();
    const result = schema.validate("hajir");
    if (schema.error) {
      console.log(result.error);
    }
  });
});

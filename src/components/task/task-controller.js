import Task from "./task-model.js";
import Joi from "joi";

export async function index(ctx) {
  try {
    ctx.body = await Task.find({});
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}
export async function create(ctx) {
  try {
    const taskValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string().required(),
      date: Joi.date().timestamp(),
    });
    const { error } = taskValidationSchema.validate(ctx.request.body);
    if (error) {
      throw new Error(error);

      ctx.body = "Works";
    } else {
      ctx.body = await Task.create(ctx.request.body);
    }
    ctx.body = await Task.find({});
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}
export async function update(ctx) {
  try {
    const taskValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string().required(),
      date: Joi.date().timestamp().optional(),
    });

    const { error } = taskValidate.validate(ctx.request.body);
    if (error) {
      throw new Error(error.message);
    } else {
      ctx.body = await Task.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
        runValidators: true,
        new: true,
      });
    }
    ctx.body = await Task.find({});
  } catch (err) {
    ctx.badRequest({ message: err.message });
  }
}
export async function supprimer(ctx) {
  try {
    ctx.body = await Task.findByIdAndDelete(ctx.params.id);
  } catch (err) {
    ctx.badRequest({ message: err.message });
  }
}

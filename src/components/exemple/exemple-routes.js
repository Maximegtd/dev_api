import Router from "@koa/router";
import * as ExempleController from "#components/exemple/exemple-controller.js";

const exemples = new Router();

exemples.get("/", ExempleController.index);

exemples.get("/", (ctx) => {
  ctx.body = todos;
});

exemples.get("/:id", (ctx) => {
  ctx.body = todos.find((t) => t.id === parseInt(ctx.params.id));
});

exemples.post("exeples", (ctx) => {
  const newTask = {
    id: todos.length + 1,
    title: ctx.request.body.title,
  };
  todos.push(newTask);
  ctx.status = 204;
});

exemples.put("/:id", (ctx) => {
  const task = todos.find((t) => t.id === parseInt(ctx.params.id));
  task.title = index + 1 + "updated";
  ctx.body = todos;
});

exemples.delete("/:id", (ctx) => {
  const updatedTodos = todos.filter((t) => t.id !== parseInt(ctx.params.id));
  ctx.body = updatedTodos;
});

export default exemples;

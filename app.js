import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();
const todos = [
  {
    id: 1,
    title: "Acheter des patates",
  },
  {
    id: 2,
    title: "Acheter des pommes",
  },
  {
    id: 3,
    title: "Acheter du pain",
  },
];

router.get("/todos", (ctx, next) => {
  ctx.body = todos;
});

router.get("/todos/:id", (ctx) => {
  ctx.body = todos.find((t) => t.id === parseInt(ctx.params.id));
});

router.post("todos", (ctx) => {
  const newTask = {
    id: todos.length + 1,
    title: ctx.request.body.title,
  };
  todos.push(newTask);
  ctx.status = 204;
});

router.put("/todos/:id", (ctx) => {
  const task = todos.find((t) => t.id === parseInt(ctx.params.id));
  task.title = index + 1 + "updated";
  ctx.body = todos;
});

router.delete("/todos/:id", (ctx) => {
  const updatedTodos = todos.filter((t) => t.id !== parseInt(ctx.params.id));
  ctx.body = updatedTodos;
});

app.use(bodyParser).use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () =>
  console.log(`server listening to port: ${process.env.PORT}`)
);

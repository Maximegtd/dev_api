import Router from "@koa/router";
import exempleRoutes from "#components/exemple/exemple-routes.js";

const API_V1_ROUTER = new Router({ prefix: "/api/v1" });

// const router = new Router();

// router.get("/", (ctx) => {
//   ctx.body = "Hello";
// });

API_V1_ROUTER.use(
  "/exemples",
  exempleRoutes.routes(),
  exempleRoutes.allowedMethods()
);

export { API_V1_ROUTER };

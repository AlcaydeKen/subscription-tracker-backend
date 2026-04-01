import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import { createUser, editUser, getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", createUser);

userRouter.put("/:id", editUser);

// To update delete controller and add authorization middleware
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE User by ID" });
});


export default userRouter;
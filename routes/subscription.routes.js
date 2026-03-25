import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET All Subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET Subscription by ID" });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE Subscription by ID" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE Subscription by ID" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL Subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET Upcoming Renewals" });
});

export default subscriptionRouter;
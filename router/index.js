import express from "express";
import userRoute from "./userRoute.js";
import courseRoute from "./courseRoute.js";
import orderRoute from "./orderRoute.js";
import topicRoute from "./topicRouter.js";
import commentRoute from "./commentRoute.js";
import replyRoute from "./replyRoute.js";
import reviewRoute from "./reviewRoute.js";

const router = express.Router();

// user route --
router.use("/user", userRoute);
router.use("/course", courseRoute);
router.use("/order", orderRoute);
router.use("/topic", topicRoute);
router.use("/comment", commentRoute);
router.use("/reply", replyRoute);
router.use("/review", reviewRoute);

export default router;

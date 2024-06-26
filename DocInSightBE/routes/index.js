import Router from "express";
import verifyJWT from "../middlewares/verifyJWT.js";
import errorHandler from "../middlewares/errorHandler.js";
import authRouters from "./authRouters.js";
import refreshRouters from "./refreshRouters.js";

import userRouters from "./userRouters.js";
import resultRouter from "./predictResultRouters.js";
import patientRouter from "./patientRouters.js";

const router = Router();

router.use(authRouters);
router.use(refreshRouters);

router.use(verifyJWT);
router.get("/test", (req, res) => {
  res.status(200).json("OK");
});
router.use(userRouters);
router.use(resultRouter);
router.use(patientRouter);

// error handler all routes
router.use(errorHandler);

router.use(function (req, res, next) {
  res.status(404).json({ message: "Api not found" });
  return;
});

export default router;

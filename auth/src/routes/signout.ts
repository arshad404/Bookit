import express from "express";

const router = express.Router();

router.get("/api/users/signout", (req, res) => {
  req.session = null;
  res.status(200).send({ message: "Signout successfully" });
});

export { router as signoutRouter };

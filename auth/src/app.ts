import express from "express";
import { json } from "body-parser";
import "express-async-errors"; //to look throw error line in async function
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.set("trust proxy", true); //to trust traffic https connection
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true, //check if connection is https
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  // next(new NotFoundError());
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

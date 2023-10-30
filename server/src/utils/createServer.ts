import express, { Express } from "express";
import UserRoute from "../routes/user.route";
export default function createServer(): Express {
    const app = express();
    app.use(express.json());
    app.use("/user", UserRoute);

    return app;
}


import express from "express";
import mongoose from "mongoose";
import Product from "./src/models/product.model.js";
import productRoute from "./src/routes/product.route.js";
import employeeRoute from "./src/routes/employee.route.js";
import authRoute from "./src/routes/auth.route.js";
import connectDB from "./src/config/db.js";
import logger from "./src/middleware/logger.middleware.js";
import authMiddleware from "./src/middleware/auth.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/swagger/swagger.js";

const app = express();
const port = 3001;

//connection
await connectDB().then(() => {
  app.listen(port, () => {
    console.log("Listening-----", port);
  });
});

//swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

//routes
app.use("/api/auth", authRoute);
app.use("/api/products", authMiddleware, productRoute);
app.use("/api/employees", authMiddleware, employeeRoute);

app.get("/", authMiddleware, (req, res) => {
  res.send("Hello !!!");
});

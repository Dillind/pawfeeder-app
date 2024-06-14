import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

// Enable CORS
app.use(
  cors({
    origin: true,
  })
);

// Enable JSON request parsing middleware
app.use(express.json());

// Import and use the route defined by the controller

// Catch errors raised by endpoints and respond with JSON error object

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`Started a server on: http://localhost:${port}`);
});

// server.js
import express from "express";
import products from "./data.js"; // Import the array directly
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/products", (req, res) => {
  console.log("Request received for /api/products");
  console.log("Sending products data:", products);

  // Set content type to application/json
  res.setHeader("Content-Type", "application/json");

  res.json({ products });
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.setHeader("Content-Type", "application/json");
    res.json(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

app.get("/api/products/_id/:id", (req, res) => {
  const product = products.find((x) => x._id === req.params.id);
  if (product) {
    res.setHeader("Content-Type", "application/json");
    res.json(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

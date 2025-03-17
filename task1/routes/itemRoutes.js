const express = require("express");
const router = express.Router();

let items = [];

//Create operation
router.post("/", (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

//Read
router.get("/", (req, res) => {
  res.json(items);
});

//Read by id
router.get("/:id", (req, res) => {
  const item = items.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Update operation
router.put("/:id", (req, res) => {
  const index = items.findIndex((i) => i.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

//Delete operation
router.delete("/:id", (req, res) => {
  items = items.filter((i) => i.id != req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;

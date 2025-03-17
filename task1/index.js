const express = require("express");
const app = express();

app.use(express.json());

const itemRoutes = require("./routes/itemRoutes");
app.use("/items", itemRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Task 1 API running on port ${PORT}`));

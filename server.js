const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");

const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/courses", courseRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "frontend")));

// Default route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});


const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


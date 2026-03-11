const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const bookingsRoutes = require("./routes/bookings");
const timetableRoutes = require("./routes/timetable");

const app = express();
const PORT = process.env.PORT || 5000;


// -------------------- Middleware --------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// -------------------- Serve Frontend --------------------

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


// -------------------- API Routes --------------------

app.use("/", authRoutes);
app.use("/", bookingsRoutes);
app.use("/", timetableRoutes);


// -------------------- Health Check --------------------

app.get("/health", (req, res) => {
  res.json({
    status: "Server is running",
    timestamp: new Date()
  });
});


// -------------------- Start Server --------------------

app.listen(PORT, () => {
  console.log(`🚀 BookMyCampus server running on port ${PORT}`);
});
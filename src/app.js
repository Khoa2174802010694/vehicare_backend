const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const maintenanceTypeRoutes = require("./routes/maintenanceTypeRoutes");
const maintenanceLogRoutes = require("./routes/maintenanceLogRoutes");
const maintenanceReminderRoutes = require("./routes/maintenanceReminderRoutes");
const garageRoutes = require("./routes/garageRoutes");
const garageServiceRoutes = require("./routes/garageServiceRoutes");
const rescueRequestRoutes = require("./routes/rescueRequestRoutes");
const rescueProviderRoutes = require("./routes/rescueProviderRoutes");
const rescueAssignmentRoutes = require("./routes/rescueAssignmentRoutes");
const forumRoutes = require("./routes/forumRoutes");
const trafficLawRoutes = require("./routes/trafficLawRoutes");
const partsCatalogRoutes = require("./routes/partsCatalogRoutes");
const insurancePackageRoutes = require("./routes/insurancePackageRoutes");
const vehicleDocumentRoutes = require("./routes/vehicleDocumentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/maintenance-types", maintenanceTypeRoutes);
app.use("/api/maintenance-logs", maintenanceLogRoutes);
app.use("/api/maintenance-reminders", maintenanceReminderRoutes);
app.use("/api/garages", garageRoutes);
app.use("/api/garage-services", garageServiceRoutes);
app.use("/api/rescue-requests", rescueRequestRoutes);
app.use("/api/rescue-providers", rescueProviderRoutes);
app.use("/api/rescue-assignments", rescueAssignmentRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/traffic-laws", trafficLawRoutes);
app.use("/api/parts", partsCatalogRoutes);
app.use("/api/insurance-packages", insurancePackageRoutes);
app.use("/api/vehicle-documents", vehicleDocumentRoutes);

app.get("/", (req, res) => {
  res.send("Vehicare API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
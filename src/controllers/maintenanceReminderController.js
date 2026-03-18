const service = require("../services/maintenanceReminderService");

exports.getReminders = async (req, res) => {
  try {
    const reminders = await service.getReminders(req.params.vehicleId);
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createReminder = async (req, res) => {
  try {
    const reminder = await service.createReminder(req.body);
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
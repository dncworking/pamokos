const express = require("express");
const bodyParser = require("body-parser");
const os = require("os");
const si = require("systeminformation");

const app = express();

app.use(bodyParser.json());
// Alphabetize keys in JSON
app.put("/api/v1/alpha", (req, res) => {
  try {
    const input = req.body;
    const sortedKeys = Object.keys(input).sort();
    const sortedJson = sortedKeys.reduce((acc, key) => {
      acc[key] = input[key];
      return acc;
    }, {});
    res.status(200).json(sortedJson);
  } catch (error) {
    red.status(500).send({ error: "An error occurred while process" });
  }
});

//flatten
app.put("/api/v1/flatten", (req, res) => {
  const payload = req.body;

  const flattenedPayload = {};
  for (const key in payload) {
    if (Array.isArray(payload[key])) {
      flattenedPayload[key] = payload[key].join(",");
    } else {
      flattenedPayload[key] = payload[key];
    }
  }

  res.json(flattenedPayload);
});

// Get system status
app.get("/api/v1/status", async (req, res) => {
  try {
    const memInfo = await si.mem();
    const cpuLoad = await si.currentLoad();

    const memUsedPct = ((memInfo.active / memInfo.total) * 100).toFixed(1);
    const cpuUsedPct = cpuLoad.currentLoad.toFixed(1);

    res.status(200).json({
      "mem-used-pct": parseFloat(memUsedPct),
      "cpu-used-pct": parseFloat(cpuUsedPct),
    });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching system information." });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port${PORT}`);
});

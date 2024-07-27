// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const axios = require("axios");
const authRoute = require("./routes/auth");
const Location = require("./models/location");
const locationRoute = require("./routes/locations");
const path = require("path");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {});
// const Location = mongoose.model('Location', locationSchema);

// Routes
app.use("/", authRoute);
app.use("/", locationRoute);

app.get("/api/weather/:city", async (req, res) => {
  try {
    const { city } = req.params;
    console.log(city);

    OPENWEATHER_API_KEY = "edcb299fa48d44fd8f883f71d3463076";
    const response = await axios.get(
      `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={edcb299fa48d44fd8f883f71d3463076}`
    );
    res.json(response);
    console.log(res)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/locations", async (req, res) => {
  try {
    const { city, country } = req.body;
    const newLocation = new Location({ city, country });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/api/locations/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Location.findByIdAndDelete(id);
    res.json({ message: 'Location deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Location not found' });
  }
});


//---------------------------


// Routes
// app.get("/api/weather/:city", async (req, res) => {
//   // Your existing weather API endpoint
// });

// app.post("/api/locations", async (req, res) => {
//   // Your existing endpoint to add a single location
// });

app.post("/api/locations/save", async (req, res) => {
  try {
    const { city, country } = req.body;

    console.log("tesdxfcvb", city,country);


    const location = await Location.findOne();

    if (!location) {
      // If no location document exists, create a new one
      const newLocation = new Location({
        savedLocations: [{ city, country }]
      });
      await newLocation.save();
      res.status(201).json(newLocation);
    } else {
      // If location document already exists, update it
      location.savedLocations.push({ city, country });
      await location.save();
      res.status(201).json(location);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// app.get("/api/locations", async (req, res) => {
//   // Your existing endpoint to fetch all saved locations
// });


//---------------------

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const express = require('express');
const app = express();
const cron = require('node-cron');
const axios = require('axios');
const WeatherData = require('./WeatherData'); // Ensure this module exports a constructor or factory function appropriately

// Function to generate random weather data for a given district
function generateWeatherData(district) {
    // Example: Temperature in Celsius (valid range: 15°C to 40°C)
    const temp = Math.floor(Math.random() * 26) + 15; // Corrected variable name to 'temperature'

    // Example: Humidity in percentage (valid range: 70% to 90%)
    const humidity = Math.floor(Math.random() * 21) + 70;

    // Example: Air pressure in hPa (valid range: 1000 hPa to 1020 hPa)
    const airPressure = Math.floor(Math.random() * 21) + 1000;


    // Get current date and time
    const UpdatedDateTime = new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString(); // Corrected variable name to 'lastUpdatedDateTime'

    return new WeatherData(temp, humidity, airPressure, UpdatedDateTime, district);
}

// Function to insert weather data for a given district
async function insertWeatherDataForDistrict(district) {
    const weatherData = generateWeatherData(district);
    try {
        await axios.patch('http://localhost:3002/api/v1/weather/lk/byDistrict', {
            district: district,
            weatherData: weatherData
        });
        console.log(`Weather data inserted successfully for ${district}.`); // Corrected template literal syntax
    } catch (error) {
        console.error(`Error inserting weather data for ${district}:`, error.message); // Corrected template literal syntax
    }
}

// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Schedule to insert weather data for all districts every 5 minutes
cron.schedule('*/5 * * * *', async () => {
    const districtsOfSriLanka = [
        "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
        "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy",
        "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale",
        "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa",
        "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
    ];

    for (const district of districtsOfSriLanka) {
        await insertWeatherDataForDistrict(district);
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at ${new Date().toLocaleString()}`); // Corrected template literal syntax
});

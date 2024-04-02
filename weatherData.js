class WeatherData {

    constructor(temperature, humidity, airPressure, lastUpdatedDateTime, district) {
        this._temperature = temperature;
        this._humidity = humidity;
        this._airPressure = airPressure;
        this._lastUpdatedDateTime = lastUpdatedDateTime;
        this._district = district;
    }

    // Getters and setters for temperature
    get temperature() {
        return this._temperature;
    }

    set temperature(value) {
        this._temperature = value;
    }

    // Getters and setters for humidity
    get humidity() {
        return this._humidity;
    }

    set humidity(value) {
        this._humidity = value;
    }

    

}
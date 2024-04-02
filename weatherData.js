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

    // Getters and setters for airPressure
    get airPressure() {
        return this._airPressure;
    }
    
    set airPressure(value) {
        this._airPressure = value;
    }

    // Getters and setters for UpdatedDateTime
    get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    }
    
    set lastUpdatedDateTime(value) {
        this._lastUpdatedDateTime = value;
    }

    // Getters and setters for district
    get district() {
        return this._district;
    }
    
    set district(value) {
        this._district = value;
    }
}

module.exports = WeatherData;
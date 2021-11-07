import axios from 'axios';

class WeatherApiClient {
    static apiKey = process.env.REACT_APP_WEATHERAPI_API_KEY;
    static baseUrl = 'http://api.weatherapi.com/v1';

    static async getWeather(lat, long) {
        const resp = await axios.get(
            `${this.baseUrl}/current.json?key=${this.apiKey}&q=${lat},${long}`
        );
        return resp.data;
    }

    static async getWeatherByCityName(cityName) {
        const resp = await axios.get(
            `${this.baseUrl}/current.json?key=${this.apiKey}&q=${cityName}`
        );

        return resp.data;
    }

    // Seems like another cool feature to add when I have time.
    static async getForecastAlerts(lat, long) {
        const resp = await axios.get(
            `${this.baseUrl}/alerts.json?key=${this.apiKey}&q=${lat},${long}`
        );

        return resp.data;
    }
}

export default WeatherApiClient;

export default class CurrentWeatherData {
  constructor({ location, current_observation }) {
    this.city = location.city;
    this.country = location.country;
    this.condition = current_observation.condition.text;
    this.temperature = current_observation.condition.temperature;
  }
}

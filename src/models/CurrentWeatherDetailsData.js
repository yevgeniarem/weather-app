export default class CurrentWeatherDetailsData {
  constructor({
    current_observation: { wind, atmosphere, condition },
    forecasts: [today],
  }) {
    this.humidity = atmosphere.humidity;
    this.visibility = atmosphere.visibility;
    this.condition = condition.text;
    this.wind = wind.speed;
    this.high = today.high;
    this.low = today.low;
  }
}

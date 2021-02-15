export default class ForecastDayData {
  constructor({ day, high, low, text }) {
    this.day = day;
    this.high = `${high}°F`;
    this.low = `${low}°F`;
    this.text = text;
  }
}

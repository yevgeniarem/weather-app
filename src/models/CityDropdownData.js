export default class CityDropdownData {
  constructor({ woeid, city, region }) {
    this.id = woeid;
    this.displayName = `${city}, ${region}`;
  }
}

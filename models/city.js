// City Model
class city {
    constructor(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {  
      this.city = city;
      this.city_ascii = city_ascii;
      this.lat = lat;
      this.lng = lng;
      this.country = country;
      this.iso2 = iso2;
      this.iso3 = iso3;
      this.admin_name = admin_name;
      this.capital = capital;
      this.population = population;
      this.id = id;
    }

    static newCity(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) { 
      return new City(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id);
    }
}

module.exports = city;
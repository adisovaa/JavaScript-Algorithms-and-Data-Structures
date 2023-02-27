// 18. Use getters and setters to Control Access to an Object

class Thermostat {
    constructor(fahrenheit) {
      this._celsius = (5 / 9) * (fahrenheit - 32);
    }
    
    get temperature() {
      return this._celsius;
    }
    
    set temperature(celsius) {
      this._celsius = celsius;
    }
  }
  
  
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
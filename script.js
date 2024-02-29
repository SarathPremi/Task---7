const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.responseType = "json";
req.onload = function () {
  if (req.status === 200) {
    const data = req.response;
    // Getting all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries from Asia:", asiaCountries);

    // Getting all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      countriesWithLowPopulation
    );

    // Printing the following details name, capital, flag, using forEach function
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
      );
    });

    // Printing the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);

    // Printing the country that uses US dollars as currency
    const usDollarCountries = data.filter((country) => {
      return country.currencies && country.currencies.USD;
    });
    if (usDollarCountries.length > 0) {
      console.log("Countries using US dollars as currency:", usDollarCountries);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  } else {
    console.error("Error fetching data:", req.statusText);
  }
};
req.onerror = function () {
  console.error("Request failed");
};


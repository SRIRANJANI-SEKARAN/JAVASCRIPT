const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh']

  //1
  //console.table(countries)
  

  const countries_data = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://restcountries.eu/data/ago.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://restcountries.eu/data/aia.svg',
      currency: 'East Caribbean dollar'
    }]

  //2 3
 /*    countries_data.forEach(country=>country.languages=country.languages.join(',')) //converting languages array into string
    console.table(countries_data, ['name', 'capital', 'languages', 'population', 'flag', 'currency']); */

    
    for(let i=0;i<countries_data.length;i++){
      console.group(countries_data[i].name)
      countries_data[i].languages=countries_data[i].languages.join(',')
      console.table(countries_data[i]) //[countries_data[i]]-table will be horizondal
      console.groupEnd()
    }

   /*  countries_data.forEach(country=>{
      console.group(country.name);
      console.log(countries_data)
      console.group
    }) */
  /*   for (let i = 0; i < countries_data.length; i++) {
      const country = countries_data[i];
      console.group(country.name); // Start a group with the country name
      console.table([country], ['name', 'capital', 'languages', 'population', 'flag', 'currency']); // Display the country info
      console.groupEnd(); // End the group
    } */
    

    
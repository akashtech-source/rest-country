fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button class="button" onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

   
}

const displayCountryDetail = name => {
    const url = `
    https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <h5>Population: ${country.population}</h5>
        <h5>Area: ${country.area}</h5>
        <h5>Native Name: ${country.nativeName}</h5>
        <img src= "${country.flag}">

    `
}
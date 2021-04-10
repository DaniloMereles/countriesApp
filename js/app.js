import {Mode} from "./modules/Mode.js";
import {renderCountries} from "./modules/renderCountries.js";
import {searchCountry} from "./modules/searchCountry.js";

axios('https://restcountries.eu/rest/v2/all').then(rest => {
    let countries = rest.data

    renderCountries(countries)
    searchCountry(countries)
})

Mode()
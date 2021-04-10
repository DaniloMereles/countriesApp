import {renderCountries} from "./renderCountries.js";
const form = document.getElementById('form-search')
const input = document.getElementById('search-country')

export const searchCountry = country => {


    form.addEventListener('keyup', e => {
        e.preventDefault()

        let textClient = input.value.toLowerCase()

        let countryFilter = country.filter(data => {
            let countryName = data.name.toLowerCase()

            if(countryName.indexOf(textClient) !== -1){
                return data 
            }
        })

        console.log(countryFilter);
        renderCountries(countryFilter)
    })
}
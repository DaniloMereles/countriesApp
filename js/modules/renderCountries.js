export const renderCountries = (countries)=>{
    let template = ''
    const countriesElement = document.getElementById('countries')

    countries.forEach(element => {

        template += 
        `
            <article class="country" data-name="${element.name}">
                <img src="${element.flag}" alt="Flag ${element.name}" class="country__flag">

                <div class="country__info">
                    <h2 class="country__name">
                        ${element.name}
                    </h2>

                    <p class="country__data">
                        <b class="country__data-title">Population:</b> ${element.population}
                    </p>

                    <p class="country__data">
                        <b class="country__data-title">Region:</b> ${element.region}
                    </p>

                    <p class="country__data">
                        <b class="country__data-title">Capital:</b> ${element.capital}
                    </p>
                </div>
            </article>
        `
    });

    countriesElement.innerHTML = template

}
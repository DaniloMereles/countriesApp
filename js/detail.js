const main = document.getElementById('main')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')

axios(`https://restcountries.eu/rest/v2/name/${params}`).then(rest => {
    let data = rest.data
    let templateDetails = ''


    data.forEach(element => {
        console.log(element);
        templateDetails += 
        `
            <article class="datail">
                <img src="${element.flag}" class="detail__flag" alt="Flag ${element.name}">


                <div class="deatil__texts">
                    <h1 class="detail__texts-title">
                        ${element.name}
                    </h1>

                    <div class="detail__grid">
                        <div class="detail__container">
                            <div class="detail__info">
                                <b class="detail__title">
                                    Native Name: 
                                </b>
                                ${element.nativeName}
                            </div>

                            <div class="detail__info">
                                <b class="detail__title">
                                    Population:
                                </b>
                                ${element.population}
                            </div>

                            <div class="detail__info">
                                <b class="detail__title">
                                    Region:
                                </b>
                                ${element.region}
                            </div>

                            <div class="detail__info">
                                <b class="detail__title">
                                    SubRegion:
                                </b>
                                ${element.subregion}
                            </div>

                            <div class="detail__info">
                                <b class="detail__title">
                                    Capital:
                                </b>
                                ${element.capital}
                            </div>
                        </div>

                        <div class="detail__container">
                            <div class="detail__info">
                                <b class="detail__title">
                                    Top Level Domain: 
                                </b>
                                ${element.topLevelDomain}
                            </div>

                            <div class="detail__info">
                                <b class="detail__title">
                                    Currencies: 
                                </b>
                                ${element.currencies[0].name}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `
    });

    main.innerHTML = templateDetails
})
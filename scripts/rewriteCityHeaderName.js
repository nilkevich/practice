const changeCity = (e) => {

    if (localStorage.key === null && localStorage.value === null) {
        cityHeaderName.innerText = "Санкт-Петербург"
    } else {
    
    const city = e.currentTarget.getAttribute('data-city');
        console.log(city);

        localStorage.setItem('city', city);

        cityHeaderName.innerHTML = localStorage.getItem('city');

    }
}        

const initEvent = (arr) => {

    for (let i=0; i <= arr.length; i++) {
        arr[i].addEventListener('click', changeCity);
        
    }

}

cityHeaderName.innerHTML = localStorage.getItem('city');


initEvent(citiesNames);
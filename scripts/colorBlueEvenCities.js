const colorBlueEvenCities = (arr) => {

    for (let i = 0; i <= arr.length; i++) {

    
    
        if(i%2 != 0) {
            arr[i].style.color = "#48CCFD";
        }
       
        
    }
}

colorBlueEvenCities(citiesNames);


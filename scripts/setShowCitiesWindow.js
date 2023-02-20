const setShowCitiesWindow = () => {

    function openWindow(element) {
        element.style.display = 'block';
        body.style.overflow = 'hidden';
    }

    if (window.screen.width > 767) {
        openWindow(citiesDesktop);
    } else {
        openWindow(citiesMobile);
    }
    
}

const closeCitiesWindow = () => {
   
    citiesDesktop.style.display = 'none';
    
    body.style.overflow = 'visible';

}

const btnCloseCross = document.querySelector('.btn-cross');
const closeCitiesWindowMobile = () => {

    citiesMobile.style.display = 'none';
    body.style.overflow = 'visible';
}

btnCloseCross.addEventListener('click', closeCitiesWindowMobile)
cityHeader.addEventListener('click', setShowCitiesWindow);

citiesDesktop.addEventListener('click', closeCitiesWindow);





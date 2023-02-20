
const openTelBlockModalWindow = () => {
    telBlockModalWindow.style.display = 'block'; // красивее было бы добавлять класс с новыми свойствами.
    body.style.overflow = 'hidden';
    popUpBlock.classList.remove("popup-close");
    popUpBlock.classList.add("popup-animation");
}

btnPromo.addEventListener('click', openTelBlockModalWindow);

const displayNone = () => {
    telBlockModalWindow.style.display = 'none';
}
const closeTelBlockModalWindow = () => {
    popUpBlock.classList.add("popup-close");
    setTimeout(displayNone, 100);
    body.style.overflow = 'visible';
    popUpBlock.classList.remove("popup-animation");
    

}

btnClose.addEventListener('click', closeTelBlockModalWindow);
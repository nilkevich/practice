function launchToast() {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ 
       toast.className = toast.className.replace("show", ""); 
    }, 500);
 }
 
btnOffer.addEventListener('click', launchToast);
 
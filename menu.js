function openMenu() {
    var menu = document.querySelector('.menu-content');
    menu.classList.toggle('show'); // Adaugă/înlătură clasa 'show'
}

function navigateAndCloseMenu(sectionId) {
    if (sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
    var menu = document.querySelector('.menu-content');
    menu.classList.remove('show'); // Ascunde meniul după navigare
}

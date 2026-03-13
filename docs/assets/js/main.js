const BASE_PATH = window.location.origin+'/docs/';
async function loadComponent(id, file) {

    const response = await fetch(BASE_PATH + file);
    const data = await response.text();

    document.getElementById(id).innerHTML = data;

}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");

});
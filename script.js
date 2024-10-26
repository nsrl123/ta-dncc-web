const navbar = document.querySelector('.navbar');
const menuTypes = document.querySelectorAll(".type-image-wrapper");
const menuImage = document.querySelectorAll('.menu-card img');

menuTypes.forEach((menuTypes, idx) => {
    menuTypes.addEventListener('click',()=> {

    })
})
 const addActive = (el,index) => {
    el.classList.add('active');

    menuTypes.forEach('menuty')
 }

window.onscroll = () => {
    if(window.scrollY > 30) {
        navbar.classList.add('navbar-active')
    }
}
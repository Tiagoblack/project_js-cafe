const toggleNavbar = document.querySelector('.menu-nav i');
const navBar = document.querySelector('.menu-nav ul')
const closeNavBar = document.querySelector('.menu-nav .close');


closeNavBar.addEventListener('click', function(){
    navBar.style.display= 'none';
})
toggleNavbar.addEventListener('click', function(){
    navBar.style.display = 'block'
    closeNavBar.style.display = 'block';
});


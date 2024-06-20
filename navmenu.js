const toggleButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    event.stopPropagation(); 
});


document.addEventListener('click', function(event) {
    const target = event.target;
    const isMenuClicked = menu.contains(target) || target === toggleButton;
    
    if (!isMenuClicked && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

document.getElementById('hamb').onclick = function() {
    if ($('nav').hasClass('nav-mob')) {
        $("nav").removeClass("nav-mob");
    } else {
        $("nav").addClass("nav-mob")
    }
}

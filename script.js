if (window.innerWidth > 1000) {
    let navIsVisible = true;
} else {
    let navIsVisible = false;
}

document.getElementById('nav_button').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const screenWidth = window.innerWidth;
    if (nav.style.display === 'none' || window.getComputedStyle(nav).display === 'none') {
        nav.style.display = 'block';
        navIsVisible = true;
        if (screenWidth > 1000) {
            body.style.paddingLeft = '320px';
        }
    } else {
        nav.style.display = 'none';
        navIsVisible = false;
        body.style.paddingLeft = '0';
    }
});

window.addEventListener('resize', function () {
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
        if (navIsVisible) {
            nav.style.display = 'block';
            body.style.paddingLeft = '320px';
        }
    } else {
        if (!navIsVisible) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
        body.style.paddingLeft = '0';
    }
});
const header = document.createElement("header");
header.innerHTML = `
    <div>
    <button id="nav_button">
      <svg height="60" width="70px">
        <rect fill="#00E1E1" height="7px" rx="3" ry="3" width="45px" x="12.5" y="15"></rect>
        <rect fill="#00E1E1" height="7px" rx="3" ry="3" width="45px" x="12.5" y="30"></rect>
        <rect fill="#00E1E1" height="7px" rx="3" ry="3" width="45px" x="12.5" y="45"></rect>
      </svg>
    </button>
    <div class="home_bar_items">
      <a href="/"><img alt="Ichika logo/home button" class="header_home_button" src="/images/favicon.ico"></a>
      <a href="/"><span>Ichika</span></a>
    </div>
  </div>
`;
document.body.appendChild(header);


const sidebar = document.createElement("nav");
sidebar.innerHTML = `
   <div class="nav_content menu_container">
        <span>Navigation</span>
    </div>
    <a href="/figures">
        <div class="nav_content"><span>Figures</span></div>
    </a>
    <a href="/python">
        <div class="nav_content"><span>Python</span></div>
    </a>
    <a href="/chemistry">
        <div class="nav_content"><span>Chemistry</span></div>
    </a>
    <a href="/physics">
        <div class="nav_content"><span>Physics</span></div>
    </a>
    <a href="/maths">
        <div class="nav_content"><span>Maths</span></div>
    </a>
    <svg height="5" width="100%">
        <rect fill="#002424" height="3" rx="3" ry="3" width="100%"></rect>
    </svg>
    <div class="nav_content menu_container" style="display: none">
        <span>Page Links</span>
    </div>
    <p>Only the Homepage, figures page and chemistry page exist.</p>
`;
document.body.appendChild(sidebar);


document.getElementById('nav_button').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const screenWidth = window.innerWidth;
    if (nav.style.display === 'none' || window.getComputedStyle(nav).display === 'none') {
        nav.style.display = 'block';
        navIsVisible = true;
        if (screenWidth > 1200) {
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
    if (screenWidth > 1200) {
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
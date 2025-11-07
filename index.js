const nav = document.createElement("nav");
nav.innerHTML = `
<a href="/"><button>Home</button></a>
<a href="/figures"><button>Figures</button></a>
`;
document.body.prepend(nav);

const footer = document.createElement("footer");
footer.innerHTML = `
<footer><a href="/links">Navigation</a></footer>
`;
document.body.appendChild(footer);

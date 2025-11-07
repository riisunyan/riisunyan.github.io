const nav = document.createElement("nav");
nav.innerHTML = `
<button onclick="window.location.href='/'">Home</button>
<button onclick="window.location.href='/figurines'">Figurines</button>
<button onclick="window.location.href='/coding/python'">Python</button>
<button onclick="window.location.href='/coding/rust'">Rust</button>
`;
document.body.prepend(nav);

const footer = document.createElement("footer");
footer.innerHTML = `
<footer><a href="/links">Navigation</a></footer>
`;
document.body.appendChild(footer);

const favicon = document.createElement("link");
favicon.href = "/contents/images/favicon.ico";
favicon.rel = "icon";
favicon.type = "image/x-icon";
document.body.appendChild(favicon);

const viewport = document.createElement("meta");
viewport.name="viewport";
viewport.content="width=device-width, initial-scale=1";
document.body.appendChild(viewport);

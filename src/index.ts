import * as three from 'three';

window.addEventListener("load", () => {
    const header = document.createElement("h1");
    header.innerText = "Hello from TypeScript!";
  
    const body = document.querySelector("body");
    body.appendChild(header);
  })
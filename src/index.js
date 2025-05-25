import "./styles/home.css"
import home from  "./pages/home.js"
import render from "./functions/render.js";

const homeButton = document.querySelector("#homeButton");

homeButton.addEventListener('click', () => {
    render();
    home();
})
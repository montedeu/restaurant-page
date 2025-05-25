import "./styles/home.css"
import home from  "./pages/home.js"

const homeButton = document.querySelector("#homeButton");

homeButton.addEventListener('click', () => {
    home();
})
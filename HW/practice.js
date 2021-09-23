// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2_selector = document.querySelector("h2");

const superEventHandler = {
    mouseTop : function() {
        h2_selector.innerText = "The mouse is Here!";
        h2_selector.style.color = colors[0];
    },
    mouseLeaves : function() {
        h2_selector.innerText = "The mouse is gone!";
        h2_selector.style.color = colors[1];
    },
    resized : function() {
        h2_selector.innerText = "Window is resized!";
        h2_selector.style.color = colors[2];
    },
    rightClick : function() {
        h2_selector.innerText = "Mouse right button is Clicked!";
        h2_selector.style.color = colors[3];
    }
}


h2_selector.addEventListener('mouseenter',superEventHandler.mouseTop);
h2_selector.addEventListener('mouseleave',superEventHandler.mouseLeaves);
window.addEventListener('resize',superEventHandler.resized);
window.addEventListener('contextmenu',superEventHandler.rightClick);
const render = function() {
    const content = document.querySelector("#content");
    content.style="";
    while (content.children.length > 0) {
        content.children[0].remove();
    }
};

export default render;